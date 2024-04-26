const server = require('./src/app.js');
const PORT = 3001
server.listen(3001, () => {
    console.log(`La aplicación está escuchando en http://localhost:${PORT}`) // eslint-disable-line no-console
  });