import React, { useState, useEffect } from "react";
import BreweryRow from "./BreweryRow";

function BreweryList({ breweries }) {
  
  return (
      <div>
        <table className="table table-dark table-striped">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Street</th>
                    <th scope="col">Phone</th>
                </tr>
            </thead>
            <tbody>
              {breweries.map((brewery, i) => <BreweryRow data={brewery} key={i} /> )}
            </tbody>
        </table>
        
    </div>
    )
}

export default BreweryList;