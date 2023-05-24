const db = require("../database");

const getfilms = (req, res) => {
  db.all("select * from film", [req.params.ID], (err, rows) => {
    if (err) return res.json({ message: err.message });
    res.json({ data: rows });
  });
};

module.exports = {
  getfilms,
};
