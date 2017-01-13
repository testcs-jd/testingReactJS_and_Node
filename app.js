require('babel-register')({
  presets: ['react']
});

var express = require('express');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');


app.use(express.static('public'));
app.use(require('./routes/Index.jsx'))


var port = 3000;
app.listen(port, function(){console.log(`The server is on port: ${port}`)});
