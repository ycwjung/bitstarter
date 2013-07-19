#!/usr/bin/node
var fs = require('fs');
var infile = "index.html";
var bufferRead = fs.readFileSync(infile);
var bufToString = bufferRead.toString();

var express = require('express');
var app = express.createServer(express.logger());
app.get('/', function(request, response) {
  response.send(bufToString);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

app.use(express.static(__dirname+'/images'));
