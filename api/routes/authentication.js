const router = require('express')()
const jwt = require('jsonwebtoken')

router.get('/authentication', (req, res) => {
  if (req.cookies.Bearer === undefined) {
    res.sendStatus(403)
  }
  const secret = process.env.JWT_SECRET_TOKEN
  jwt.verify(req.cookies.Bearer, secret, (err, decoded) => {
    if (err) {
      console.log(err)
      res.sendStatus(403)
    } else {
      console.log(decoded)
      res.sendStatus(200)
    }
  })
})

module.exports = router
