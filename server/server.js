const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');

const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public')
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath))

io.on('connection', (socket) => {
    console.log(`new User connected`);

    socket.on('createMessage', (message) => {
        console.log('createMessage', JSON.stringify(message, undefined, 2))
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });

    socket.emit('newMessage', {
        from: 'you',
        to: 'me',
        text: 'Hello Me!'
    });
});

server.listen(port, () => {
    console.log(`Express app started at port ${port}`)
})