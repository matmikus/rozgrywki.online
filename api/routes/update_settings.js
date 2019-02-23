const router = require('express')()
const validator = require('./../shared/validator')
const schema = require('../schema/update_settings-req')

router.post('/update_settings', (req, res) => {
  const validationResult = validator.getValidationErrors(req.body, schema)
  if (validationResult.length > 0) {
    res.status(400).send(validationResult)
  } else {
    // TODO: request's logic

    res.send({ success: false })
  }
})

module.exports = router
