const db = require("../database");

const getEvenementen = (req, res) => {
  db.all("select * from evenement", [], (err, rows) => {
    if (err) return res.json({ message: err.message });
    res.json({ data: rows });
  });
};

const addEvenement = (req, res) => {
  db.run("insert into evenement (naam) values (?)", [req.body.titel], (err) => {
    if (err) return res.json({ message: err.message });
    res.json({ data: "Ok" });
  });
};

const deleteEventement = (req, res) => {
  db.run("delete from evenement where id > 1", [], (err) => {
    if (err) return res.json({ message: err.message });
    res.json({ data: "ok" });
  });
};

const updateEvenement = (req, res) => {
  db.run(
    "update evenement set naam = ? where id = ?",
    [req.body.titel, req.body.id],
    (err) => {
      if (err) return res.json({ message: err.message });
      res.json({ data: "Ok" });
    }
  );
};

module.exports = {
  getEvenementen,
  addEvenement,
  updateEvenement,
};
