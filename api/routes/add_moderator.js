const router = require('express')()
const validator = require('./../shared/validator')
const schema = require('./../schema/add_moderator')

router.post('/add_moderator', (req, res) => {
  res.send(validator.getValidationErrors(req.body, schema))
})

module.exports = router
