import '../App.css';
import React from 'react';
import SearchForm from '../components/SearchForm';
import Navbar from '../components/pageNavbar';


function Breweries() {

    const page = "Breweries";

    return (
        <div className="page-container">
            <Navbar page={page} />
            <div className="content-wrap">
                <div className="container">
                    <SearchForm />
                </div>
            </div>
            <div className="footer bg-primary">
                <h3 id="footerText">© Hop Boyz 2022</h3>
            </div>
        </div>

    )
}

export default Breweries;