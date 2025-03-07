const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");
const mongoose = require("mongoose");
const Chat = require("./demodata.js");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}

main().catch((err) => console.log(err));

//middleware to throw custom error
const check = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  throw new ExpressError(401, "ACCESS DENIED!"); //constructor for custom error
};

app.get("/api", check, (req, res) => {
  console.log("data sent!");
  res.send("data");
});

app.get("/", (req, res) => {
  res.send("this is home page");
});

app.get("/random", (req, res) => {
  res.send("this is random");
});

//this is error giving route
app.get("/err", (req, res) => {
  abcd = abcd;
});

/*
//defineing err handler ->
app.use((err, req, res, next) => {
  console.log("--------- ERROR ---------");
  res.send(err.message);
});
*/

app.get("/admin", (req, res) => {
  throw new ExpressError(403, "Access to admin is Forbidden");
});

//AsyncWrap function
function asyncWrap(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => next(err));
  };
}

//new show route for DB for async error
app.get(
  "/chats",
  asyncWrap(async (req, res, next) => {
    let id = "88a540f82150a7e3d17ba18f"; //this is incorrect id
    let chat = await Chat.findById(id);
    if (!chat) {
      next(new ExpressError(404, "Chat not Found")); // callnext with error as argument
    }
    res.send(chat);
  })
);

//error handling middleware to print name of error
app.use((err, req, res, next) => {
  console.log(err.name);
  if (err.name === "ValidationError") {
    console.log("this was a validation error. please follow rules!");
  } else if (err.name === "Error") {
    console.log("your id is not available in database, please check it!");
    console.dir(err.message);
  }
  next(err);
});

//creating user friendly custom errors ->
app.use((err, req, res, next) => {
  let { status = 500, message = "Some Error Occured" } = err;
  res.status(status).send(message);
});

app.listen(8080, () => {
  console.log("server listening on 8080");
});
