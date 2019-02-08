const router = require('express')()

router.get('/confirm_user/:hash', (req, res) => {
  res.send(req.params.hash)
})

module.exports = router
