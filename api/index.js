const express = require('express')
const { Router } = require('express')
const router = Router()

// Create express instnace
const app = express()

// Require API routes
const users = require('./routes/users')
const add_user = require('./routes/add_user')
const confirm_user = require('./routes/confirm_user')
const login = require('./routes/login')
const logout = require('./routes/logout')
const get_settings = require('./routes/get_settings')
const update_settings = require('./routes/update_settings')
const get_profile = require('./routes/get_profile')
const get_competition = require('./routes/get_competition')
const get_competitions = require('./routes/get_competitions')
const get_users_competitions = require('./routes/get_users_competitions')
const add_competition = require('./routes/add_competition')
const update_competition = require('./routes/update_competition')
const update_result = require('./routes/update_result')
const add_moderator = require('./routes/add_moderator')
const remove_moderator = require('./routes/remove_moderator')

// Request body parser
app.use(express.json())

// Import API Routes
app.use(users)
app.use(add_user)
app.use(confirm_user)
app.use(login)
app.use(logout)
app.use(get_settings)
app.use(update_settings)
app.use(get_profile)
app.use(get_competition)
app.use(get_competitions)
app.use(get_users_competitions)
app.use(add_competition)
app.use(update_competition)
app.use(update_result)
app.use(add_moderator)
app.use(remove_moderator)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
