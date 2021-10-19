import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMobileMenuVisible: false,
};

export const headerNavSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    openMobileMenu: (state) => {
      state.isMobileMenuVisible = true;
    },
    closeMobileMenu: (state) => {
      state.isMobileMenuVisible = false;
    },
  },
});

export const selectMobileMenuVisabilty = (state) => state.navigation.isMobileMenuVisible;

export const { openMobileMenu, closeMobileMenu } = headerNavSlice.actions;

export default headerNavSlice.reducer;
