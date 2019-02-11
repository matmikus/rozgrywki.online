const router = require('express')()
const validator = require('./../shared/validator')
const schema = require('./../schema/login')
const db = require('./../shared/db')
const jwt = require('jsonwebtoken')

router.post('/login', (req, res) => {
  const validationResult = validator.getValidationErrors(req.body, schema)
  if (validationResult.length > 0) {
    res.send(validationResult)
  } else {
    db.databaseClient().query({
      text: 'select * from users where login=$1 and password=$2;',
      values: [req.body.login, req.body.password]
    }, (err, dbResult) => {
      const success = dbResult.rows.length === 1
      if (success) {
        const userData = dbResult.rows[0]
        const secret = (process.env.JWT_SECRET_TOKEN !== undefined ? process.env.JWT_SECRET_TOKEN : require('../../local_postgres_config').localJsonWebTokenSecret())
        const token = jwt.sign({ id: userData.userid }, secret)
        res.cookie('Bearer', token)
        res.cookie('userId', userData.userid)
        res.cookie('userName', userData.name)
        res.cookie('userLogin', userData.login)
        
        res.send({ success: true })
      } else {
        res.send({ success: false, message: 'Błędny login lub hasło' })
      }
    })
  }
})

module.exports = router
