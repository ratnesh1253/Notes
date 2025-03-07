const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override"); //to overide html form method to patch

app.use(express.urlencoded({ extended: true })); //to parse data
app.use(methodOverride("_method")); //to overide html form method to patch

app.set("view engine", "ejs"); //setting view engine
app.set("views", path.join(__dirname, "views")); //setting path to views folder

app.use(express.static(path.join(__dirname, "public"))); //setting path to public folder

let posts = [
  {
    id: uuidv4(),
    username: "apnacollege",
    content: "I love coding",
  },
  {
    id: uuidv4(),
    username: "shradhakhapra",
    content: "Hard work is important to achieve success",
  },
  {
    id: uuidv4(),
    username: "ratnesh1253",
    content: "I got selected for my first internship",
  },
];

//INDEX route
app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

//take info for new post
app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

//add new post
app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  res.redirect("/posts"); //redirect to "/posts" route
});

//show indevidual post
app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("show.ejs", { post });
});

//update post
app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find((p) => id === p.id);
  post.content = newContent;
  console.log(post);
  res.redirect("/posts");
});

//to edit post
app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", { post });
});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id);
  res.redirect("/posts");
});

//to start server
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
