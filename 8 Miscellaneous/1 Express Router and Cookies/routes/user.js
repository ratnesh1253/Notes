const express = require("express");
const router = express.Router();

//user routes ->

router.get("/", (req, res) => {
    res.send("GET for users");
});

router.get("/:id", (req, res) => {
    res.send("GET for users ids");
});

router.post("/", (req, res) => {
    res.send("POST for users");
});

router.delete("/:id", (req, res) => {
    res.send("DELETE for users");
});

module.exports = router;