const express = require("express");
const app = express();

/*
//next middleware
app.use((req, res, next) => {
  console.log("this is 1st middleware");
  next();
});

app.use((req, res, next) => {
  console.log("this is 2nd middleware");
  next();
});
*/

//multiple middleware to check access token
const check = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  throw new Error("ACCESS DENIED!");
};

app.get("/api", check, (req, res) => {
  console.log("data sent!");
  res.send("data");
});

//middleware with path
app.use("/random", (req, res, next) => {
  console.log("this is only for random");
  next();
});

//utility middleware
app.use((req, res, next) => {
  req.time = new Date(Date.now()).toString().slice(0, 34);
  console.log(req.method, req.hostname, req.path, req.time);
  next();
});

//middleware example
app.get("/", (req, res) => {
  res.send("hi this is root");
});

app.get("/random", (req, res) => {
  res.send("this is random");
});

app.listen(8080, () => {
  console.log("server is listening on 8080");
});
