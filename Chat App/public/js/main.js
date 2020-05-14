const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');
const cantidad = document.getElementById('cantidad');

// Get username and room

const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

const socket = io();

// Join chatroom

socket.emit('joinRoom', { username, room });

// get room and users
socket.on('roomUsers', ({ room, users, quantity }) => {
  outputRoomName(room);
  outputUsers(users);
  outputQuantity(quantity);
});

socket.on('message', (message) => {
  outputMessage(message);

  // SCroll down
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

//Message submit

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();

  //get msg text
  const msg = e.target.elements.msg.value;

  // eMit message to server
  socket.emit('chatMessage', msg);

  // Clear input
  e.target.elements.msg.value = '';
  e.target.elements.msg.focus();
});

function outputMessage(message) {
  const div = document.createElement('div');
  div.classList.add('message');
  div.innerHTML = `<p class="meta">${message.username} <span>${message.time}</span></p>
    <p class="text">
      ${message.text}
    </p>`;
  document.querySelector('.chat-messages').appendChild(div);
}

// Add roomname to DOM
function outputRoomName(room) {
  roomName.innerText = room;
}

function outputUsers(users) {
  userList.innerHTML = `
        ${users.map((user) => `<li>${user.username}</li>`).join('')}
    `;
}

function outputQuantity(quantity) {
  cantidad.innerText = quantity;
}
