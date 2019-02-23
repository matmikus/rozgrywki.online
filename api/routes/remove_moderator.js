const router = require('express')()
const reqSchema = require('../schema/remove_moderator-req')
const resSchema = require('../schema/remove_moderator-res')
const validator = require('./../shared/validator')

router.post('/remove_moderator', (req, res) => {
  const reqValidation = validator.getValidationErrors(req.body, reqSchema)
  if (reqValidation.length > 0) {
    res.status(400).send(reqValidation)
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
