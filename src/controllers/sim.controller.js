const simCtrl = {};
var config = require("../config/config.json");
const config_1 = require("../config/config_1.json");
const config_2 = require("../config/config_2.json");
const config_3 = require("../config/config_3.json");
const config_4 = require("../config/config_4.json");
var ocupado = false
var no_autoriza = []
var pendiente = []

var state = {};
var managerPatients = {}

simCtrl.receive = (req, res) => {
  res.status(200).send({ message: "Tareas recibidas simulador." });
};

simCtrl.getConfig = (req, res) => {
  // Aqui modificar el config segun lo indicado en la interfaz
  res.status(200).send(config);
};

simCtrl.postState = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  state = req.body;
  res.status(200).send({ message: "Ok" });
};

simCtrl.getState = (req, res) => {
  const stateAux = state;
  state = {};
  res.status(200).send(stateAux);
};

simCtrl.execute = (req, res) => {
  ocupado = true
  const { spawn  } = require("child_process");
	const mode = req.params.mode
	const conf = parseInt(req.params.conf, 10);
	const time = parseInt(req.params.time, 10);

  if (conf == 1){
    console.log("config 1")
    config = config_1
  }
  else if (conf == 2){
    console.log("config 2")
    config = config_2
  }
  else if (conf == 3){
    console.log("config 3")
    config = config_3
  }
  else if (conf == 4){
    console.log("config 4")
    config = config_4
  }

	process.chdir("../rl_1.0");

	const comandoMain = "python3";
	const argsMain = ["main.py", mode, conf, time];

	const procesoMain = spawn(comandoMain, argsMain, {
		detached: true,
		stdio: "ignore"
	});

	procesoMain.unref();

	process.chdir("../buzon-sim_1.0");

	const comando = "bash";
	const args = ["run.sh"];

	const proceso = spawn(comando, args, {
		detached: true,
		stdio: "ignore"
	});

	proceso.unref();
	res.status(200).send({ message: "Ok" });
};

simCtrl.postManagerPatients = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  managerPatients = req.body;
  res.status(200).send({ message: "Ok" });
};

simCtrl.getManagerPatients = (req, res) => {
  const managerPatientsAux = managerPatients;
  managerPatients = {};
  res.status(200).send(managerPatientsAux);
};

simCtrl.desocupado = (req, res) => {
  ocupado = false
  no_autoriza = []
  res.status(200).send(ocupado);
};

simCtrl.ocupado = (req, res) => {
  res.status(200).send(ocupado);
};

simCtrl.no_autoriza = (req, res) => {
	const id = req.params.id
  no_autoriza.push(id)
  console.log(no_autoriza)
  res.status(200).send({ message: "Ok" });
};

simCtrl.no_autoriza_get = (req, res) => {
  res.status(200).send(no_autoriza);
};

simCtrl.post_pendiente = (req, res) => {
  const id_patient = req.params.id_patient
  const id_manager = req.params.id_manager
  const process = req.params.process

  aux = {
    id_patient: id_patient,
    id_manager: id_manager,
    process: process
  }

  pendiente.push(aux)

  res.status(200).send({ message: "Ok" });
};

simCtrl.get_pendiente = (req, res) => {
  aux_pendiente = pendiente
  pendiente = []
  res.status(200).send(aux_pendiente);
};


module.exports = simCtrl;
