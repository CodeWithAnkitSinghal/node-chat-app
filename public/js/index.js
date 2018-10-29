var socket = io();
    socket.on('connect', function() {
    console.log(`Connected to server`);

    socket.emit('createMessage', {
        from: 'me',
        to:'you',
        text: 'hello you!'
    });
});

socket.on('disconnect', function() {
    console.log('Disconnected from the server');
});

socket.on('newMessage', function(data) {
    console.log('New Message');
    console.log(data);
});