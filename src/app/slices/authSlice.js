import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: true,
  role: "",
  email: "iman@gmail.com",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.email = action.payload;
      console.log("our action is running");
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
