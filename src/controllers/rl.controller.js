const rlCtrl = {};
var task = {}
var rewards = []
var count = 0

rlCtrl.receive = (req, res) => {

	res.status(200).send({ message: "Tareas recibidas rl." })
}

rlCtrl.postTask = (req, res) => {
	if(!req.body){
		res.status(400).send({ message: "Content can not be empty!" });
		return;
	}
	task = req.body
	console.log("tarea " + count)
	count += 1
	res.status(200).send({ message: "Ok" });
}

rlCtrl.getTask = (req, res) => {
	const taskAux = task
	task = {}
	res.status(200).send(taskAux)
}

rlCtrl.postRewards = (req, res) => {
	if(!req.body){
		res.status(400).send({ message: "Content can not be empty!" });
		return;
	}
	rewards.push(req.body)
	console.log(rewards)
	res.status(200).send({ message: "Ok" });
}

rlCtrl.getRewards = (req, res) => {
	res.status(200).send(rewards)
}

rlCtrl.resetRewards = (req, res) => {
	rewards = []
	res.status(200).send(rewards)
}

module.exports = rlCtrl;