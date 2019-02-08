const router = require('express')()
const validator = require('./../shared/validator')
const schema = require('./../schema/get_users_competitions')

router.post('/get_users_competitions', (req, res) => {
  res.send(validator.getValidationErrors(req.body, schema))
})

module.exports = router
