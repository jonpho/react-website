import React from 'react';
import './App.css';
import About from './components/About';
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import Navigation from "./components/Navigation"

function App() {
  return (
    <div className="App">
      <div>
        <Navigation />
      </div>
      <div>
        <Jumbotron />
      </div>
      <div className="section">
        <About />
      </div>
      <div className="section">
        <Footer />
      </div>
    </div>
  );
}

export default App;
