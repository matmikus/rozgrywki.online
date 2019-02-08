const router = require('express')()
const validator = require('./../shared/validator')
const schema = require('./../schema/remove_moderator')

router.post('/remove_moderator', (req, res) => {
  res.send(validator.getValidationErrors(req.body, schema))
})

module.exports = router
