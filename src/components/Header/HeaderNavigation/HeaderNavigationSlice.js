import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  navSubMenusStatuses: [],
};

export const headerNavSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    initSubMenuStatues: (state, action) => {
      state.navSubMenusStatuses = [...action.payload];
    },
    openNavItem: (state, action) => {
      const openNavItemIndex = action.payload;
      let newStatuses;
      newStatuses = state.navSubMenusStatuses.map((item, itemIndex) => {
        return itemIndex === openNavItemIndex ? true : false;
      });
      if (state.navSubMenusStatuses[openNavItemIndex]) {
        newStatuses = state.navSubMenusStatuses.map((item) => (item = false));
      }
      state.navSubMenusStatuses = newStatuses;
    },
    closeAll: (state) => {
      state.navSubMenusStatuses = state.navSubMenusStatuses.map(
        (item) => (item = false)
      );
    },
  },
});

export const selectNavSubMenusStatuses = (state) =>
  state.navigation.navSubMenusStatuses;

export const { initSubMenuStatues, openNavItem, closeAll } =
  headerNavSlice.actions;

export default headerNavSlice.reducer;
