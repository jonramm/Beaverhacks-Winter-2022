import React, { useState, useEffect } from "react";
import BreweryRow from "./BreweryRow";

function BreweryList({ breweries }) {
  
  return (
      <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Street</th>
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