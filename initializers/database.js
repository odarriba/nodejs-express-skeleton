'use strict';

module.exports = function(app) {
  var mongoose = require('mongoose'),
      config = app.get('config');

  mongoose.connect(config.database.uri, function(err) {
      if(err) { throw err; }
      console.log('[INIT] Connected to MongoDB database at '+config.database.uri);
  });
};
