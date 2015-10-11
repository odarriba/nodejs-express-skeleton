'use strict';

module.exports = function(app) {
  var expressSession = require('express-session'),
      bodyParser  = require("body-parser"),
      methodOverride = require("method-override"),
      config = app.get('config');

  app.use(expressSession({secret: config.app.secretKey, resave: false, saveUninitialized: false}));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(methodOverride());
};
