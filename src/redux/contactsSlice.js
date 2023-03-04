import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    },
    deleteContact(state, action) {
      const id = action.payload;
      state.contacts = state.contacts.filter(contact => contact.id !== id);
    },
    filterContact(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, filterContact } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
