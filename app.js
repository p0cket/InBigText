var express = require('express')
var app = express()

app.use(express.static(__dirname));
app.get('/', function (req, res) {
  res.sendfile('index.html')
})

// I put in the bones of my node

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
