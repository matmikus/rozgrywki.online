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
    db.databaseClient().query({text: 'select * from users where login=$1 and password=$2;', values: [req.body.login, req.body.password]}, (err, dbResult) => {
      const success = dbResult.rows.length === 1
      if (success) {
        // const token = jwt.sign({ id: dbResult.rows[0].userid }, config.secret)
        res.send(true)
      } else {
        res.send(false)
      }
    })
  }
})

module.exports = router
