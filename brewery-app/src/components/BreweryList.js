import React from "react";
import BreweryRow from "./BreweryRow";

function BreweryList({ breweries }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Street</th>
                </tr>
            </thead>
            <tbody>
                {breweries.map((brewery, i) => <BreweryRow data={brewery} key={i} />)}
            </tbody>
        </table>
    )
}

export default BreweryList;