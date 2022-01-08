import React, { useState, useEffect } from "react";
import BreweryRow from "./BreweryRow";

function BreweryList({ breweries }) {

    return (
        <div>
            <table className="table table-striped brewery-table">
                <thead>
                    <tr>
                        <th scope="col"><h3>Name</h3></th>
                        <th scope="col"><h3>Street</h3></th>
                        <th scope="col"><h3>Phone</h3></th>
                    </tr>
                </thead>
                <tbody>
                    {breweries.map((brewery, i) => <BreweryRow data={brewery} key={i} />)}
                </tbody>
            </table>
        </div>
    )
}

export default BreweryList;