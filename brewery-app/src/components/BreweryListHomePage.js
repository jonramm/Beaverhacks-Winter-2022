import React from "react";
import BreweryRowHomePage from "./BreweryRowHomePage";

function BreweryListHomePage({ breweries }) {

    return (
        <div>
            <table className="table table-striped brewery-table">
                <thead>
                    <tr>
                        <th scope="col"><h3>Name</h3></th>
                        <th scope="col"><h3>Street</h3></th>
                        <th scope="col"><h3>City</h3></th>
                        <th scope="col"><h3>Phone</h3></th>
                    </tr>
                </thead>
                <tbody>
                    {breweries.map((brewery, i) => <BreweryRowHomePage data={brewery} key={i} />)}
                </tbody>
            </table>
        </div>
    )
}

export default BreweryListHomePage;