const Router = require("express");
const router = Router();

const rlCtrl = require("../controllers/rl.controller");

router.get("/", rlCtrl.receive);

router.post("/task", rlCtrl.postTask)

router.get("/task", rlCtrl.getTask)

module.exports = router;