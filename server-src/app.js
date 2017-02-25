var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('view engine', 'pug');
app.use(express.static('public'));

module.exports = app;
