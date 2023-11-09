const Router = require("express");
const router = Router();

const simCtrl = require("../controllers/sim.controller");

router.get("/", simCtrl.receive);

router.get("/config", simCtrl.getConfig)

router.post("/state", simCtrl.postState)

router.get("/state", simCtrl.getState)

router.get("/execute", simCtrl.execute)

module.exports = router;