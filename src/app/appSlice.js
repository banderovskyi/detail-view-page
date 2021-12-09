import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isUserLoggedIn: false,
  userEmail: null,
  isFavoriteListing: false,
  willBeFavorite: false,
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
    willBeFavorite: (state) => {
      state.willBeFavorite = true;
    },
  },
});

export const {
  userLogIn,
  userLogOut,
  setUserEmail,
  setIsFavorite,
  unsetIsFavorite,
  willBeFavorite,
} = appSlice.actions;

export default appSlice.reducer;
