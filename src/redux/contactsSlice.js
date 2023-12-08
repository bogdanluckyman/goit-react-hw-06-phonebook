import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    add: {
      prepare(value) {
        return {
          payload: value,
          id: nanoid(),
        };
      },
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      remove(state, action) {
        state.contacts = state.contacts.filter(
          item => item.id !== action.payload
        );
      },
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { add, remove } = contactsSlice.actions;
