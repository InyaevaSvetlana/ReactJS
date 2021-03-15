import update from 'react-addons-update';
// import { FILTER_MSG } from '@actions/messages';

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

    case 'SEND_MSG': {
      const msg = action.payload;
      return update(store, { messages: { $push: [ msg ] } });
    }

    default: {
      return store;
    }
  }
};