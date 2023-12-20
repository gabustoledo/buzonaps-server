const Router = require("express");
const router = Router();

const simCtrl = require("../controllers/sim.controller");

router.get("/", simCtrl.receive);

router.get("/config", simCtrl.getConfig)

router.post("/state", simCtrl.postState)

router.get("/state", simCtrl.getState)

router.get("/execute/:mode/:conf/:time", simCtrl.execute)

router.post("/managerPatients", simCtrl.postManagerPatients)

router.get("/managerPatients", simCtrl.getManagerPatients)

router.get("/desocupado", simCtrl.desocupado)

router.get("/ocupado", simCtrl.ocupado)

router.get("/noautoriza/:id", simCtrl.no_autoriza)

router.get("/noautoriza", simCtrl.no_autoriza_get)

router.get("/pendiente/:id_patient/:id_manager/:process", simCtrl.post_pendiente)

router.get("/pendiente", simCtrl.get_pendiente)

module.exports = router;