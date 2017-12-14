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
