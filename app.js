var express = require('express');
var app = express();
const DomParser = require('./parser/DomParser');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/grades', function(req, res) {
  const loginToken = DomParser.getLoginToken((token) => {
    console.log('======token ', token);
  });
  res.send('=test');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
