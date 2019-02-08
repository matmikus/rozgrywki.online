const router = require('express')()
const validator = require('./../shared/validator')
const schema = require('./../schema/login')

router.post('/login', (req, res) => {
  res.send(validator.getValidationErrors(req.body, schema))
})

module.exports = router
