const express = require('express');
require('express-async-errors');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./Routes/routes');
const configdb = require('./Config/config');

const app = express();

const conn = configdb.database;

mongoose.connect(conn, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  poolSize: 10,
});
mongoose.set('useCreateIndex', true);
mongoose.connection.on('error', err => {
  // eslint-disable-next-line no-console
  console.error(`Erro na conexão com o banco de dados! ${err}`);
});
mongoose.connection.on('disconnected', () => {
  // eslint-disable-next-line no-console
  console.error('Aplicação desconectada do banco de dados! ');
});
mongoose.connection.on('connected', () => {
  // eslint-disable-next-line no-console
  console.log('Aplicação conectada do banco de dados! ');
});

app.use(express.json());
app.use(routes);

app.use(cors());

module.exports = app;
