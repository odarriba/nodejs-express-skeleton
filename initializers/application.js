'use strict';

module.exports = function(app) {
  var cookieSession = require('cookie-session'),
      bodyParser  = require("body-parser"),
      morgan = require("morgan"),
      methodOverride = require("method-override"),
      compression = require('compression'),
      config = app.get('config');

  app.use(cookieSession({secret: config.app.secret}));

  app.set('views', config.root + '/server/views');
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');

  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(methodOverride());
};
