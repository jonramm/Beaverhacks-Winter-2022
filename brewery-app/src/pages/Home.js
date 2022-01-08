import '../App.css';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/pageNavbar';
import Button from 'react-bootstrap/Button';
import BackgroundImage from '../components/bar.jpg';

function Home() {

    return (
        <div>
            <Navbar />
            <div className="HomePage">
                <img src={BackgroundImage} className="BackgroundImage"/>
                <div className="HomePageText">
                    <h1>Find a Brewery Near You!</h1>
                    <Link to='/breweries'>
                        <Button variant="primary">Find Breweries</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;