import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  navStatuses: [],
};

export const headerNavSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    initSubMenuStatues: (state, action) => {
      state.navStatuses = [...action.payload];
    },
    openItem: (state, action) => {
      const openItemIndex = action.payload;
      let newStatuses;
      newStatuses = state.navStatuses.map((item, itemIndex) => {
        return itemIndex === openItemIndex ? true : false;
      });
      if (state.navStatuses[openItemIndex]) {
        newStatuses = state.navStatuses.map((item) => (item = false));
      }
      state.navStatuses = newStatuses;
    },
    closeAll: (state) => {
      state.navStatuses = state.navStatuses.map((item) => (item = false));
    },
  },
});

export const selectNavStatuses = (state) => state.navigation.navStatuses;

export const { initSubMenuStatues, openItem, closeAll } =
  headerNavSlice.actions;

export default headerNavSlice.reducer;
