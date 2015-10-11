'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require("express"),
    app = express();

// Load the configuration
app.set('config', require('./config'));

// Load (and execute) the initializers
require('./initializers')(app);

// Load the routes
require('./routes')(app);

app.listen(3000, function() {
  console.log("[INIT] Webserver server running on http://0.0.0.0:3000");
});
