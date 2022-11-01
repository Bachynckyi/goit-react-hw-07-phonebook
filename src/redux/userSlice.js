import { createSlice } from "@reduxjs/toolkit";
import { getContacts, addContact, deleteContact } from "./operations";
import { Loading } from "notiflix";

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
        Loading.dots({
          svgColor: 'rgba(0,0,255)',
          svgSize: '200px',
        });
      },
      [getContacts.fulfilled](state, action) { 
        state.items = action.payload; 
        state.isLoading = false;
        Loading.remove();
      },
      [getContacts.rejected](state, action) {
        state.isLoading = false;
        state.error = action.payload;
        Loading.remove();
      },
      [addContact.pending](state){
        state.isLoading = true;
        Loading.dots({
          svgColor: 'rgba(0,0,255)',
          svgSize: '200px',
        });
      },
      [addContact.fulfilled](state, action){
        state.items.push(action.payload);
        state.isLoading = false;
        Loading.remove();
      },
      [addContact.rejected](state, action){
        state.isLoading = false;
        state.error = action.payload;
        Loading.remove();
      },
      [deleteContact.pending](state){
        state.isLoading = true;
        Loading.dots({
          svgColor: 'rgba(0,0,255)',
          svgSize: '200px',
        });
      },
      [deleteContact.fulfilled](state, action){
        state.items = state.items.filter(({ id }) => id !== action.payload);
        state.isLoading = false;
        Loading.remove();
      },
      [deleteContact.rejected](state, action){
        state.isLoading = false;
        state.error = action.payload;
        Loading.remove();
      },
    },
});

export const { addNewContact, filterContacts } = userSlice.actions;
