import update from 'react-addons-update';

const storeChats = {
  chats: [],
  activeChat: null
};

export default (store = storeChats, action) => {
  switch(action.type) {
    case 'LOAD_CHATS_SUCCESS': {
      return update(store, {
        chats: { $set: action.payload.data }
      });
    }

    case 'GET_CHAT_ID': {
      return update(store, {
        activeChat: { $set: action.payload.id }
      });
    }

    default: {
      return store;
    }
  };
};