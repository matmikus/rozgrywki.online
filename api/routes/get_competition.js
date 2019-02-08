const router = require('express')()
const validator = require('./../shared/validator')
const schema = require('./../schema/get_competition')

router.post('/get_competition', (req, res) => {
  res.send(validator.getValidationErrors(req.body, schema))
})

module.exports = router
