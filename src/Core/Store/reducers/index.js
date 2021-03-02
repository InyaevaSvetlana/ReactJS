import { combineReducers } from "redux";
import messagesReducer from './messages';
import chatsReducer from './chats';

export default combineReducers({ messagesReducer, chatsReducer });
