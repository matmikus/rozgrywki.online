const router = require('express')()
const reqSchema = require('../schema/add_user-req')
const resSchema = require('../schema/add_user-res')
const validator = require('./../shared/validator')
const db = require('./../shared/db')

router.post('/add_user', (req, res) => {
  _validateRequestData(req, res)
})

async function _validateRequestData (req, res) {
  const reqValidation = await validator.getValidationErrors(req.body, reqSchema)
  if (reqValidation.length > 0) {
    res.status(400).send(reqValidation)
  } else {
    _checkNamesAvailability(req, res)
  }
}

function _checkNamesAvailability (req, res) {
  db.databaseClient().query({
    text: 'select * from users where upper(login)=$1 or upper(linkname)=$2;',
    values: [req.body.login.toUpperCase(), req.body.linkName.toUpperCase()]
  }, (err, dbResult) => {
    if (err) {
      res.send({ success: false, message: 'Wystąpił błąd bazy danych' })
    } else if (dbResult.rows.some(el => el.login.toUpperCase() === req.body.login.toUpperCase())) {
      res.send({ success: false, message: 'Login jest już zajęty' })
    } else if (dbResult.rows.some(el => el.linkname.toUpperCase() === req.body.linkName.toUpperCase())) {
      res.send({ success: false, message: 'Link jest już zajęty' })
    } else {
      _addUser(req, res)
    }
  })
}

function _addUser (req, res) {
  // TODO: logic

  const responseData = { success: true, message: 'nie ciesz sie i tak nie ma logiki' }
  _validateResponseData(responseData, res)
}

function _validateResponseData (responseData, res) {
  const resValidation = validator.getValidationErrors(responseData, resSchema)
  if (resValidation.length > 0) {
    res.sendStatus(500)
  } else {
    _sendResponse(responseData, res)
  }
}

function _sendResponse (responseData, res) {
  res.send(responseData)
}

module.exports = router
