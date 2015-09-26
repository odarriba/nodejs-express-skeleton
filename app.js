express = require("express"),
app = express();

// Load the configuration
config = require('./config');

// Load (and execute) the initializers
require('./initializers');

// Load the routes
require('./routes');

app.listen(3000, function() {
  console.log("[INIT] Webserver server running on http://0.0.0.0:3000");
});
