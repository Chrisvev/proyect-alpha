const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');



// const DB_HOST = process.env.DB_HOST|| 'localhost'
// const DB_USER = process.env.DB_USER || 'localhost'
// const DB_PASSWORD = process.env.DB_PASSWORD || ''
// const DB_NAME = process.env.DB_NAME || 'db_alpha'
// const DB_PORT = process.env.port || 3309



// Crea una instancia de la aplicación Express
const app = express();
app.use(cors());
app.use(express.json());

// Configura el puerto en el que escuchará el servidor
const PORT = process.env.PORT || 3001;


const conn = mysql.createConnection({
  user: 'root',
  password: 't1WL1OULxOqixMJQyY0K',
  host: 'containers-us-west-111.railway.app',
  port: 6573,
  database: 'railway'
})



// ruta de ejemplo
app.get('/', (req, res) => {
  res.send('Home');
});


app.get('/ping', async (req, res) => {
  conn.query('SELECT * FROM users', (error, results) => {
    if (error) {
    
      console.error(error);
      res.status(500).json({ error: 'Error en la consulta' });
    } else {
   
      res.json(results);
    }
  });
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express funcionando en el puerto ${PORT}`);
});
