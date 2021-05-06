//import
const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const membersRoute = require("./routes/routes");
const members = require("./model/Member");

//setup
const app = express();
app.engine("handlebars", exphbs);
app.set("view engine", "hbs");
app.set("views", "views");

//midlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res, next) => {
  res.render("index", {
    title: "Hola with HBS",
    members,
  });
});

//Routes
app.use("/api/members", membersRoute);

app.use((req, res, next) => {
  res.render("404", {
    title: "Page not found",
  });
});

//server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
