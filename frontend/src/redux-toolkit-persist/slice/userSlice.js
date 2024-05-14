import {  createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
  name: "user",
  initialState: {
    userObj: null,
  },
  reducers: {
    saveUserProfile: (state, action) => {
      // console.log("action.payload -->", action.payload);
      state.userObj = action.payload;
    },
    clearUserProfile:(state)=>{
      state.userObj = null; 
    }
  },
});

export default userSlice.reducer;
export const { saveUserProfile, clearUserProfile } = userSlice.actions;