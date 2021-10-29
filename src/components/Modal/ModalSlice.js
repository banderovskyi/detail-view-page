import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoginModalVisible: false,
  isContactModalVisible: false,
};

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    closeModal: (state) => {
      return (state = initialState);
    },
    openLoginModal: (state) => {
      state.isLoginModalVisible = true;
    },
    openContactModal: (state) => {
      state.isContactModalVisible = true;
    },
  },
});

export const { closeModal, openLoginModal, openContactModal } = modalsSlice.actions;

export default modalsSlice.reducer;
