import Navigation from "../components/Navigation";
import Jumbotron from "../components/Jumbotron";
import Elect from "../components/Elect";
import Footer from "../components/Footer";
import React from "react";

function Home() {
    return (
        <div className="App">
            <div>
                <Navigation/>
            </div>
            <div>
                <Jumbotron/>
            </div>
            <div className="section">
                <Elect/>
            </div>
            <div className="section">
                <Footer/>
            </div>
        </div>
    );
}

export default Home;
