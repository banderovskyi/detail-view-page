import React, { useEffect, useRef } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import './App.scss';

function App() {
  const navItemRef = useRef(null);

  useEffect(() => {
    const onClick = (e) =>
      navItemRef.current.contains(e.target) || console.log('Click beside nav');
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div className="wrapper" id="App" onClick={(e) => console.log(e.target)}>
      <div className="content ">
        <Header navItemRef={navItemRef} />
        <main className="main ">
          <h1>Hello World</h1>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
