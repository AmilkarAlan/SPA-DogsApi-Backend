const mongoose = require('mongoose');
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

// Conéctate a tu base de datos MongoDB
mongoose.connect(process.env.DB_URL);


fs.readdirSync(path.join(__dirname, '/models'))
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
        require(path.join(__dirname, '/models', file));
    });
// Comprueba si la conexión fue exitosa
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('¡Conectado a la base de datos!');

    // Prueba la conexión realizando una operación simple en la base de datos
    // Asegúrate de reemplazar 'NombreColeccion' con el nombre de una colección real en tu base de datos
    mongoose.connection.db.collection('DogsApi_DB').findOne({})
        .then(doc => {
            console.log(doc);
            return
        })
        .catch(err => {
            console.error('Error al realizar la operación en la base de datos:', err);
            return err
        });
});
    const { User } = mongoose.models;

module.exports = {
    ...mongoose.models,
    conn: mongoose.connection,

}
// Define un modelo
// const Schema = mongoose.Schema;

// const UserSchema = new Schema({
//   name: String,
//   email: String,
//   password: String
// });

// const User = mongoose.model('User', UserSchema);
