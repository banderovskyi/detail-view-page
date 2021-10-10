/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { useDispatch } from 'react-redux';

import './App.scss';
import { closeAll } from './components/Header/HeaderNavigation/HeaderNavigationSlice';

function App() {
  const rootNode = useRef(null);
  const dispatch = useDispatch();
  const navigationSelecor = '.navigation__item';

  useEffect(() => {
    const onClick = (e) => {
      const clickedNavigationItem = e.target.closest(navigationSelecor);
      if (!clickedNavigationItem) {
        dispatch(closeAll());
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div className="wrapper" id="App" ref={rootNode}>
      <div className="content ">
        <Header />
        <main className="main ">
          <h1>Hello World</h1>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
