const router = require('express')()
const reqSchema = require('../schema/get_profile-req')
const resSchema = require('../schema/get_profile-res')
const validator = require('./../shared/validator')

router.post('/get_profile', (req, res) => {
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
