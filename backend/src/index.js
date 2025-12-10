const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(espress.json());

app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: 'Hola desde el servidor express' });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
