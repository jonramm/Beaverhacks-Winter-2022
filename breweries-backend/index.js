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

// Handles POST Requests from front-end, single axios api call 
// app.post("/api", async (req, res) => {
  
//   // Let server console know backend has received the request 
//   console.log("Received request. Retrieving info now...");
  
//   // Get the city from the search bar on the front end
//   const city = req.body.city;
//   const page = req.body.page;
  
//   // send GET request to brewery api 
//   const url = `https://api.openbrewerydb.org/breweries?per_page=50&by_city=${city}&page=${page}`;
  
//   // Serialize response data and send back to front end 
//   const response = await axios.get(url);
//   const data = response.data;
  
//   console.log("Request completed.");
  
//   res.status(200).json(data);
  
// });

// Handles POST Requests from front-end, three bundles axios calls
app.post("/api", async (req, res) => {
  
  // Let server console know backend has received the request 
  console.log("Received request. Retrieving info now...");
  
  // Get the city from the search bar on the front end
  const city = req.body.city;
  const page = req.body.page;

  let data=[]
  const req1 = axios.get(`https://api.openbrewerydb.org/breweries?per_page=50&by_city=${city}&page=1`);
  const req2 = axios.get(`https://api.openbrewerydb.org/breweries?per_page=50&by_city=${city}&page=2`);
  const req3 = axios.get(`https://api.openbrewerydb.org/breweries?per_page=50&by_city=${city}&page=3`)
  await axios.all([req1, req2, req3]).then(axios.spread((res1, res2, res3)=> {
    data = res1.data.concat(res2.data).concat(res3.data);
  }))

  console.log("Request completed.");

  const numOfBreweries = {"numOfBreweries": data.length}
  data.push(numOfBreweries)

  console.log(data)
  res.status(200).send(data);
  
});

// Start Server 
app.listen(3000, () => {
  console.log("Server running on port 3000. Hacking time!!")
})