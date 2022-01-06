// Dependencies
import express from 'express';
import https from 'https';
import bodyParser from 'body-parser';

// Declare instance of express 
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

// Connect to database through mongoose
// Skipping for now 


// Connect to OpenBreweryDB
app.post("/", (req, res)=> {
  const query = req.body.city;
  const url = `https://api.openbrewerydb.org/breweries?per_page=50&by_city=${query}`
  // code below written wit the help of StackExchange
  https.get(url, (response)=> {
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

// Start Server 
app.listen(3000, () => {
  console.log("Server running on port 3000. Hacking time!!")
})