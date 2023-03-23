const express = require("express");
const evenement = require("./routes/evenement");
const shifts = require("./routes/shifts");
const shiftInvulling = require("./routes/shiftInvulling");

const app = express();

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  next();
});

app.use("/api/evenement", evenement);
app.use("/api/shift", shifts);
app.use("/api/shiftInvulling", shiftInvulling);

app.listen(4000, () => {
  console.log("connected op poort 4000");
});
