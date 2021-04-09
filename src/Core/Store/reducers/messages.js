import update from 'react-addons-update';

const storeMessages = {
  messages: [],
};

export default (store = storeMessages, action) => {
  switch(action.type) {
    case 'LOAD_MESSAGES_SUCCESS': {
      return update(store, {
        messages: { $set: action.payload.data }
      });
      return store;
    }

    case 'SEND_MESSAGE_SUCCESS': {
      const msg = action.payload.data;
      return update(store, { messages: { $push: [ msg ] } });
    }

    default: {
      return store;
    }
  }
};