const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}

main()
  .then((res) => {
    console.log("connection successfull");
    console.log("Chats Loaded in Database");
  })
  .catch((err) => {
    console.log(err);
  });

const chatSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    maxLength: 50,
  },
  created_at: {
    type: Date,
    required: true,
  },
});

//creating model ->

const Chat = mongoose.model("Chat", chatSchema);

let allChat = [
  {
    from: "neha",
    to: "priya",
    message: "hii, send me your notes",
    created_at: new Date(),
  },
  {
    from: "rohit",
    to: "mohit",
    message: "teach me JS callbacks",
    created_at: new Date(),
  },
  {
    from: "amit",
    to: "sumit",
    message: "All the best",
    created_at: new Date(),
  },
  {
    from: "tony",
    to: "morgan",
    message: "Love you 3000",
    created_at: new Date(),
  },
  {
    from: "rajat",
    to: "preeti",
    message: "send me questions for exams",
    created_at: new Date(),
  },
  {
    from: "anita",
    to: "rajat",
    message: "bring me some fruits",
    created_at: new Date(),
  },
  {
    from: "sam",
    to: "captain",
    message: "on your left",
    created_at: new Date(),
  },
];

Chat.insertMany(allChat);

module.exports = Chat;
