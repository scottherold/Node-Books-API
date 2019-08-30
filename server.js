// <--- Modules --->
const express = require('express'); // improts express
const bodyParser = require('body-parser'); // imports body-parser

// <--- Server --->
const port = process.env.PORT || 8000; // estblishes port
const app = express(); // constructs express server

// <--- Sever Settings --->
app.use(bodyParser.json()); // for interpretting JSON data
app.use(bodyParser.urlencoded({extended: true})); // allow POST routes
// app.use(express.static(__dirname + '/public/dist/public')); // use Angular static folder

// <--- Database & Routing --->
require(__dirname + '/server/config/database'); // DB connection
require(__dirname + '/server/config/routes')(app); // Routing

// <--- Port Listening --->
app.listen(port, () => console.log(`Express server listening on port ${ port }`)); // listen notice