// ! socket scripts
// ? should I have one socket script file or break them out for specific trasks?

$(document).ready( () => {
  console.log('doc ready');
  var socket = io();

  socket.on('newConnection', payload => {
    console.log(payload.msg);
  });

  // socket.on('confirmUser', payload => {

    // payload.success ? console.log(payload.name) : console.log('error');
  // });
})