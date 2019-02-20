const router = require('express')()
const validator = require('./../shared/validator')
const schema = require('./../schema/add_user')

router.post('/add_user', (req, res) => {
  const validationResult = validator.getValidationErrors(req.body, schema)
  if (validationResult.length > 0) {
    res.status(400).send(validationResult)
  } else {
    // TODO: request's logic

    res.send({ success: false })
  }
})

module.exports = router
