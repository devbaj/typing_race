const controller = require('./controller');

module.exports = app => {
  app.get('/', controller.index);
  app.get('/game/new', controller.newGameForm);
  app.get('/game/join', controller.joinGameForm);
  app.get('/game/join/private', controller.joinPrivateForm);
  app.post('/game/new/create', controller.createGame);
  app.get('/game/await', controller.waitingRoom);
  app.get('/game/play', controller.play);
}