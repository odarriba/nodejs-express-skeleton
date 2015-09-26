var expressSession = require('express-session'),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");

app.use(expressSession({secret: config.app.secretKey, resave: false, saveUninitialized: false}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
