var express = require('express');
var q = require('q');

var app = express();
// app.use('/', express.static(__dirname + '/app'));

app.set('views','views');
app.set('view engine','jade');

app.use(function (req, res, next) {
  console.log('Time: %d', Date.now());
  next();
})

app.get('/q', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.get('/', function (req, res) {
  res.send('Welcome');
})
console.log("服务器已启动,监听80")
app.listen(80);