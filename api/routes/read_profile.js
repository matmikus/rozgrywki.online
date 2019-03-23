const router = require('express')()
const resSchema = require('../schema/read_profile-res')
const validator = require('./../shared/validator')

router.post('/profiles/:id', (req, res) => {
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
