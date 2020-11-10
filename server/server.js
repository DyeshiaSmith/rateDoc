require("dotenv").config();
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const app = express();
const port = 3000;

// let db_status = "MongoDB connection not successful.";

let db;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const con = MongoClient.connect(
  `mongodb+srv://dyesDB:<password>@cluster0.nqvol.mongodb.net/rateADoc?retryWrites=true&w=majority`,
  (err, database) => {
    if (err) return console.log(err);
    db = database.db("rateADoc");
    console.log("connected!!!");
  }
);

app.use(cors());

app.get("/rateADoc", (req, res) => {
  db.collection("doctors")
    .find()
    .toArray((err, result) => {
      if (err) return console.log(err);
      res.send({ dates: result });
    });
});
