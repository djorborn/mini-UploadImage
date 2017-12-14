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
});

app.post('/upload', function(req, res){
  var form = new formidable.IncomingForm;
  form.parse(req, function(err, field, file){
    var oldpath = file.filetobeuploaded.path;
    var newpath = __dirname + '/public/images/' + file.filetobeuploaded.name;
    fs.rename(oldpath, newpath, function(err, reply){
      res.send("file uploaded maybe");
    })
  })
})

app.get('/', function(req, res){
  res.render('main');
})
