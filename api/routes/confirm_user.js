const router = require('express')()

router.get('/confirm_user/:hash', (req, res) => {
  // TODO: request's logic

  res.send({ success: false })
})

module.exports = router
