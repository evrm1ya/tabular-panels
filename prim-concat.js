
var fs = require('fs');

var writableJS = fs.createWriteStream(__dirname + '/index.js');
var writableCSS = fs.createWriteStream(__dirname + '/styles.css');

readDirWriteToDest('./styles', writableCSS);
readDirWriteToDest('./plugins', writableJS);
readDirWriteToDest('./src', writableJS); 

function readDirWriteToDest(dirname, dest) {
  fs.readdir(dirname, function(err, files) {
    'use strict';
    if (err)
      console.log(err);
    var filesLength = files.length;
    for(let i = 0; i < filesLength; i++) {
      let readable = fs.createReadStream(dirname + '/' + files[i]);
      readable.pipe(dest);
    }
  });
}

