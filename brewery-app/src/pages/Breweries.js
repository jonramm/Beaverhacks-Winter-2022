import '../App.css';
import React, {useState, useEffect} from 'react';
import BreweryList from '../components/BreweryList';
import SearchForm from '../components/SearchForm';
import Navbar from '../components/pageNavbar';


function Breweries() {

//   const [breweries, setData] = useState([]);
  
//   const loadBreweries = async ()=> {
//       const response = await fetch("https://api.openbrewerydb.org/breweries");
//       const data = await response.json();
//       console.log(data);
//       setData(data);
//   }
  
//   useEffect(()=> {
//       loadBreweries();
//   }, [])
  
  return (
        <div>
            <Navbar />
            <div className="container">
            <SearchForm />
            {/* <h1 className='display-1'>Breweries</h1>
            <BreweryList breweries={breweries} /> */}
        </div> 
        </div>
        
    )
}

export default Breweries;