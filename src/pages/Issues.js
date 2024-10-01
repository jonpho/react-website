import Navigation from "../components/Navigation";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import React from "react";
import IssuesList from "../components/IssuesList";

function Issues() {
    return (
        <div className="App">
            <div>
                <Navigation/>
            </div>
            <div>
                <Jumbotron/>
            </div>
            <div className="section">
                <IssuesList/>
            </div>
            <div className="section">
                <Footer/>
            </div>
        </div>
    );
}

export default Issues;