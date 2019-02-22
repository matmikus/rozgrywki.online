const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET_TOKEN

module.exports = {
  isLoggedIn (cookies) {
    return jwt.verify(cookies.Bearer, secret, (err, decoded) => {
      return !err
    })
  },
  getUserData () {
    return jwt.verify(cookies.Bearer, secret, (err, decoded) => {
      return !err ? decoded : false
    })
  }
}
