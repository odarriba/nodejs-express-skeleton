var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var UserModel = require('./models/user');
var UserCtrl = require('./controllers/users');

// API routes
var users = express.Router();

users.route('/users')
  .get(UserCtrl.findAllUsers)
  .post(UserCtrl.addUser);

users.route('/user/:id')
  .get(UserCtrl.findById)
  .put(UserCtrl.updateUser)
  .delete(UserCtrl.deleteUser);

app.use('/api', users);

mongoose.connect('mongodb://localhost/simplepass', function(err, res) {
    if(err) { throw err; }
    console.log('[INIT] Connected to MongoDB database');
});

var models = require('./models/user')(app, mongoose);

app.listen(3000, function() {
  console.log("[INIT] Webserver server running on http://0.0.0.0:3000");
});
