import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoginModalVisible: false,
  isSignInModalVisible: false,
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
    openSignupModal: (state) => {
      state.isSignInModalVisible = true;
    },
  },
});

export const { closeModal, openLoginModal, openContactModal, openSignupModal } =
  modalsSlice.actions;

export default modalsSlice.reducer;
