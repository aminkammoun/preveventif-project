const router = require("express").Router();
const { checkToken } = require("../../../auth/token_validation");
const {
  createPanne,
  getPanneByPanneId,
  getPannes,
  sumMtbf,
  deletePanne,
} = require("../controller/panne.controller");
router.get("/", getPannes);
router.get("/sum", sumMtbf);
router.post("/", createPanne);
router.get("/:id", getPanneByPanneId);
router.delete("/", deletePanne);

module.exports = router;
