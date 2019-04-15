const db = require('./../shared/db')
const router = require('express')()
const validator = require('./../shared/validator')
const resSchema = require('../schema/read_competitions-res')

router.get('/competitions', (req, res) => {
  db.databaseClient().query('select * from competitions;', (err, dbResult) => {
    if (err) {
      console.log(err)
    } else {
      console.log(dbResult.rows)
    }
  })

  // TODO: request's logic
  let responseData = { success: false, message: 'brak danych' }

  const resValidation = validator.getValidationErrors(responseData, resSchema)
  if (resValidation.length > 0) {
    res.sendStatus(500)
  } else {
    res.status(200).send(responseData)
    // res.status(404).send(responseData) // if not exist
  }
})

module.exports = router
