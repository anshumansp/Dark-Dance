const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;
const mongoose = require("mongoose");
// const bodyparser = require("body-parser");

// Connecting to Mongoose
// main().catch((err) => console.log(err));
// async function main() {
//   await mongoose.connect("mongodb://127.0.0.1:27017/contactDance");
// }

// Define Mongoose Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  gender: String,
  address: String,
  message: String,
});
const Contact = mongoose.model("Contact", contactSchema);

// Express Specific Things
app.use("/static", express.static("static"));
app.use(express.urlencoded());

// Pug Specific Things
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Endpoints
app.get("/", (req, res) => {
  res.status(200).render("home.pug");
});

app.get("/contact", (req, res) => {
  res.status(200).render("contact.pug");
});

app.post("/contact", (req, res) => {
  var myData = new Contact(req.body);
  res.status(200).send("Item has been considered.")
  // myData
  //   .save()
  //   .then(() => {
  //     res.send("This item has been saved to Database");
  //   })
  //   .catch(() => {
  //     res.status(400).send("Item was not saved to the Database.");
  //   });
});

// Running the Server
app.listen(port, () => {
  console.log(`Server listening at http://127.0.0.1:${port}`);
});
