import '../App.css';
import React from 'react';
import SearchForm from '../components/SearchForm';
import Navbar from '../components/pageNavbar';


function Breweries() {

    const page = "Breweries";

    return (
        <div className="page-container">
            <div className="content-wrap">
                <Navbar page={page} />
                <div className="container">
                    <SearchForm />
                </div>
            </div>
            <div className="footer bg-primary">
                <h3 id="footerText">© Our team 2022</h3>
            </div>
        </div>

    )
}

export default Breweries;