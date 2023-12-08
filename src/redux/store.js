import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { nanoid } from 'nanoid';

export const initialContacts = () => {
  const savedContacts = localStorage.getItem('newContact');
  return savedContacts !== null ? JSON.parse(savedContacts) : [];
};
const initialState = {
  contacts: initialContacts(),
  filter: '',
};

export const addContacts = newContact => ({
  type: 'contacts/add',
  payload: { ...newContact, id: nanoid() },
});

export const removeContacts = contactId => ({
  type: 'contacts/remove',
  payload: contactId,
});

export const updateFilters = newValue => ({
  type: 'filter/newFilter',
  payload: newValue,
});

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/add':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case 'contacts/remove': {
      return {
        ...state,
        contacts: state.contacts.filter(item => item.id !== action.payload),
      };
    }
    case 'filter/newFilter': {
      return {
        ...state,
        filter: action.payload,
      };
    }
    default:
      return state;
  }
};
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
