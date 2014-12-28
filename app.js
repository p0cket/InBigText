var express = require('express')
var app = express()

app.use(express.static(__dirname));
app.get('/', function (req, res) {
  res.sendfile('index.html')
})

// I put in the bones of my node

app.post('/posting', function(req, res) {
  var displayText = req.body.textSpot;
  var displayImage = req.body.imgSpot;
  console.log("REQUEST RECIEVED : " + displayText + ":and also text:" + displayImage);
  res.send();
});

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
})
