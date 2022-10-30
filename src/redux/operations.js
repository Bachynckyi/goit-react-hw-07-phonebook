import * as contactsAPI from '../services/servicesAPI';
import { createAsyncThunk } from "@reduxjs/toolkit";


export const getContacts = createAsyncThunk("contacts/getContacts", async () => {
  try {
    const contacts = await contactsAPI.fetchContacts();
    return contacts;
  }
  catch(error) {
    return error;
  }
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async newState => {
    try {
      const contact = await contactsAPI.addContact(newState);
      return contact;
    } catch (error) {
      return error;
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    try {
      const deletedcontact = await contactsAPI.deleteContact(id);
      return deletedcontact.id;
    } catch (error) {
      return error;
    }
  }
);

