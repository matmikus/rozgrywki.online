const router = require('express')()
const validator = require('./../shared/validator')
const resSchema = require('../schema/read_competition-res')

router.get('/competitions/:id', (req, res) => {
  // console.log('id: '+req.params.id)
  // TODO: request's logic
  let responseData = { success: false }

  const resValidation = validator.getValidationErrors(responseData, resSchema)
  if (resValidation.length > 0) {
    res.sendStatus(500)
  } else {
    res.send(responseData)
  }
})

module.exports = router
