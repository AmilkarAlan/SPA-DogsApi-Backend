const { Router } = require("express");

const user = Router();

user.get('/', (req, res) => {
    res.send('¡Hola Mundo!')
  })
module.exports = user;