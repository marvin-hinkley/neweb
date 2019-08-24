const PORT = 3000;
const app = require('express')();
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const io = require('socket.io').listen(
  app.listen(PORT, () => console.log('server started, marster'))
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', routes);

io.sockets.on('connection', socket =>
  console.log('socket connection established, master')
);
