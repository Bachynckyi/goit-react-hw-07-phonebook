import { createSlice } from "@reduxjs/toolkit";
import { getContacts } from "./operations";

export const userSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        filter: ""
    },
    reducers: {
          addContact: (state, action) => {
            state.items.push(action.payload);
          },
          deleteContact: (state, action) => {
            state.items = state.items.filter(({ id }) => id !== action.payload);
          },
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
    },
});

export const { addContact, deleteContact, filterContacts } = userSlice.actions;