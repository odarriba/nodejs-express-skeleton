'use strict';

module.exports = {
  'server' : 'localhost',
  'database' : 'simplepass',
  'username' : null,
  'password' : null
};

// Construct the Mongo connection's URI
module.exports.uri = module.exports.server+'/'+module.exports.database;

// If there are login credentials, use them
if (module.exports.username !== null) {
  module.exports.uri = module.exports.username+':'+module.exports.password+'@'+module.exports.uri;
}

// Add the protocol
module.exports.uri = 'mongodb://'+module.exports.uri;
