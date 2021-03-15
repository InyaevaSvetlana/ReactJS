import { combineReducers } from "redux";
import messagesReducer from './messages';
import chatsReducer from './chats';
import contactsReducer from './contacts';
import userReducer from './user';

import { connectRouter } from 'connected-react-router';

export default history => combineReducers({ userReducer, contactsReducer, messagesReducer, chatsReducer, router: connectRouter(history) });
