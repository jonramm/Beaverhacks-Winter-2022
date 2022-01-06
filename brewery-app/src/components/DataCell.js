import React from "react";
import { useState } from "react";

function DataCell ({city}) {

    const [data, setData] = useState([]);
    const [endOfFile, setEndOfFile] = useState(false);
    const [page, setPage] = useState(1);

    const getData = async (page)=> {
        const query = {city, page};
        const response = await fetch('/api/dataCell', {
            method: 'POST',
            body: JSON.stringify(query),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const breweryData = await response.json();
        for (let el of breweryData) {
            setData(data + el);
        }
        if (data.length % 20 !== 0) {
            
            setEndOfFile(true);
        } else {
            setPage(page+1)
        }

        
    }

    if (endOfFile === false) {
        // getData();
    }
    


    return (
        <div>
            <h2>data goes here</h2>
        </div>
    )
}

export default DataCell;