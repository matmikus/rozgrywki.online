var express = require('express');
var cookieParser = require('cookie-parser');
// Dev local import process.env from .env file
require('dotenv').config();
// Create express instnace
var app = express();
// Require API routes
var addUser = require('./routes/create_user_unconfirmed');
var confirmUser = require('./routes/create_user_confirmed');
var login = require('./routes/create_session');
var getSettings = require('./routes/read_user_settings');
var updateSettings = require('./routes/update_user_settings');
var getProfile = require('./routes/read_user');
var getCompetition = require('./routes/read_competition');
var getCompetitions = require('./routes/read_competitions');
var addCompetition = require('./routes/create_competition');
var updateCompetition = require('./routes/update_competition');
var updateResult = require('./routes/update_result');
var addModerator = require('./routes/create_moderator');
var removeModerator = require('./routes/delete_moderator');
var authentication = require('./routes/read_authentication');
// Request body parser
app.use(express.json());
app.use(cookieParser());
// Import API Routes
app.use(addUser);
app.use(confirmUser);
app.use(login);
app.use(getSettings);
app.use(updateSettings);
app.use(getProfile);
app.use(getCompetition);
app.use(getCompetitions);
app.use(addCompetition);
app.use(updateCompetition);
app.use(updateResult);
app.use(addModerator);
app.use(removeModerator);
app.use(authentication);
// Export the server middleware
module.exports = {
    path: '/api',
    handler: app
};
