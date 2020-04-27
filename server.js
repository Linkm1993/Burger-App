const express = require("express");

// set up port
let PORT = process.env.PORT || 3000;

// create app
let app = express();

// serve static content from public directory
app.use(express.static("public"));

// parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set up handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars")


// import routes
const routes = require("./controllers/burgers_controller");

app.use(routes);

// start server
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });