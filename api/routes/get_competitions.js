const db = require('./../shared/db')
const router = require('express')()
const validator = require('./../shared/validator')
const resSchema = require('../schema/get_competitions-res')

router.get('/get_competitions', (req, res) => {
  db.databaseClient().query('select * from competitions;', (err, dbResult) => {
    if (err) {
      console.log(err)
    } else {
      console.log(dbResult.rows)
    }
  })

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
