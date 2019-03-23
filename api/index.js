const express = require('express')
const cookieParser = require('cookie-parser')

// Dev local import process.env from .env file
require('dotenv').config()

// Create express instnace
const app = express()

// Require API routes
const addUser = require('./routes/create_user')
const confirmUser = require('./routes/confirm_user')
const login = require('./routes/login')
const getSettings = require('./routes/read_settings')
const updateSettings = require('./routes/update_settings')
const getProfile = require('./routes/read_profile')
const getCompetition = require('./routes/read_competition')
const getCompetitions = require('./routes/read_competitions')
const addCompetition = require('./routes/create_competition')
const updateCompetition = require('./routes/update_competition')
const updateResult = require('./routes/update_result')
const addModerator = require('./routes/create_moderator')
const removeModerator = require('./routes/delete_moderator')
const authentication = require('./routes/authentication')

// Request body parser
app.use(express.json())
app.use(cookieParser())

// Import API Routes
app.use(addUser)
app.use(confirmUser)
app.use(login)
app.use(getSettings)
app.use(updateSettings)
app.use(getProfile)
app.use(getCompetition)
app.use(getCompetitions)
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
