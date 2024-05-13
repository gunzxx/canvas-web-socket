const express = require('express')();
const httpServer = require("http").createServer();
const port = 8000;


httpServer.listen(port);

const io = require('socket.io')(httpServer, {
    cors: {
        origin: '*',
    }
});

io.on('connection', (socket) => {
    console.log(`socket enable in http://localhost:${port}`);

    socket.on('mousemove', (message) => {
        socket.broadcast.emit('mousemove', message);
    });

    socket.on('mousedown', (message) => {
        socket.broadcast.emit('mousedown', message);
    });

    socket.on('mouseup', (message) => {
        socket.broadcast.emit('mouseup', message);
    });
})