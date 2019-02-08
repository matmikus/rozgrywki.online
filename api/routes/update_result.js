const router = require('express')()
const validator = require('./../shared/validator')
const schema = require('./../schema/update_result')

router.post('/update_result', (req, res) => {
  res.send(validator.getValidationErrors(req.body, schema))
})

module.exports = router
