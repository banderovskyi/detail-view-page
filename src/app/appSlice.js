import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isUserLoggedIn: false,
  isFavoriteListing: false,
  userEmail: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    userLogIn: (state) => {
      state.isUserLoggedIn = true;
    },
    userLogOut: (state) => {
      state.isUserLoggedIn = false;
    },
    setUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
    setIsFavorite: (state) => {
      state.isFavoriteListing = true;
    },
    unsetIsFavorite: (state) => {
      state.isFavoriteListing = false;
    },
  },
});

export const { userLogIn, userLogOut, setUserEmail, setIsFavorite, unsetIsFavorite } =
  appSlice.actions;

export default appSlice.reducer;
