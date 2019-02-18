// npm packages to be used
const path = require("path");
const express = require("express");

// tells node we are creating an 'express' server
const app = express();

// Sets a port to be used
const PORT = process.env.PORT || 8080;

// sets up 'Express' app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./app/public"));
app.get("/", function(req, res) {
  res.json(path.join(__dirname, "/public/index.html"));
});
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });