// Importa las dependencias
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');

// Carga las variables de entorno
dotenv.config();

// Crea una nueva aplicación Express
const app = express();

app.use(express.json());
// Usa Helmet para ayudar a proteger tu aplicación de algunas vulnerabilidades web bien conocidas
app.use(helmet());
// Usa CORS para permitir solicitudes de origen cruzado
app.use(cors());
// Usa Morgan para registrar las solicitudes HTTP
app.use(morgan('dev'));

// const routes = require('./routes');
// app.use('/api', routes);
app.get('/', (req, res) => {
  res.send('¡Hola Mundo!')
})
// Error catching endware.
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = app;
