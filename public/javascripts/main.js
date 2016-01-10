alert("The button turns the circle blue, but I haven't gotten it to work on multiple browser connections yet.");
/*
var app = require('express')();
var server = require('http')
var socket = require('socket.io')(server);
*/
var circle = document.getElementById('circle');
var blue = document.getElementById('blue');

blue.addEventListener('click', function(){
  alert('blue has been clicked');
  //socket.emit('change color', {});
  circle.style.background = 'blue';
  blue.style.display = 'none';
});

//socket.on('change color', function(){
//  circle.style.background = 'red';
//  blue.style.display = 'block';
//});