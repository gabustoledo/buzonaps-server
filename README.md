
# API para Conexión entre Simulador y Modelo DQN

## Descripción
Esta API actúa como un intermediario entre un simulador y un modelo DQN, facilitando la comunicación y el intercambio de datos entre estos dos componentes. Es esencial para la implementación de un sistema que integra un modelo de aprendizaje por refuerzo en el contexto de gestión de tareas para pacientes en un entorno de simulación. La API está construida usando JavaScript, con Express.js y su router, proporcionando una interfaz robusta y flexible para las interacciones necesarias.

## Tecnologías Utilizadas
- JavaScript
- Express.js

## Instalación
Para instalar las dependencias necesarias para esta API, ejecuta el siguiente comando:

```
npm install
```

## Pre-requisitos
Es necesario tener los siguientes repositorios clonados y configurados al mismo nivel que este repositorio:
- [buzonaps-sim](https://github.com/gabustoledo/buzonaps-sim): Sigue las instrucciones en su README y asegúrate de que se ejecute `make` sin errores.
- [buzonaps-rl](https://github.com/gabustoledo/buzonaps-rl): Sigue las instrucciones en su README para la correcta configuración y uso.

## Uso
Para iniciar la API, utiliza el siguiente comando:

```
npm run start
```

Una vez que la API está en ejecución, puedes interactuar con ella mediante las siguientes rutas:

- Ejecutar simulación: `http://localhost:3000/api/sim/execute/:modo/:config/:time_mode`
  - `modo`: Determina el modo de recompensa utilizado [1, 2, 3, 4, 5].
  - `config`: Determina la configuración a utilizar [1, 2, 3, 4].
  - `time_mode`: Determina el modo de tiempo a utilizar, (0) tiempo fijo, (1) tiempo variable.
- Comprobar estado de la simulación: `http://localhost:3000/api/sim/ocupado` (indica si la simulación aún se está ejecutando)
