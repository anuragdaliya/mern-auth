import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  currentUser: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initalState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    signOut: (state) => {
      state.currentUser = null;
    },
  },
});

export const { signInStart, signInSuccess, signInFailure, signOut } =
  userSlice.actions;

export default userSlice.reducer;
