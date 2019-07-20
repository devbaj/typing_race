const controller = require('../controller');
module.exports = io => {
  var usernames = {};

  io.on('connect', socket => {
    var emit = require('./emitters.js');
    console.log('connected to client');

    // greet and broadcast upon socket connection
    emit.greet(socket);
    emit.newConnection(socket);

    socket.on("newUser", user => {
      console.log(user);
    });

    // socket.on('userJoined', data => {
      // emit.confirmUser(socket, data.user);
    // });

    socket.on("createPublicGame", data => {
      // TODO initialize game settings
      console.log(data);
    });
    socket.on("createPrivateGame", data => {
      // TODO initialize game settings
      socket.room = data.key;
      socket.join(data.key);
      emit.privateGameCreated(socket, data.user, data.key);
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