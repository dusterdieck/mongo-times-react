// Dependencies
let express = require("express");
let bodyParser = require("body-parser");
let logger = require("morgan");
let mongoose = require("mongoose");
let bluebird = require("bluebird");
let routes = require("./routes/routes");
let path = require("path");

// truthfully, no idea why bluebird instead of ES6 Promise
// except the internet claims bluebird is faster
mongoose.Promise = bluebird;

// Initialize Express
const APP = express();

//set PORT
const PORT = process.env.PORT || 3002;

// Use morgan and body parser with our app
APP.use(logger("dev"));
APP.use(bodyParser.urlencoded({
  extended: false
}));
APP.use(bodyParser.json());

// Make public a static dir
APP.use(express.static(path.join(__dirname, '/public')));

//routing
APP.use("/", routes);

// Database configuration with mongoose
let databaseUri = process.env.MONGODB_URI || "mongodb://localhost/mongotimes";
mongoose.connect( databaseUri );
let db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Listen on port 3000
APP.listen(PORT, function() {
  console.log("App running on port", PORT);
});
