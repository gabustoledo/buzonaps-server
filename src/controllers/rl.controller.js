const rlCtrl = {};
var task = {}

rlCtrl.receive = (req, res) => {

	res.status(200).send({ message: "Tareas recibidas rl." })
}

rlCtrl.postTask = (req, res) => {
	if(!req.body){
		res.status(400).send({ message: "Content can not be empty!" });
		return;
	}
	task = req.body
	res.status(200).send({ message: "Ok" });
}

rlCtrl.getTask = (req, res) => {
	const taskAux = task
	task = {}
	res.status(200).send(taskAux)
}

module.exports = rlCtrl;