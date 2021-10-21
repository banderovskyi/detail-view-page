/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import './App.scss';

function App() {
  const rootNode = useRef(null);
  const navigationSelecor = '.navigation__item';
  const [subMenuStatuses, setSubMenuStatuses] = useState([]);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

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
        <Header
          changeSubMenuStatuses={setSubMenuStatuses}
          subMenuStatuses={subMenuStatuses}
          changeMobileMenuVisability={setIsMobileMenuVisible}
          isMobileMenuVisible={isMobileMenuVisible}
        />
        <main className="main ">
          <h1>Hello World</h1>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
