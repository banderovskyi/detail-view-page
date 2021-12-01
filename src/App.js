/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './App.scss';
import Aside from './components/Aside/Aside';
import Slider from './components/Slider/Slider';
import Modal from './components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import ContactUsForm from './components/Forms/ContactUsForm/ContactUsForm';
import LogInForm from './components/Forms/LogInFrom/LogInForm';
import SignInForm from './components/Forms/SignInForm/SignInForm';
import MoreLikeThis from './components/MoreLikeThis/MoreLikeThis';
import ListedBy from './components/ListedBy/ListedBy';
import { setIsFavorite, userLogIn, setUserEmail } from './app/appSlice';
import { getUserInfoFromLocalStorage } from './helpers/helpers';

function App() {
  const dispatch = useDispatch();
  // Navigation variables
  const rootNode = useRef(null);

  // Modals variables
  const modalStatuses = useSelector((state) => state.modals);

  useEffect(() => {
    const { isFavoriteListing, isUserLoggedIn, userEmail } = getUserInfoFromLocalStorage();
    if (isFavoriteListing) {
      dispatch(setIsFavorite());
    }
    if (isUserLoggedIn) {
      dispatch(userLogIn());
    }
    if (userEmail) {
      dispatch(setUserEmail(userEmail));
    }
  });

  return (
    <div className="wrapper" id="App" ref={rootNode}>
      <div className="content ">
        <Header />
        <div className="page-wrapper">
          <div className="container">
            <main className="main page-wrapper__main">
              <Slider />
            </main>
            <Aside className="page-wrapper__aside" />
          </div>
        </div>
        <MoreLikeThis />
        <ListedBy />
      </div>
      <Footer />
      <Modal
        id="favorite-modal"
        isActive={modalStatuses.isLoginModalVisible}
        title="Log in or create an account to save this listing to your favorites"
        subtitle="Log in to your account to save your favorite listings for later.">
        <LogInForm id="modal-login" />
      </Modal>
      <Modal id="contact-modal" isActive={modalStatuses.isContactModalVisible} title="Contact Us">
        <ContactUsForm id="modal-contact" address="59 High Street Brookline MA 02445" />
      </Modal>
      <Modal
        id="modal-signup"
        isActive={modalStatuses.isSignInModalVisible}
        title="Sign up to save this favorite">
        <SignInForm id="modal-sign-up" />
      </Modal>
    </div>
  );
}

export default App;
