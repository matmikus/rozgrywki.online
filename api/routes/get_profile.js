const router = require('express')()
const validator = require('./../shared/validator')
const schema = require('./../schema/get_profile')

router.post('/get_profile', (req, res) => {
  res.send(validator.getValidationErrors(req.body, schema))
})

module.exports = router
