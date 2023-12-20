// Dependencias
const express = require('express')

// Rutas
const rlRouter = require("./routes/rl.routes")
const simRouter = require("./routes/sim.routes")

// Inicializacion
const app = express()
app.use(express.json({ limit: '100mb' }));

app.set("port", process.env.PORT || 3000);

app.use(express.urlencoded({ extended: false }));

// Rutas para api
app.use("/api/rl",rlRouter)
app.use("/api/sim",simRouter)

module.exports = app;