module.exports ={
  index: (req, res) => res.render('index'),
  newGameForm: (req, res) => res.render('newgame'),
  joinGameForm: (req, res) => res.render('joingame'),
  joinPrivateForm: (req, res) => res.render('privategame'),
  createGame: (req, res) => {
    console.log(req.body);
  }
}