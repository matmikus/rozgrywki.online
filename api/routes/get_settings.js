const router = require('express')()
const validator = require('./../shared/validator')
const schema = require('./../schema/get_settings')

router.post('/get_settings', (req, res) => {
  res.send(validator.getValidationErrors(req.body, schema))
})

module.exports = router
