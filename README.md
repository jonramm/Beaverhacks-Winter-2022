![hophub logo](./brewery-app/src/images/hophub-icon-cropped.png)

## Inspiration 

HopHub is inspired by our team's collective love for a well-brewed beer. Since we love going to local breweries, we wanted to create an app that helped filter out through irrelevant results like liquor stores/grocery stores and make an app that assists us in finding good breweries wherever we are. After all, what better way to help out the beer-loving community than to make breweries easier to find, visit, and support?

## What it does 

HopHub makes it incredibly easy both to find breweries near you and to explore breweries across the United States. Right from the homepage, HopHub delivers a list of the nearest breweries based on your geographical location. HopHub also provides a search feature that allows you to search for breweries based on city name. The search feature returns a list of all the breweries in a given city, displaying each brewery’s name, address, and phone number, and locates each brewery on a map, providing the exact address. 

## How we built it 

We built the application as a client-server application, using Express/Node.js/Axios on the server-side and React/Bootstrap/Bootswatch on the client-side. To query information about breweries, we used the API provided by the Open Breweries DB. To retrieve demographic information about each city, we used the all-the-cities dataset. For finding a user’s current geolocation based on their IP address, we used the ipify API.  For the map feature, we leveraged the OpenLayers API. Finally, we also incorporated a fair bit of snazzy styling, utilizing custom CSS and a beautifully hand-drawn logo.

## Challenges we ran into 

We found some issues with github especially challenging, as we were all working on the project voraciously and in a short timespan. There were plenty of merge conflicts and various problems when it came to commits directly to the main branch. There were also some new bugs that arose when we deployed our app through Heroku.

## Accomplishments that we’re proud of 

We're very proud of creating an aesthetically pleasing app with a very artistic logo that intuitively directs the user to local breweries or breweries in the location that the user submits. Our app's data visualization capabilities are great as well as our interactive map shows where the nearest breweries are.

## What we learned 

Through this project, we learned a great deal about building applications that use a client-server architecture. We learned how to utilize the Open Brewery API and how various APIs can run in tandem with each other in an app. There was also a considerable effort learning about IPs and how to geolocate IPs so our app could be convenient to the user. We also learned about the collaboration process, learning how to manage different branches on Github and assign roles and responsibilities to different team members without interfering with each other’s work. 

## What’s next for HopHub?

After the Hackathon, we'd like to keep the site live! We’re working on deploying the application as we speak!

