module.exports ={
  index: (req, res) => res.render('index'),
  newGameForm: (req, res) => res.render('newgame'),
  joinGameForm: (req, res) => res.render('joingame'),
  joinPrivateForm: (req, res) => res.render('privategame'),
  createGame: (req, res) => {
    console.log(req.body);
    // TODO: create game in db, create socket group, redirect to waiting screen
    res.redirect('/game/await');
  },
  waitingRoom: (req, res) => {
    // T
    res.render('waitingroom');
  }
}