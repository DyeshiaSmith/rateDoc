const express = require("express");
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://dyesDB:Monet0612!@cluster0.nqvol.mongodb.net/rateADoc?authSource=admin&replicaSet=atlas-2f38wx-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",
    { useUnifiedTopology: true }
  )
  .then(client => {
    console.log("Connected to Database");
  })
  .catch(error => console.error(error));
const db = mongoose.connection;
const app = express();
const port = 3000;

let db_status = "MongoDB connection not successful.";

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => (db_status = "Successfully opened connection!"));

app.get("/", (req, res) => {
  res.send(db_status);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
