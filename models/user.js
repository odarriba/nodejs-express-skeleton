'use strict';

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var userSchema = new Schema({
  username: { type: String },
  email:    { type: String },
  name:     { type: String },
  password: { type: String }
});

module.exports = mongoose.model('User', userSchema);
