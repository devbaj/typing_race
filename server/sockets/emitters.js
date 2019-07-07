module.exports = {
  // ** greet: send message to client confirming
  greet: socket => {
    console.log('greeting new socket');
    socket.emit('greet', {msg: 'socket opened'});
  },

  // ** newConnection: send msg to all other clients notifying of new connection
  newConnection: socket => {
    socket.broadcast.emit('newConnection', {msg: 'new socket connected'});
  },

  // confirmUser: (socket, user) => {
    // socket.emit('confirmUser', {success: true, name: user})
  // }
}