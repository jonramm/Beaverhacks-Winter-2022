import React from "react";
import Navbar from '../components/pageNavbar';

function About() {
    const page = "About";
    return (
        <div className="page-container">
            <Navbar page={page} />
            <div className="content-wrap">
    
            </div>
            <div className="footer bg-primary">
                <h3 id="footerText">© Our team 2022</h3>
            </div>
        </div>
    )
}

export default About;