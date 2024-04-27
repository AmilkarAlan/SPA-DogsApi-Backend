const mongoose = require('mongoose');
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

// Conéctate a tu base de datos MongoDB
mongoose.connect(process.env.DB_URL);
// trae modelos existentes en la carpeta models
fs.readdirSync(path.join(__dirname, '/models'))
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
        require(path.join(__dirname, '/models', file));
    });
// Comprueba si la conexión fue exitosa
const db = mongoose.connection;
const { User } = mongoose.models;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('¡Conectado a la base de datos!');
});

module.exports = {
    ...mongoose.models,
    conn: mongoose.connection,

}

