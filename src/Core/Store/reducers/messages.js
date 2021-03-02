const storeMessages = {
    messages: [
      { name: 'one', text: 'Hey!' },
      { name: 'one', text: 'How are you?' }
    ]
  };
  
  export default (store = storeMessages, action) => {
    switch(action.type) {
      case 'LOAD_MSG': {
        // store.messages = [
        //   { name: 'one', text: 'Hey!' },
        //   { name: 'one', text: 'How are you?' }
        // ];
        return store;
      }
  
      // case 'FILTER_MSG': {
      //   reg = new RegExp(action.searchWord, 'i');
      //   return store.messages.filter(msg => reg.test(msg.text));
      // }
  
      default: {
        return store;
      }
    }
  };