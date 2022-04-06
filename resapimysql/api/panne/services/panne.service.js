const pool = require("../../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into pannes(id,date , secteur ,description, equipement, peice_de_rechange, nature,delais,prochainretour,ouverture,tbf) 
                values(?,?,?,?,?,?,?,?,?,?,?)`,
      [
        data.id,
        data.date,
        data.secteur,
        data.description,
        data.equipement,
        data.peice_de_rechange,
        data.nature,
        data.delais,
        data.prochainretour,
        data.ouverture,
        data.tbf,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getPanneByPanneId: (id, callBack) => {
    pool.query(
      `select id,date , secteur ,description, equipement, peice_de_rechange, nature,delais,prochainretour,ouverture,tbf from pannes where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getPannes: (callBack) => {
    pool.query(
      `select id,date , secteur ,description, equipement, peice_de_rechange, nature,delais,prochainretour,ouverture,tbf from pannes`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deletePanne: (data, callBack) => {
    pool.query(
      `delete from pannes where id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  sumMtbf: (data, callBack) => {
    pool.query(`SELECT SUM(tbf) FROM pannes`, (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results[0]);
    });
  },
};
