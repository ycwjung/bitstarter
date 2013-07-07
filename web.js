var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World! Here we come! \n And again. And again. OMG! Not again!!! \n Before starting the crowdfunded site!!! Looks like it is not that hard after all.');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
