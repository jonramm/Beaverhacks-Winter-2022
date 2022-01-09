// Dependencies
import express from 'express';
import https from 'https';
import bodyParser from 'body-parser';
import axios from 'axios';
import all_the_cities from 'all-the-cities';
import csv from 'csv-parser';
import fs from 'fs';

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

// Handles POST Requests from front-end, three bundled axios calls to handle limited data return
app.post("/api", async (req, res) => {
  
  // Let server console know backend has received the request 
  console.log("Received request. Retrieving info now...");
  
  // Get the city from the search bar on the front end
  const city = req.body.city;
  const page = req.body.page;
  const state = req.body.state;

  let data=[]
  const req1 = axios.get(`https://api.openbrewerydb.org/breweries?per_page=50&by_city=${city}&page=1&by_state=${state}`);
  const req2 = axios.get(`https://api.openbrewerydb.org/breweries?per_page=50&by_city=${city}&page=2&by_state=${state}`);
  const req3 = axios.get(`https://api.openbrewerydb.org/breweries?per_page=50&by_city=${city}&page=3&by_state=${state}`)
  await axios.all([req1, req2, req3]).then(axios.spread((res1, res2, res3)=> {
    data = res1.data.concat(res2.data).concat(res3.data);
  }))

  console.log("Request completed.");

  const numOfBreweries = {"numOfBreweries": data.length}
  data.push(numOfBreweries)

  res.status(200).send(data);
  
});

// Endpoint for breweries by geolocation
app.post("/geo", (req, res) => {
  // Let server console know backend has received the request 
  console.log("Received request. Retrieving info now...");
  
  // Get the city from the search bar on the front end
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;
  const url = `https://api.openbrewerydb.org/breweries?per_page=20&by_dist=${latitude},${longitude}`

  axios.get(url)
    .then((response)=> {
      let data = response.data
    })

  })

// Endpoint for population gathering
app.post("/population", (req, res)=> {

  console.log("gathering population data...")
  const city = req.body.correctCity;
  const state = req.body.state;
  const cityData = all_the_cities.filter(searchCity => searchCity.name.match(city));
  // state/abbreviation table
  const stateObj = {
    "alabama": "AL",
    "alaska": "AK",
    "arizona": "AZ",
    "arkansas": "AR",
    "california": "CA",
    "colorado": "CO",
    "connecticut": "CT",
    "delaware": "DE",
    "district of columbia": "DC",
    "florida": "FL",
    "georgia": "GA",
    "hawaii": "HI",
    "idaho": "ID",
    "illinois": "IL",
    "indiana": "IN",
    "iowa": "IA",
    "kansas": "KS",
    "kentucky": "KY",
    "louisiana": "LA",
    "maine": "ME",
    "maryland": "MD",
    "massachusetts": "MA",
    "michigan": "MI",
    "minnesota": "MN",
    "mississippi": "MS",
    "missouri": "MO",
    "montana": "MT",
    "nebraska": "NE",
    "nevada": "NV",
    "new hampshire": "NH",
    "new jersey": "NJ",
    "new mexico": "NM",
    "new york": "NY",
    "north carolina": "NC",
    "north dakota": "ND",
    "ohio": "OH",
    "oklahoma": "OK",
    "oregon": "OR",
    "pennsylvania": "PA",
    "rhode island": "RI",
    "south carolina": "SC",
    "south dakota": "SD",
    "tennessee": "TN",
    "texas": "TX",
    "utah": "UT",
    "vermont": "VT",
    "virginia": "VA",
    "washington": "WA",
    "west virginia": "WV",
    "wisconsin": "WI",
    "wyoming": "WY"
  }
  let population = 0
  for (let el of cityData) {
    // makes sure name and state match in the data
    if (el.name == city && el.adminCode === stateObj[state]) {
      population = el.population
    }
  }
  res.send({"population": population})
})

// Endpoint for visualizations 
app.get('/api/breweries-by-state', async (req, res) => {
  
  // Declare array of breweries per state 
  let breweriesByState = [
    {state: "Alabama", count: 0},
    {state: "Alaska", count: 0},
    {state: "Arizona", count: 0},
    {state: "Arkansas", count: 0},
    {state: "California", count: 0},
    {state: "Colorado", count: 0},
    {state: "Connecticut", count: 0},
    {state: "Delaware", count: 0},
    {state: "District of Columbia", count: 0},
    {state: "Florida", count: 0},
    {state: "Georgia", count: 0},
    {state: "Hawaii", count: 0},
    {state: "Idaho", count: 0},
    {state: "Illinois", count: 0},
    {state: "Indiana", count: 0},
    {state: "Iowa", count: 0},
    {state: "Kansas", count: 0},
    {state: "Kentucky", count: 0},
    {state: "Louisiana", count: 0},
    {state: "Maine", count: 0},
    {state: "Maryland", count: 0},
    {state: "Massachusetts", count: 0},
    {state: "Michigan", count: 0},
    {state: "Minnesota", count: 0},
    {state: "Mississippi", count: 0},
    {state: "Missouri", count: 0},
    {state: "Montana", count: 0},
    {state: "Nebraska", count: 0},
    {state: "Nevada", count: 0},
    {state: "New Hampshire", count: 0},
    {state: "New Jersey", count: 0},
    {state: "New Mexico", count: 0},
    {state: "New York", count: 0},
    {state: "North Carolina", count: 0},
    {state: "North Dakota", count: 0},
    {state: "Ohio", count: 0},
    {state: "Oklahoma", count: 0},
    {state: "Oregon", count: 0},
    {state: "Pennsylvania", count: 0},
    {state: "Rhode Island", count: 0},
    {state: "South Carolina", count: 0},
    {state: "South Dakota", count: 0},
    {state: "Tennessee", count: 0},
    {state: "Texas", count: 0},
    {state: "Utah", count: 0},
    {state: "Vermont", count: 0},
    {state: "Virginia", count: 0},
    {state: "Washington", count: 0},
    {state: "West Virginia", count: 0},
    {state: "Wisconsin", count: 0},
    {state: "Wyoming", count:0},
  ]
  
  // Read through the dataset and add to each state's brewery count 
  fs.createReadStream('dataset.csv')
    .pipe(csv())
    .on('data', (row) => {
      
      // Add to each state's count 
      for (let current in breweriesByState) {
        if (breweriesByState[current].state == row.state) {
          breweriesByState[current].count += 1;
        }
      } 
      
    })
    .on('end', () => {
      console.log('CSV file successfully processed');
      
      // Sort and return top 10 
      let sortedBreweries = breweriesByState.sort((a, b) => b.count - a.count)
      let topTen = sortedBreweries.slice(0,10);
      
      res.status(200).json(topTen)
    });
  
});

app.get('/api/breweries-data', async (req, res) => {
  // Send CSV data to front end 
  let csvData = []
  fs.createReadStream('dataset.csv')
    .pipe(csv())
    .on('data', (row) => {
      csvData.push(row);
    })
    .on('end', () => {
      console.log('CSV file successfully processed: dataset.csv');
      res.status(200).json(csvData);
    })
});

// Send GEOJson to front end 
app.get('/api/breweries-geojson', async (req, res) => { 
  try {
    const jsonString = fs.readFileSync("./dataset.geojson");
    const geoData = JSON.parse(jsonString);
    
    res.status(200).json(geoData);
  } catch (err) {
    console.log("an error occurred");
    return;
  }
});

// Start Server 
app.listen(3000, () => {
  console.log("Server running on port 3000. Hacking time!!")
})