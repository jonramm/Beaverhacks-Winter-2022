import '../App.css';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/pageNavbar';
import Button from 'react-bootstrap/Button';

function Home() {

    return (
        <div>
            <Navbar />
            <div className="HomePageText">
                <h1>Home Page</h1>
                <Link to='/breweries'>
                    <Button variant="primary">Go to breweries</Button>
                </Link>
            </div>
        </div>
    )
}

export default Home;