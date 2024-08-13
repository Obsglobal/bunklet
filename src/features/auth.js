import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: {
    user: null,
    accessToken: null,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.auth.accessToken = action.payload;
    },
    setUser: (state, action) => {
      state.auth.user = action.payload;
    },
  },
});

export const { setUser, setAccessToken } = authSlice.actions;

export default authSlice.reducer;
