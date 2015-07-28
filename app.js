var express = require('express');
var q = require('q');

var app = express();
app.use('/', express.static(__dirname + '/app'));
console.log(__dirname)

console.log("服务器已启动,监听80")
app.listen(80);