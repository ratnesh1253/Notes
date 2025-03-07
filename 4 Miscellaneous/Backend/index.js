const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true })); //to decode data
app.use(express.json()); //decode json data

app.get("/register", (req, res) => {
  let { user, password } = req.query;
  res.send(`standard GET responce, Welcome ${user}!`);
});

app.post("/register", (req, res) => {
  console.log(req.body);
  let { user, password } = req.body;
  res.send(`standard POST responce, Welcome ${user}!`);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
