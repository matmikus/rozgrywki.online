const router = require('express')()
const validator = require('./../shared/validator')
const schema = require('./../schema/update_settings')

router.post('/update_settings', (req, res) => {
  res.send(validator.getValidationErrors(req.body, schema))
})

module.exports = router
