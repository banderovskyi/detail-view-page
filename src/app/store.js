import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';
import modalsReducer from '../components/Modal/ModalSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    modals: modalsReducer,
  },
});
