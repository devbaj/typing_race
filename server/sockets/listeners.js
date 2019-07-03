module.exports = io => {
  io.on('connect', socket => {
    var emit = require('./emitters.js');
    console.log('connected to client');
    emit.greet(socket);
    emit.newConnection(socket);

    // socket.on('userJoined', data => {
      // emit.confirmUser(socket, data.user);
    // });
  });
}