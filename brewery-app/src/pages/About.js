import React from "react";
import Navbar from '../components/pageNavbar';
import jonImg from '../images/github-prof-img.jpg'
import beerStein from '../images/beer-stein.png';
import mattHeadshot from '../images/matt-headshot.jpg';
import richImg from '../images/richimg.jpg'

function About() {
    const page = "About";
    return (
        <div className="page-container">
            <Navbar page={page} />
            <div className="content-wrap">
                <h2>This site was built for the love of beer by:</h2>
                <div className="container px-4">
                <div className="row gx-5">
                    <div className="col about-box-left p-3 bg-light">
                        <h3><u>Matthew DeMichele</u></h3> 
                        <img className="about-img" src={mattHeadshot}></img>
                        <p><a className="personal-site" href="https://mattdemichele.co" target="_blank">Visit my website!</a></p>
                        <p>Favorite Style: IPA always!</p>                
                    </div>
                    <div className="col about-box-left p-3 bg-light">
                        <h3><u>Jon Ramm</u></h3>
                        <img className="about-img" src={jonImg}></img>
                        <p><a className="personal-site" href="https://www.jonramm.com" target="_blank">Visit my website!</a></p>
                        <p>Favorite Style: IPA</p>
                    </div>
                    <div className="col about-box-left p-3 bg-light">
                        <h3><u>Jonathan Rockett</u></h3>
                        <img className="about-img" src={beerStein}></img> 
                        <p><a className="personal-site" href="" target="_blank">Visit my website!</a></p>
                        <p>Favorite Style:</p>  
                    </div>
                    <div className="col about-box-right p-3 bg-light">
                        <h3><u>Richard Silva</u></h3>
                        <img className="about-img" src={richImg}></img>
                        <p><a className="personal-site" href="https://github.com/SpigotTheBull" target="_blank">Visit my website!</a></p>
                        <p>Favorite Style: Ale never fails </p>   
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