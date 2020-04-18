const socket = io('http://localhost:3000');
const messageContainer = document.getElementById('message-container');
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');

const name = prompt('¿Cómo es tu nombre?');
appendMessage(`${name} se unió a la sala`);
socket.emit('new-user', name);

socket.on('chat-message', (data) => {
  appendMessage(`${data.name}: ${data.message}`);
});

socket.on('user-connected', (name) => {
  appendMessage(`${name} se conectó`);
});

socket.on('user-disconnected', (name) => {
  appendMessage(`${name} se desconectó`);
});

messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = messageInput.value;
  appendMessage(`${name}: ${message}`);
  socket.emit('send-chat-message', message);
  messageInput.value = '';
});

function appendMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.style.fontWeight = '500';
  messageElement.innerText = message;
  messageContainer.append(messageElement);
}
