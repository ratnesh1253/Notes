const express = require("express");
const router = express.Router();

//post routes ->

router.get("/", (req, res) => {
    res.send("GET for posts");
});

router.get("/:id", (req, res) => {
    res.send("GET for posts ids");
});

router.post("/", (req, res) => {
    res.send("POST for posts");
});

router.delete("/:id", (req, res) => {
    res.send("DELETE for posts");
});

module.exports = router;