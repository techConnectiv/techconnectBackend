const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./src/Routes/routes');
const config = require('./src/Config/config');

const app = express();
const conn = config.database;

mongoose.connect(conn, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  poolSize: 10,
});
mongoose.set('useCreateIndex', true);
mongoose.connection.on('error', err => {
  console.error(`Erro na conexão com o banco de dados! ${err}`);
});
mongoose.connection.on('disconnected', () => {
  console.error('Aplicação desconectada do banco de dados! ');
});
mongoose.connection.on('connected', () => {
  console.log('Aplicação conectada do banco de dados! ');
});
app.use(express.json());
app.use(routes);

app.use(cors());

app.listen(3333);
