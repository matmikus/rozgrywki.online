const router = require('express')()
const reqSchema = require('../schema/create_moderator-req')
const resSchema = require('../schema/create_moderator-res')
const validator = require('./../shared/validator')
const authentication = require('../shared/authentication')

router.post('/moderators', (req, res) => {
  const reqValidation = validator.getValidationErrors(req.body, reqSchema)
  if (reqValidation.length > 0) {
    res.status(400).send(reqValidation)
    return
  }

  const userData = authentication.getUserData(req.cookies)
  if (!userData) {
    res.sendStatus(404)
    return
  }

  // TODO: request's logic
  let responseData = { success: false }

  const resValidation = validator.getValidationErrors(responseData, resSchema)
  if (resValidation.length > 0) {
    res.sendStatus(500)
  } else {
    res.send(responseData)
  }
})

module.exports = router
