/// START
var express = require('express');
var path = require('path')
var app = express();        
var port = process.env.PORT || 5000;

// this allows the files to be visible without having to type in the
// index.html for the url simply do / and you'll get the url
app.use(express.static(path.join(__dirname, 'public'),{
  extensions: ['html']}
));

app.get('/','index.html');

app.listen(port);