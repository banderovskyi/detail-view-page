import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';
import navigationReducer from '../components/Header/HeaderNavigation/HeaderNavigationSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    navigation: navigationReducer,
  },
});
