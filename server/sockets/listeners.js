const controller = require('../controller');
module.exports = io => {
  io.on('connect', socket => {
    var emit = require('./emitters.js');
    console.log('connected to client');

    // greet and broadcast upon socket connection
    emit.greet(socket);
    emit.newConnection(socket);

    // socket.on('userJoined', data => {
      // emit.confirmUser(socket, data.user);
    // });

    socket.on("createPublicGame", data => {
      // TODO initialize game settings
      console.log(data);
    });
    socket.on("createPrivateGame", data => {
      // TODO initialize game settings
      console.log(data);
    });

    // ** listeners needed for game logic
    socket.on("gameInput", data => {
      // console.log(data.text);
      emit.sendText(socket, data.text);
    });
    socket.on("userFinish", () => {
      emit.userFinish(socket);
    })

  });
}