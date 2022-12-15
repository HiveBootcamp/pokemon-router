import { createSlice } from "@reduxjs/toolkit";

const authState = createSlice({
  name: "authState",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    setIsLoggedIn(state) {
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.isLoggedIn = false;
    },
  },
});

// selectors
export const getIsLoggedIn = (state) => {
  return state.authState.isLoggedIn;
};

export const authReducer = authState.reducer;
export const authActions = authState.actions;
