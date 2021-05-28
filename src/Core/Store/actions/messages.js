import { RSAA, getJSON } from 'redux-api-middleware';

export const loadMessages = (user, chat) => ({
  [RSAA]: {
    endpoint: `/api/messages/?user=${user}&chat=${chat}`,
    method: 'GET',
    types: [
      'LOAD_MESSAGES_REQUEST', 
      {
        type: 'LOAD_MESSAGES_SUCCESS',
        payload: async (action, state, responce) => {
          const res = await getJSON(responce);
          console.log(res);
          return { data: JSON.parse(res) }; 
        },
      }, 
      'LOAD_MESSAGES_FAILURE'
    ]
  }
});

export const sendMessage = (reqBody, chat, user) => ({
  [RSAA]: {
    endpoint: '/api/messages/',
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...reqBody, chat, user }),
    types: [
      'SEND_MESSAGE_REQUEST', 
      {
        type: 'SEND_MESSAGE_SUCCESS',
        payload: async (action, state, responce) => {
          try {
            const res = await getJSON(responce);
            if (res.ok) {
              return { data: reqBody }; 
            }
          }
          catch(err) {
            console.log(err);
            return { data: { name: 'System', text: 'Send failed' } };
          }
        },
      }, 
      'SEND_MESSAGE_FAILURE'
    ]
  }
});
