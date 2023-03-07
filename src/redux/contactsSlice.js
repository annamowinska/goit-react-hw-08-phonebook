import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateFilter,
} from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {},
  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) => {
      state.contacts = action.payload;
    },
    [addContact.fulfilled]: (state, action) => {
      state.contacts.push(action.payload);
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    [updateFilter.fulfilled]: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
