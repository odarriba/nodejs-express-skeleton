'use strict';

module.exports = function(app) {
  var expressSession = require('express-session'),
      bodyParser  = require("body-parser"),
      morgan = require("morgan"),
      methodOverride = require("method-override"),
      compression = require('compression'),
      config = app.get('config');

  app.use(expressSession({secret: config.app.secret, resave: false, saveUninitialized: false}));

  app.set('views', config.root + '/server/views');
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');

  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(methodOverride());
};
