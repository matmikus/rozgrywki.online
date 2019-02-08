const router = require('express')()
const validator = require('./../shared/validator')
const schema = require('./../schema/add_competition')

router.post('/add_competition', (req, res) => {
  res.send(validator.getValidationErrors(req.body, schema))
})

module.exports = router
