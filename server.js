const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
require('./server/routes')(app);
const port = 8000;
const server = app.listen(port, () => {
  console.log('listening on port ' + port);
})
const io = require('socket.io')(server);
require('./server/sockets/listeners.js')(io);