var cons = require('consolidate');
var dust = require('dustjs-linkedin');
var express = require('express');
var path = require('path');
var compression = require('compression');
var app = express();
var router = express.Router();

app.use(compression);

// static files setup (css + js)
app.use(express.static(path.join(__dirname, 'public')));

// view engine setuphome
app.set('views', path.join(__dirname, 'views'));
app.engine('dust', cons.dust);
app.set('view engine', 'dust');

// Require routes as modules
var home = require('./routes/home');
var about = require('./routes/about');

// Mount route modules as middleware to their URL paths
app.use('/', home);
app.use('/about', about);


module.exports = app;
