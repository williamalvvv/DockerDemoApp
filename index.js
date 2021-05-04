const express = require('express')
const app = express()
const port = 3000
var os = require("os");
var hostname = os.hostname()

const MongoClient = require('mongodb').MongoClient

// Connection URL
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/test';

app.get('/', (req, res) => {
  MongoClient.connect(mongoUrl, { useNewUrlParser: true }, (err, db) => {
    if (err) {
      res.status(500).send('Oooops algo ha salido mal  ): ' + err);
    } else {
      res.send('Conexion a la base de datos exitosa from ' + hostname);
      db.close();
    }
  });
});

app.listen(port, () => console.log(`Servidor Activo y escuchando en el puerto: ${port}!`))
