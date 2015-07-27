var express = require('express');
var app = express();
app.use('/static', express.static(__dirname + '/app'));
console.log(__dirname)

console.log("服务器已启动,监听80")
app.listen(80);