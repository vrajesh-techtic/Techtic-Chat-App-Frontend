import {  createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
  name: "user",
  initialState: {
    userObj: null,
  },
  reducers: {
    saveProfileUser: (state, action) => {
      state.userObj = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.userObj = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.userObj = action.payload;
      });
  },
});

export default userSlice.reducer;
export const { clearUser } = userSlice.actions;