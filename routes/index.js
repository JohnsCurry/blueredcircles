var express = require('express');
var app = express();
var router = express.Router();
var server = require('http').Server(app);
var io = require('socket.io')(server);

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.render('index.html');

  io.on('connection', function(socket) {
    socket.on('change color', function(){
      socket.broadcast.emit('change color');
    });

    socket.on('disconnect', function(){
      console.log('1 client disconnected');
    });
  });
  
});

module.exports = router;
