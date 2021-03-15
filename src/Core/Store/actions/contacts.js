import { RSAA, getJSON } from 'redux-api-middleware';

export const loadContacts = id => ({
  [RSAA]: {
    endpoint: `/api/contacts/${id}/`,
    method: 'GET',
    types: [
      'LOAD_CONTACTS_REQUEST', 
      {
        type: 'LOAD_CONTACTS_SUCCESS',
        payload: async (action, state, responce) => {
          const res = await getJSON(responce);
          return { data: JSON.parse(res) }; 
        },
      }, 
      'LOAD_CONTACTS_FAILURE'
    ]
  }
});