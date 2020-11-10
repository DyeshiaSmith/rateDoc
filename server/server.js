require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// mongoose
//   .connect(process.env.DATABASE_URL, { useUnifiedTopology: true })
//   .then(client => {
//     console.log("Connected to Database");
//   })
//   .catch(error => console.error(error));

// const db = mongoose.connection;
const MongoClient = require("mongodb").MongoClient;
const app = express();
const port = 3000;

let db_status = "MongoDB connection not successful.";

let db;

// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", () => (db_status = "Successfully opened connection!"));

app.get("/", (req, res) => {
  res.send(db_status);
});

app.use(express.json());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const con = MongoClient.connect(
  "mongodb+srv://dyesDB:Monet0612!!@cluster0.nqvol.mongodb.net/rateADoc?authSource=admin&replicaSet=atlas-2f38wx-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",
  (err, database) => {
    if (err) return console.log(err);
    db = database.db("rateADoc");
    console.log("Connected to DataBase");
  }
);

app.get("/rateADoc", (req, res) => {
  db.collection("doctors")
    .find()
    .toArray((err, result) => {
      if (err) return console.log(err);
      res.send({ dates: result });
    });
});
