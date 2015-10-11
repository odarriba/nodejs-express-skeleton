'use strict';

module.exports = function(app) {
  var mongoose = require('mongoose');

  // Create base MongoDB URL
  var dbUrl = config.database.server+'/'+config.database.database;

  // If there are login credentials, use them
  if (config.database.username !== null) {
    dbUrl = config.database.username+':'+config.database.password+'@'+dbUrl;
  }

  // Connect!
  mongoose.connect('mongodb://'+dbUrl, function(err) {
      if(err) { throw err; }
      console.log('[INIT] Connected to MongoDB database at '+dbUrl);
  });
};
