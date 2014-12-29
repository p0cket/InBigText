var express 		= require('express');
var bodyParser  = require('body-parser');
var ejs         = require('ejs');
var http			  = require('http');
var app         = express()
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('view options', {layout: false});

app.set('port', (process.env.PORT || 5000));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))
app.set('view options', {layout: false});


app.get('/', function (req, res) {
  res.render('index')
})


var pages = {
  'page1' : {
    text : "sample page1",
    image : 'http://d13pix9kaak6wt.cloudfront.net/background/pocket_1292613918_03.jpg'
  }
}

var id = 0;
// I put in the bones of my node

app.post('/posting', function(req, res) {
  console.log(req.body);
  var displayText = req.body.displayText;
  var displayImage = req.body.displayImage;
  pages[id++] = {
    text : displayText,
    image : displayImage
  }
  res.render('page', {
      displayText : displayText,
      image : displayImage
  });
});

app.get("/page/:makeNewPage", function(req, res) {
  var thisPage = pages[req.params.makeNewPage];
  res.render('page', {
    displayText : thisPage.text,
    image : thisPage.image
  })
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});
