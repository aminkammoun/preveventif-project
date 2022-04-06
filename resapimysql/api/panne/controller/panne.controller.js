const {
  create,
  getPanneByPanneId,
  
  getPannes,
  sumMtbf,
  deletePanne,
} = require("../services/panne.service");

module.exports = {
  createPanne: (req, res) => {
    const body = req.body;
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  getPanneByPanneId: (req, res) => {
    const id = req.params.id;
    getPanneByPanneId(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not Found",
        });
      }
      results.password = undefined;
      return res.json({
        success: 1,
        data: results,
      });
    });
  },

  sumMtbf: (req, res) => {
    console.log(res.data);
    sumMtbf((err, results) => {
      if (err) {
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getPannes: (req, res) => {
    console.log(res.data);
    getPannes((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  deletePanne: (req, res) => {
    const data = req.body;
    deletePanne(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record Not Found",
        });
      }
      return res.json({
        success: 1,
        message: "user deleted successfully",
      });
    });
  },
};
