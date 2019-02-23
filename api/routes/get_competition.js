const router = require('express')()
const validator = require('./../shared/validator')
const reqSchema = require('../schema/get_competition-req')
const resSchema = require('../schema/get_competition-res')

router.post('/get_competition', (req, res) => {
  const validationResult = validator.getValidationErrors(req.body, reqSchema)
  if (validationResult.length > 0) {
    res.status(400).send(validationResult)
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
