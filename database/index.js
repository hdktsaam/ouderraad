const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("./database/eventPlanner.sqlite3", (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connected to the SQlite database.");
});

// initial instelling voor Fk
db.get("PRAGMA foreign_keys = ON");

module.exports = db;
