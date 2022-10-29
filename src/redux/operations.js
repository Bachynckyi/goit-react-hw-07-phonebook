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