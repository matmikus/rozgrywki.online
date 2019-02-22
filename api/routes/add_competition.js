const router = require('express')()
const schema = require('./../schema/add_competition')
const validator = require('./../shared/validator')
const authentication = require('../shared/authentication')

router.post('/add_competition', (req, res) => {
  const validationResult = validator.getValidationErrors(req.body, schema)
  if (validationResult.length > 0) {
    res.status(400).send(validationResult)
    return
  }

  const userData = authentication.getUserData(req.cookies)
  if (!userData) {
    res.sendStatus(404)
    return
  }

  // TODO: request's logic

  res.send({ success: false })
})

module.exports = router
