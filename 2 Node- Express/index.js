const express = require("express");
const app = express(); //app is object

// console.dir(app);

//listen ->
let port = 3000;

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
}); //it will continuosly listen for request (stop using Ctrl+c)

//respond ->(listen all request)
/*
app.use((req, res) => {
  // console.log(req);
  console.log("request received");
  // res.send("hello");
  // res.send({
  //   name: "ratnesh",
  //   age: 21,
  // });
  let code = "<h1>hello</h1>";
  res.send(code);
});
*/

// sending a responce -> (listen perticular req and responce)

//these are routes for root, /apple, /mango

app.get("/", (req, res) => {
  res.send("Hello, i'm root");
});
/*
app.get("/apple", (req, res) => {
  res.send("you contacted apple path");
});

app.get("/mango", (req, res) => {
  res.send("you contacted mango path");
});

app.get("*", (req, res) => {
  res.send("this path does not exist");
});

//post request
app.post("/", (res, req) => {
  res.send("you send post request");
});
*/

//path parameter ->

app.get("/:username/:id", (req, res) => {
  console.log(req.params);
  let { username, id } = req.params;
  res.send(`request with parameter username: @${username} & id: ${id}`);
});

//query string ->

app.get("/search", (req, res) => {
  console.log(req.query);
  let { q } = req.query;
  res.send(`no results for qurey ${q}`);
});
