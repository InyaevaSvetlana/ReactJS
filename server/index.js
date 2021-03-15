const express = require('express');
const chatController = require('./controllers/chat');
const userController = require('./controllers/user');
const contactsController = require('./controllers/contacts');
const messagesController = require('./controllers/messages');

const app = express();

app.use(express.json());

app.get('/chats/:id', chatController.load);
app.get('/contacts/:id', contactsController.load);
app.get('/messages/:user?', messagesController.load);
app.get('/me', userController.load);
// app.get('/chats', chatController.load);
// app.get('/chats', chatController.load);

app.listen(9090, () => {
  console.log('Listen port 9090...');
});