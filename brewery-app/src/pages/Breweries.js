import '../App.css';
import React from 'react';
import SearchForm from '../components/SearchForm';
import Navbar from '../components/pageNavbar';


function Breweries() {

    return (
        <div class="page-container">
            <div class="content-wrap">
                <Navbar />
                <div className="container">
                    <SearchForm />
                </div>
            </div>
            <div class="footer bg-primary">
                <h3 id="footerText">© Our team 2022</h3>
            </div>
        </div>

    )
}

export default Breweries;