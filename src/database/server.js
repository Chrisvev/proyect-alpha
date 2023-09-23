const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');



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
 
});


app.get('/login', async (req, res) => {
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
