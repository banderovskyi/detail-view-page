import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import './App.scss';

function App() {
  return (
    <div className="wrapper" id="App">
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
