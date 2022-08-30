import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
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
      state.role = "admin";
      console.log("login action");
      localStorage.setItem("email", action.payload);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.role = "";
      state.email = "";
      console.log("logout action ");
      localStorage.removeItem("email");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
