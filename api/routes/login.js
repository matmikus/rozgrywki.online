const router = require('express')()
const validator = require('./../shared/validator')
const reqSchema = require('../schema/login-req')
const resSchema = require('../schema/login-res')
const db = require('./../shared/db')
const jwt = require('jsonwebtoken')

router.post('/login', (req, res) => {
  const validationResult = validator.getValidationErrors(req.body, reqSchema)
  if (validationResult.length > 0) {
    res.status(400).send(validationResult)
  } else {
    db.databaseClient().query({
      text: 'select * from users where login=$1 and password=$2;',
      values: [req.body.login, req.body.password]
    }, (err, dbResult) => {
      if (err) {
        res.sendStatus(500)
      } else {
        let responseData

        const success = dbResult.rows.length === 1
        if (success) {
          const userData = dbResult.rows[0]
          const secret = process.env.JWT_SECRET_TOKEN
          const token = jwt.sign({ id: userData.userid, name: userData.name, login: userData.login }, secret)

          res.cookie('Bearer', token)
          responseData = { success: true }
        } else {
          responseData = { success: false, message: 'Błędny login lub hasło' }
        }

        const resValidation = validator.getValidationErrors(responseData, resSchema)
        if (resValidation.length > 0) {
          res.sendStatus(500)
        } else {
          res.send(responseData)
        }
      }
    })
  }
})

module.exports = router
