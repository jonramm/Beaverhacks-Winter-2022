import React from "react";
import Navbar from '../components/pageNavbar';


function About() {

    return (
        <div>
            <Navbar />
            <div className="AboutPageText">
                <h1>About</h1>
                <p>This website allows to see breweries in certain cities</p>
            </div>
        </div>
    )
}

export default About;