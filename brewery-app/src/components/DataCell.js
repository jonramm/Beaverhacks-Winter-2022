import React from "react";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table'

function DataCell ({numOfBreweries, correctCity, state}) {

    const [perCapita, setPerCapita] = useState(0);
    const [population, setPopulation] = useState(0);

    // Attempted population request
    const searchPopulation = async (correctCity, state) => {
        console.log("search pop " + correctCity)
        console.log("search pop " + state)
        const query = {correctCity, state};
        const response = await fetch('/population', {
            method: 'POST',
            body: JSON.stringify(query),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        if (data.population > 0) {
            setPerCapita(Math.round(numOfBreweries * 50000 / data.population))
        } else {setPerCapita("N/A")}
        
        console.log(perCapita)
    }

    searchPopulation(correctCity, state)
    
    return (
        <div class="brewery-data-cell">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Total Breweries</th>
                        <th>Per 50,000 Residents</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{numOfBreweries}</td>
                        <td>{perCapita}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default DataCell;