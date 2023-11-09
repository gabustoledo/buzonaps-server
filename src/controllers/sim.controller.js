const simCtrl = {};
const config = require("../config/config.json");

var state = {};

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
  const { spawn  } = require("child_process");

  //process.chdir("../buzon-sim");
	process.chdir("../rl");

	const comandoRL = "python3";
	const argsRL = ["taskRL.py"];

	const comandoSim = "python3";
	const argsSim = ["taskSim.py"];

	const procesoRL = spawn(comandoRL, argsRL, {
		detached: true,
		stdio: "ignore"
	});

	procesoRL.unref();

	const procesoSim = spawn(comandoSim, argsSim, {
		detached: true,
		stdio: "ignore"
	});

	procesoSim.unref();

	process.chdir("../buzon-sim");

	const comando = "bash";
	const args = ["run.sh"];

	const proceso = spawn(comando, args, {
		detached: true,
		stdio: "ignore"
	});

	proceso.unref();
};
module.exports = simCtrl;
