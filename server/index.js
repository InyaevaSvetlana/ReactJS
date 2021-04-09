const express = require('express');
const chatController = require('./controllers/chat');
const userController = require('./controllers/user');
const contactsController = require('./controllers/contacts');
const messagesController = require('./controllers/messages');

const app = express();

app.use(express.json());

app.get('/chats/:id', chatController.load.bind(chatController));
app.get('/contacts/:id', contactsController.load.bind(contactsController));
app.get('/messages/:user?', messagesController.load.bind(messagesController));
app.put('/messages/', messagesController.send.bind(messagesController));
app.get('/me', userController.load.bind(userController));

app.listen(9090, () => {
  console.log('Listen port 9090...');
});