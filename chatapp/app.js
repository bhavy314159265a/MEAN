var express = require('express');
var app = express();
var socket = require('socket.io')
app.use(express.static("public"));
var server = app.listen(666, () => {
    console.log("server is started....")
})
var io = socket(server);
io.sockets.on('connection', (socket) => {
    socket.emit('message', { message: 'welcome to the chat ' + socket.id });
    socket.on('send', (data) => {
        io.sockets.emit('message', data);
    })
})