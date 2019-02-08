const router = require('express')()

router.post('/logout', (req, res) => {
  res.send(':(')
})

module.exports = router
