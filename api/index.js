const express = require('express')
const { Router } = require('express')
const cookieParser = require('cookie-parser')

// Create express instnace
const app = express()

// Require API routes
const users = require('./routes/users')
const addUser = require('./routes/add_user')
const confirmUser = require('./routes/confirm_user')
const login = require('./routes/login')
const getSettings = require('./routes/get_settings')
const updateSettings = require('./routes/update_settings')
const getProfile = require('./routes/get_profile')
const getCompetition = require('./routes/get_competition')
const getCompetitions = require('./routes/get_competitions')
const getUsersCompetitions = require('./routes/get_users_competitions')
const addCompetition = require('./routes/add_competition')
const updateCompetition = require('./routes/update_competition')
const updateResult = require('./routes/update_result')
const addModerator = require('./routes/add_moderator')
const removeModerator = require('./routes/remove_moderator')
const authentication = require('./routes/authentication')

// Request body parser
app.use(express.json())
app.use(cookieParser())

// Import API Routes
app.use(users)
app.use(addUser)
app.use(confirmUser)
app.use(login)
app.use(getSettings)
app.use(updateSettings)
app.use(getProfile)
app.use(getCompetition)
app.use(getCompetitions)
app.use(getUsersCompetitions)
app.use(addCompetition)
app.use(updateCompetition)
app.use(updateResult)
app.use(addModerator)
app.use(removeModerator)
app.use(authentication)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
