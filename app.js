var formidable = require('formidable');
var express = require('express');
var fs = require('fs');
var app = express();

app.set('view engine', 'pug')
.use([express.static(__dirname + '/public')
, express.urlencoded({extended: true})
, express.json()
]).listen(3000);

app.post('/get_images', function(req, res){
  fs.readdir(__dirname + '/public/images/', function(err, list){
    console.log(list);
    res.send(list);
  })
})

app.get('/', function(req, res){
  res.render('main');
})
