import update from 'react-addons-update';

const contacts = {
  contacts: [],
};

export default (store = contacts, action) => {
  switch(action.type) {
    case 'LOAD_CONTACTS_SUCCESS': {
      return update(store, {
        contacts: { $set: action.payload.data }
      });
    }

    default: {
      return store;
    }
  };
};