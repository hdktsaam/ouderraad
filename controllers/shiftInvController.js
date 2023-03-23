const db = require("../database");

const getPersonenByShift = (req, res) => {
  const sql = `select * from v_namenShift where id_evenement = ${req.params.ID} order by id_shift`;

  db.all(sql, [], (err, rows) => {
    if (err) return res.json({ message: err.message });
    res.json({ data: rows });
  });
};

const addPersoonShifts = (req, res) => {
  req.body.shifts.forEach((element) => {
    console.log(element);
    db.run(
      "insert into shiftinvulling (id_shift, naam) values (?,?)",
      [element, req.body.naam],
      (err) => {
        if (err) return res.json({ message: err.message });
        console.log("ok");
      }
    );
  });
  res.json({ message: "Ok" });
};

module.exports = {
  addPersoonShifts,
  getPersonenByShift,
};
