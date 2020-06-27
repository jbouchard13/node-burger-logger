const express = require("express");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 8080;

const app = express();

// serve static files from public folder
app.use(express.static("public"));

// set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set up server to use handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// get routes from controller file
const routes = require("./controllers/burgers_controller");
app.use(routes);

app.listen(PORT, () => {
  console.log(`App is now listening at localhost:${PORT}`);
});
