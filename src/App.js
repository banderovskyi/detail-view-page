/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './App.scss';
import Aside from './components/Aside/Aside';
import Slider from './components/Slider/Slider';
import Modal from './components/UI/Modal/Modal';

function App() {
  const rootNode = useRef(null);
  const navigationSelecor = '.navigation__item';
  const [subMenuStatuses, setSubMenuStatuses] = useState([]);

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
        title="Log in or create an account to save this listing to your favorites"
        subtitle="Log in to your account to save your favorite listings for later."
      />
    </div>
  );
}

export default App;
