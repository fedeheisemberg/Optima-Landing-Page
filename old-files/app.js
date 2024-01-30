const { Pool } = require('pg');
const express = require('express');
const bodyParser = require('body-parser');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'optima_db',
  password: 'rdr2',
  port: 5432,
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit-form', (req, res) => {
  console.log(req.body);
  const { name, lastname, email, phone, message, country, investment_experience } = req.body;
  pool.query(
    'INSERT INTO contact_info (name, lastname, email, phone, message, country, investment_experience) VALUES ($1, $2, $3, $4, $5, $6, $7)',
    [name, lastname, email, phone, message, country, investment_experience],
    (error, results) => {
      if (error) {
        res.status(500).send('Ocurrió un error al enviar tu mensaje.');
      } else {
        res.status(201).send('Tu mensaje ha sido enviado con éxito.');
      }
    }
  );
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

