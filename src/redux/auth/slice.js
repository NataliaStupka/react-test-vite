// інформація про користувача

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
};

// створюємо slice
const slice = createSlice({
  name: "auth",
  initialState,
});

export const authReducer = slice.reducer;
