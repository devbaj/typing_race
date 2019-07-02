$(document).ready( () => {
  console.log('doc ready');
  var socket = io();

  var user = prompt('Please enter a username');
  socket.emit('userJoined', {user});

  socket.on('greet', payload => {
    console.log(payload.msg);
  });

  socket.on('newConnection', payload => {
    console.log(payload.msg);
  });

  socket.on('confirmUser', payload => {
    payload.success ? console.log(payload.name) : console.log('error');
  });
})