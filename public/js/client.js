var imgPreview = document.getElementById('imgPreview');
var uploadimageform = document.getElementById('uploadimageform');
var filetobeuploaded = document.getElementById('filetobeuploaded');

uploadimageform.onchange = function(){
  previewImage();
}

function previewImage() {
  var file = filetobeuploaded.files[0];
  var reader = new FileReader();

  reader.addEventListener('load', function(){
    imgPreview.innerHTML = '<img src="'
    + reader.result
    + '" alt="Image Preview" width="100%">';
  }, false);
  if(file){
    reader.readAsDataURL(file);
  }
}

function get_images(){
  images.innerHTML = "";
  $.ajax('/get_images', {
    type: 'POST',
    success: function(res){
      res.forEach(function(src){
        var img = document.createElement('div');
        img.classList.add('w3-padding', 'w3-border', 'w3-card', 'w3-half');
        img.innerHTML = '<img src="'
        + '/images/'
        + src
        + '" alt="Image" width="100%"/>';
        images.append(img);
      })
    }
  })
}

get_images();
