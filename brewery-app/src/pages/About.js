import React from "react";
import Navbar from '../components/pageNavbar';

function About() {
    return (
        <div className="page-container">
            <Navbar />
            <div className="content-wrap">
                <h2>This site was built for the love of beer by:</h2>
                <div className="container px-4">
                <div className="row gx-5">
                    <div className="col about-box-left p-3 border bg-light">
                        <h3>Matthew DeMichele</h3>                 
                    </div>
                    <div className="col about-box-left p-3 border bg-light">
                        <h3>Jon Ramm</h3>
                    </div>
                    <div className="col about-box-left p-3 border bg-light">
                        <h3>Jonathan Rockett</h3>
                    </div>
                    <div className="col about-box-right p-3 border bg-light">
                        <h3>Richard Silva</h3>
                    </div>
                </div>
                </div>
            </div>
            <div className="footer bg-primary">
                <h3 id="footerText">© Our team 2022</h3>
            </div>
        </div>
    )
}

export default About;