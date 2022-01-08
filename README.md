# HopHub
[HopHub Logo](https://github.com/jonramm/Beaverhacks-Winter-2022/blob/main/brewery-app/src/images/hophub-icon.png?raw=true)

So now we have the app set up as essentially two apps: a react front-end application and an express back-end REST api. 

To use the project on your local machine, you can clone the repository. Then, use these two commands in both the brewery-app and breweries-backend directories:

`npm install`

Once you've installed all the dependencies. You can run both applications in development mode by using the command in both directories:

`npm start`

The react application will run on localhost:8000 and the express api will run on localhost:3000. 

#Home Page

HopHub homepage assesses geolocation by your ip address then displays the ten closest breweries to you.

#Search By City

Search By City returns all the breweries in that city, as well as the total number and a breweries per 50,000 residents figure.

Below the search results is a map with each brewery appearing as a marker, and clicking on the marker reveals Name and address.

#Contributors

App created by:

Matthew DeMichele
Jon Ramm
Jonathan Rockett
Richard Silva

