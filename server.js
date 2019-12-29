var express = require('express');
var app = express();

app.use(express.static('www')); 
// 'dist' is my build folder, you can add yours. this will take care of all static files.

app.use('/*', express.static('www/index.html')); 
// This will make sure that every route should serve index.html first 

app.listen(8080, function () {
    console.log('app listening on port 8080!!')
});