import { createSlice } from "@reduxjs/toolkit";
import { getContacts, addContact, deleteContact } from "./operations";

export const userSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        filter: ""
    },
    reducers: {
          filterContacts: (state, action) => {
            state.filter = action.payload;
          },
    },
    extraReducers: {
      [getContacts.pending](state){
        state.isLoading = true;
      },
      [getContacts.fulfilled](state, action) { 
        state.items = action.payload; 
        state.isLoading = false;
      },
      [getContacts.rejected](state, action) {
        state.isLoading = false;
        state.error = action.payload;
      },
      [addContact.pending](state){
        state.isLoading = true;
      },
      [addContact.fulfilled](state, action){
        state.items.push(action.payload);
        state.isLoading = false;
      },
      [addContact.rejected](state, action){
        state.isLoading = false;
        state.error = action.payload;
      },
      [deleteContact.pending](state){
        state.isLoading = true;
      },
      [deleteContact.fulfilled](state, action){
        state.items = state.items.filter(({ id }) => id !== action.payload);
        state.isLoading = false;
      },
      [deleteContact.rejected](state, action){
        state.isLoading = false;
        state.error = action.payload;
      },
    },
});

export const { addNewContact, filterContacts } = userSlice.actions;
export const isLoading = state => state.addContact.isLoading;
