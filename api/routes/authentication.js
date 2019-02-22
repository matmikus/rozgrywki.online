const router = require('express')()
const authentication = require('../shared/authentication')

router.get('/authentication', (req, res) => {
  if (authentication.isLoggedIn(req.cookies)) {
    res.sendStatus(200)
  } else {
    res.sendStatus(403)
  }
})

module.exports = router
