var express = require('express');
var app = express();

app.set('view engine','ejs');


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

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});



// my function
function add(a, b){
  return parseInt(a) + parseInt(b)
}