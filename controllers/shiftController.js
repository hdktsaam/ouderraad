const db = require("../database");

const getshiftsByEvent = (req, res) => {
  db.all(
    "select * from shift where id_evenement = ? order by volgorde",
    [req.params.ID],
    (err, rows) => {
      if (err) return res.json({ message: err.message });
      res.json({ data: rows });
    }
  );
};

module.exports = {
  getshiftsByEvent,
};
