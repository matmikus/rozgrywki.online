const router = require('express')()
const reqSchema = require('../schema/delete_moderator-req')
const resSchema = require('../schema/delete_moderator-res')
const validator = require('./../shared/validator')

router.delete('/moderators', (req, res) => {
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
  }
})

module.exports = router
