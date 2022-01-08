// Dependencies
import express from 'express';
import https from 'https';
import bodyParser from 'body-parser';
import axios from 'axios';
import all_the_cities from 'all-the-cities';

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

// Start Server 
app.listen(3000, () => {
  console.log("Server running on port 3000. Hacking time!!")
})