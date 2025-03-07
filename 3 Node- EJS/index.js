const express = require("express");
const app = express();
const path = require("path"); //require path package

const port = 8080;

app.set("view engine", "ejs"); //set view ingine to render ejs file

app.set("views", path.join(__dirname, "/views")); // ste path

app.use(express.static(path.join(__dirname, "public"))); //for serving static files

//rendering ejs file on req
app.get("/", (req, res) => {
  res.render("home.ejs");
});

//passing value to ejs
app.get("/rollDice", (req, res) => {
  let diveValue = Math.floor(Math.random() * 6) + 1;
  res.render("rollDice.ejs", { num: diveValue });
});

//basic instagram ejs
app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  const instaData = require("./data.json");
  const data = instaData[username];
  // here it will send data of only searched parameter
  if (data) {
    res.render("instagram.ejs", { data });
  } else {
    res.render("error.ejs");
  }
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
