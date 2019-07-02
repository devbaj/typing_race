module.exports = {
  greet: socket => socket.emit('greet', {msg: 'socket opened'}),
  newConnection: socket => {
    socket.broadcast.emit('newConnection', {msg: 'new socket connected'});
  },
  confirmUser: (socket, user) => {
    socket.emit('confirmUser', {success: true, name: user})
  }
}