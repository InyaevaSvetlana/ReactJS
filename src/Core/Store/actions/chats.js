import { RSAA, getJSON } from 'redux-api-middleware';

export const loadChats = id => ({
  [RSAA]: {
    endpoint: `/api/chats/${id}/`,
    method: 'GET',
    types: [
      'LOAD_CHATS_REQUEST', 
      {
        type: 'LOAD_CHATS_SUCCESS',
        payload: async (action, state, responce) => {
          const res = await getJSON(responce);
          return { data: JSON.parse(res) }; 
        },
       
      }, 
      'LOAD_CHATS_FAILURE'
    ]
  }
});

export const getActiveChat = url => ({
  type: 'GET_CHAT_ID',
  payload: { id: url ? url.replace(/\/.+\//i, '') : null }
});