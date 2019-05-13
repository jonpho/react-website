import React from 'react';
import './App.css';
import About from './components/About';
import Navigation from './components/Navigation';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <body>
        <About />
      </body>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
