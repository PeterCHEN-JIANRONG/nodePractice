var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('view engine','ejs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// get method
app.get('/', function (req, res) {
  res.send('Hi! Peter, This\'s time to start!');
});

app.get('/mvpTimer',function(req,res) {
  res.render('mvpTimer');
});

app.get('/action_page',function(req,res) {
  var values = req.query;
  console.log(values);
  values.total = add(values.FirstName, values.LastName);
  res.render('action_page',values);
});

app.get('/httpRequest/get',function(req,res) {
  res.send('Hi! Peter, This\'s time to start!');
});

// post method
app.post('/httpRequest/post', function (req, res) {
  console.log("後端：")
  console.log(req.body);

  var jsonData = {
    name:req.body.name+"123",
    city:req.body.city+"456"
  }
  // res.send('Got a POST request');
  // res.send(req.body);
  res.send(jsonData);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


// my function
function add(a, b){
  return parseInt(a) + parseInt(b)
}