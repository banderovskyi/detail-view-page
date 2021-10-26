import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  testString: 'test',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    test: (state, action) => {
      state.testString = action.payload;
    },
  },
});

export const { test } = appSlice.actions;

export default appSlice.reducer;
