import { createSlice } from "@reduxjs/toolkit";


export const userDetailsSlice = createSlice({
    name:"userDetails",
    initialState:{
        userDetails:[],
        loading:false,
        error:null
    },
    reducers:{
        // GET- API -CALLING
        loadUserStart:(state) => {
            state.loading = true;
        },
        loadUserSuccess:(state,action) => {
            state.userDetails = action.payload;
            state.loading = false;
        },
        loadUserError:(state,action) => {
            state.error = action.payload;
            state.loading = false
        },
        // POST-API-CALLING
        createUsersStart:(state) => {
            state.loading = true;
        },
        createUsersSuccess:(state,action) => {
            state.userDetails = action.payload;
            state.loading = false;
        },
        createUsersError:(state,action) => {
            state.error = action.payload;
            state.loading = true;
        },
        // DELETE-API-CALLING
        deleteUsersStart:(state) => {
            state.loading = true;
        },
        deleteUsersSuccess:(state,action) => {
            state.userDetails = userDetailsSlice.filter((item) => item.id !== action.payload);
            state.loading = false;
        },
        deleteUsersError:(state,action) => {
            state.error = action.payload;
            state.loading = true;
        },

        // UPDATE-API-CALLING
        updateUsersStart:(state) => {
            state.loading = true;
        },
        updateUsersSuccess:(state,action) => {
            state.userDetails = action.payload;
            state.loading = false;
        },
        updateUsersError:(state,action) => {
            state.error = action.payload;
            state.loading = true;
        },
    }
})


export const  {
    loadUserStart,
    loadUserSuccess,
    loadUserError,
    createUsersStart,
    createUsersSuccess,
    createUsersError,
    deleteUsersStart,
    deleteUsersSuccess,
    deleteUsersError,
    updateUsersStart,
    updateUsersSuccess,
    updateUsersError
} = userDetailsSlice.actions

export default userDetailsSlice.reducer