const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: 'si no confias no hay confianza' });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
