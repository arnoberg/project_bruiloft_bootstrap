/// START
var express = require('express');
var path = require('path')
var app = express();        
var port = process.env.PORT || 5000;


app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/vendor"));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port);