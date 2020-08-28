const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
  getQuantity,
} = require('./utils/users');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// set static

app.use(express.static(path.join(__dirname, 'public')));

const botname = 'Bienvenido!';

// Run when client connects

io.on('connection', (socket) => {
  socket.on('joinRoom', ({ username, room }) => {
    const user = userJoin(socket.id, username, room);

    socket.join(user.room);

    //WElcome current user
    socket.emit('message', formatMessage(botname, 'Bienvenido!'));

    //broadcast when user connects

    socket.broadcast
      .to(user.room)
      .emit(
        'message',
        formatMessage(botname, `${user.username} se ha unido al chat`)
      );

    // seund users info

    io.to(user.room).emit('roomUsers', {
      room: user.room,
      users: getRoomUsers(user.room),
      quantity: getQuantity(user.room),
    });
  });

  //Listen for chatMessage
  socket.on('chatMessage', (msg) => {
    const user = getCurrentUser(socket.id);
    io.to(user.room).emit('message', formatMessage(user.username, msg));
  });

  //when client disconnects
  socket.on('disconnect', () => {
    const user = userLeave(socket.id);

    if (user) {
      io.to(user.room).emit(
        'message',
        formatMessage(botname, `${user.username} ha dejado el chat`)
      );

      // send users and room info
      io.to(user.room).emit('roomUsers', {
        room: user.room,
        users: getRoomUsers(user.room),
      });
    }
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT);
