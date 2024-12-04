can't add map functionality (mapbox) as it requires credit/debit card credentials for login.
thus the code writtrn for mapbox or map will not work
The path for the coding files that will not work :- public/js/map.js
And some parts of views/listing/show.ejs will also not work
the commented code in map.js is for leaflet and the uncomented is for mapbox
WHAT TO DO TO FIX THIS MAP PROBLEM:- 
login in on mapbox and replace the fake MAP_TOKEN in .env file with the map token from the mapbox website