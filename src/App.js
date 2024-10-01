import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Issues from './pages/Issues';
// import Elect from './components/Elect';
// import Footer from "./components/Footer";
// import Jumbotron from "./components/Jumbotron";
// import Navigation from "./components/Navigation"


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/issues" element={<Issues />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
