require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DATABASE_URL, { useUnifiedTopology: true })
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

app.use(express.json());

const doctorsRouter = require("./routes/doctors");
app.use("/doctors", doctorsRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
