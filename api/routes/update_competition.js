const router = require('express')()
const validator = require('./../shared/validator')
const schema = require('./../schema/update_competition')

router.post('/update_competition', (req, res) => {
  res.send(validator.getValidationErrors(req.body, schema))
})

module.exports = router
