const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const cookieParser = require("cookie-parser");// require cookie parser package

app.use(cookieParser("secretcode"));//middleware for cookieParser

//signed cookies
//add signed cookie
app.get("/getsignedcookies", (req, res) => {
    res.cookie("made-in", "india", { signed: true });
    res.send("signed cookie send");
})
//print signed cookie
app.get("/verify", (req, res) => {
    console.log(req.signedCookies);
    res.send("signed cookie sent");
})

//making route to send cookie
app.get("/getcookies", (req, res) => {
    res.cookie("greet", "hello");
    res.cookie("madeIn", "india");
    res.send("sent you some coockies");
})

app.get("/greet", (req, res) => {
    let { name = "anonymous" } = res.cookie;//if ther is no value foe name in cookie thet default will be anonymous
    res.send(`hi ${name}`);
})

app.get("/", (req, res) => {
    console.dir(req.cookies);
    res.send("This is root");
});

app.use("/users", users);
app.use("/posts", posts);

app.listen(3000, () => {
    console.log("Server is listing on 3000");
});