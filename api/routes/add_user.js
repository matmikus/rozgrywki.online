const router = require('express')()
const validator = require('./../shared/validator')
const schema = require('./../schema/add_user')

router.post('/add_user', (req, res) => {
  res.send(validator.getValidationErrors(req.body, schema))
})

module.exports = router
