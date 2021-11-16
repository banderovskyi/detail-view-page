/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './App.scss';
import Aside from './components/Aside/Aside';
import Slider from './components/Slider/Slider';
import Modal from './components/Modal/Modal';
import { useSelector } from 'react-redux';
import ContactUsForm from './components/Forms/ContactUsForm/ContactUsForm';

function App() {
  // Navigation variables
  const rootNode = useRef(null);
  const navigationSelecor = '.navigation__item';
  const [subMenuStatuses, setSubMenuStatuses] = useState([]);
  // Modals variables
  const modalStatuses = useSelector((state) => state.modals);

  // Navigaition click handler
  useEffect(() => {
    const onClick = (e) => {
      const clickedNavigationItem = e.target.closest(navigationSelecor);
      if (!clickedNavigationItem) {
        setSubMenuStatuses((prevState) => {
          return prevState.map((item) => (item = false));
        });
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div className="wrapper" id="App" ref={rootNode}>
      <div className="content ">
        <Header changeSubMenuStatuses={setSubMenuStatuses} subMenuStatuses={subMenuStatuses} />
        <div className="page-wrapper">
          <div className="container">
            <main className="main page-wrapper__main">
              <Slider />
            </main>
            <Aside className="page-wrapper__aside" />
          </div>
        </div>
      </div>
      <Footer />
      <Modal
        id="favorite-modal"
        isActive={modalStatuses.isLoginModalVisible}
        title="Log in or create an account to save this listing to your favorites"
        subtitle="Log in to your account to save your favorite listings for later.">
        <p>Here will be register form</p>
      </Modal>
      <Modal id="contact-modal" isActive={modalStatuses.isContactModalVisible} title="Contact Us">
        <ContactUsForm id="modal-contact" address="59 High Street Brookline MA 02445" />
      </Modal>
    </div>
  );
}

export default App;
