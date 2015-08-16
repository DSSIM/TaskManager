var express = require('express');
var bodyParser = require('body-parser');

var socketio = require('socket.io');

var port = 8000;

var app = express();
var server = app.listen(port);

// added for sockets
var io = socketio.listen(server);

var staticDir = __dirname + '/public/';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var tasks = [];

app.get('/app', function(req, res){
    res.sendFile(staticDir + 'templates/main.html');

});

app.get('/tasks', function(req,res){
   res.json(tasks);
});

app.post('/tasks', function(req, res){
    var task = req.body;
    tasks.push(task);
    res.json(tasks);
});

app.get('*', function(req,res){
   res.status(404).json('Sorry, wrong adress');
});

// added for sockets
io.on('connection', function(socket){

    console.log('client connected');
    socket.on('disconnected', function(msg){
        console.log('client disconnected');
    });

    socket.on('task message', function(msg){
        tasks.push(msg);
        io.emit('task message', msg);
    });

    socket.emit('task history', tasks);
});