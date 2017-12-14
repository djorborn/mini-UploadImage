var formidable = require('formidable');
var express = require('express');
var app = express();

app.set('view engine', 'pug')
.use([express.static(__dirname + '/public')
, express.urlencoded({extended: true})
, express.json()
]).listen(3000);

app.get('/', function(req, res){
  res.render('main');
})
