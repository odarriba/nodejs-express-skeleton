'use strict';

var mongoose = require('mongoose'),
    User  = mongoose.model('User'),
    sha1 = require('sha1');

//GET - Return all tvshows in the DB
exports.findAllUsers = function(req, res) {
  User.find(function(err, users) {
    if(err) { res.send(500, err.message); }
    res.status(200).jsonp(users);
  });
};

exports.findById = function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if(err) { return res.send(500, err.message); }
    res.status(200).jsonp(user);
  });
};

exports.addUser = function(req, res) {
  var user = new User({
    email:    req.body.email,
    name:     req.body.name,
    password:  sha1(req.body.password)
  });

  user.save(function(err, user) {
    if(err) { return res.send(500, err.message); }
    res.status(200).jsonp(user);
  });
};

exports.updateUser = function(req, res) {
  User.findById(req.params.id, function(err, user) {
    user.email   = req.body.email;
    user.name    = req.body.name;
    user.password = sha1(req.body.password);

    user.save(function(err) {
      if(err) { return res.send(500, err.message); }
      res.status(200).jsonp(user);
    });
  });
};

exports.deleteUser = function(req, res) {
  User.findById(req.params.id, function(err, user) {
    user.remove(function(err) {
      if(err) { return res.send(500, err.message); }
      res.status(200);
    });
  });
};
