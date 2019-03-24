const router = require('express')()
const read_authentication = require('../shared/authentication')

router.get('/read_authentication', (req, res) => {
  if (read_authentication.isLoggedIn(req.cookies)) {
    res.sendStatus(200)
  } else {
    res.sendStatus(403)
  }
})

module.exports = router
