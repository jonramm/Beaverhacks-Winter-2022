import '../App.css';
import React, {useState, useEffect} from 'react';
import BreweryList from '../components/BreweryList';

function Breweries() {

  const [breweries, setData] = useState([]);
  
  const loadBreweries = async ()=> {
      const response = await fetch("https://api.openbrewerydb.org/breweries");
      const data = await response.json();
      console.log(data);
      setData(data);
  }
  
  useEffect(()=> {
      loadBreweries();
  }, [])
  
  return (
        <div>
            <h1>Breweries</h1>
            <BreweryList breweries={breweries} />
        </div>
    )
}

export default Breweries;