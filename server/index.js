const express = require("express");
const app = express();
app.listen(1233, () => console.log("Listening on Port 1233"));

app.route("/").put((req, res) => {
  res.status(200).send({ message: myFirstServer });
});
