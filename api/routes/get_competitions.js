const db = require('./../shared/db')
const router = require('express')()

router.get('/get_competitions', (req, res) => {
  db.databaseClient().query('select * from competitions;', (err, dbResult) => {
    if (err) {
      res.sendStatus(500)
    } else {
      res.send(dbResult.rows)
    }
  })
})

module.exports = router
