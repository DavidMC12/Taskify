const express = require('express');
const app = express();
const port = 3000;

// Ruta principal que muestra "Hola Mundo"
app.get('/', (req, res) => {
  res.send('¡Hola Mundo!');
});

// Iniciar el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
