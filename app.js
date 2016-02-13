var express = require('express');
var app = express();
const CASSystem = require('./CASSystem');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/grades', function(req, res) {
  var grades = 'no';
  CASSystem.getGrades();
  res.send(grades);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
