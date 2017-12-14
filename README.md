##### mini app
# Upload Image
## Upload Images to Server and Let user preview selected Image. 
For this project, I am making a small express.js app that lets a user select a file from their computer, preview that image, upload it and then view all uploaded images. 

I am using node’s built in file system method readdir to pass back the list of files in the image folder. When the page loads the client.js makes an ajax request for the list of file names, I pass them to new image element the append them to the document.

### Goals
1. User can choose an image file.
2. User can preview the image before uploading.
3. User can upload chosen file.
4. User can view all images that have been uploaded.

### Tools
1. express var express = require('express');
2. fs var fs = require('fs);
3. formidable var formidable = require('formidable');
