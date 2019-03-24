const router = require('express')()
const reqSchema = require('../schema/update_result-req')
const resSchema = require('../schema/update_result-res')
const validator = require('./../shared/validator')

router.put('/results', (req, res) => {
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
    res.status(200).send(responseData)
    // res.status(404).send(responseData) // if not exist
  }
})

module.exports = router
