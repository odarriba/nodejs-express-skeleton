'use strict';

module.exports = function(app) {
  // Intialize the app
  require('./application')(app);
  require('./database')(app);
  require('./models')(app);
  require('./controllers')(app);
};
