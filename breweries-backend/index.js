// Dependencies
import express from 'express';
import https from 'https';
import bodyParser from 'body-parser';
import axios from 'axios';
// Declare instance of express 
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())

// Connect to database through mongoose
// Skipping for now 


// Handles GET Requests from front-end
app.get("/api", (req, res)=> {
  const query = "Portland";
  const url = `https://api.openbrewerydb.org/breweries?per_page=50&by_city=${query}`
  // code below written wit the help of StackExchange
  https.get(url, (response)=> {
    console.log("getting resources...")
    const chunks = [];
    response.on("data", (chunk)=> {
      chunks.push(chunk);
    })
    response.on("end", ()=> {
      const breweryData = JSON.parse(chunks.join(''));
      res.status(200).json(breweryData);
    })
  })
})

// Handles POST Requests from front-end 
app.post("/api", async (req, res) => {
  
  // Let server console know backend has received the request 
  console.log("Received request. Retrieving info now...");
  
  // Get the city from the search bar on the front end
  const query = req.body.city;
  
  // send GET request to brewery api 
  const url = `https://api.openbrewerydb.org/breweries?per_page=50&by_city=${query}`;
  
  // Serialize response data and send back to front end 
  const response = await axios.get(url);
  const data = response.data;
  
  console.log("Request completed.");
  
  res.status(200).json(data);
  
});

// Start Server 
app.listen(3000, () => {
  console.log("Server running on port 3000. Hacking time!!")
})