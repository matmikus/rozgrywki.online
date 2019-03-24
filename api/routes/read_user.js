const router = require('express')()
const resSchema = require('../schema/read_user-res')
const validator = require('./../shared/validator')

router.get('/users/:id', (req, res) => {
  // TODO: request's logic
  let responseData = { success: false }

  const resValidation = validator.getValidationErrors(responseData, resSchema)
  if (resValidation.length > 0) {
    res.sendStatus(500)
  } else {
    res.status(200).send(responseData)
    // res.status(404).send(responseData) // if not exist
  }
})

module.exports = router
