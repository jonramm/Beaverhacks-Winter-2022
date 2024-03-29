import React from "react";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table'

function DataCell ({numOfBreweries, correctCity, state}) {

    // perCapita is really per 50,000
    const [perCapita, setPerCapita] = useState(0);

    // Population request sent to backend
    const searchPopulation = async (correctCity, state) => {
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
            const perFifty = numOfBreweries * 50000 / data.population;
            if (perFifty <= numOfBreweries) {
                setPerCapita(Math.round(perFifty))
            } else {
                setPerCapita(numOfBreweries)
            }           
        } else {setPerCapita("N/A")}
    }

    searchPopulation(correctCity, state)
    
    return (
        <div className="brewery-data-cell">
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