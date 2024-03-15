import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contact',
  initialState: { contacts: [] },
  reducers: {
    addContact: (state, { payload }) => {
      state.contacts = [...state.contacts, payload];
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

export const contactReducer = contactSlice.reducer;

export const { addContact, deleteContact } = contactSlice.actions;
