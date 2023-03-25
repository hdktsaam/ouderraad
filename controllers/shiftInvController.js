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

const delPersoonShift = (req, res) => {
  db.run("delete from shiftinvulling where id = ?", [req.params.ID], (err) => {
    if (err) return res.json({ message: err.message });
    res.json({ bericht: "OK" });
  });
};

module.exports = {
  addPersoonShifts,
  getPersonenByShift,
  delPersoonShift,
};
