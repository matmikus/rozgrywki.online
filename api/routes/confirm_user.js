const router = require('express')()
const resSchema = require('../schema/confirm_user-res')
const validator = require('./../shared/validator')

router.get('/confirm_user/:hash', (req, res) => {
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
