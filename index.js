const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');
const swaggerDoc = require('./api/swagger');
const routes = require('./api/Routes/routes');
const configdb = require('./api/Config/config');

const app = express(express);
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

routes(app);
swaggerDoc(app);

app.use(express.json());

app.use(cors());
app.use((req, res, next, err) => {
  // eslint-disable-next-line no-console
  console.error('There was an error', err);
});
app.use(logger('dev'));
const server = http.createServer(app);
const port = process.env.PORT || 3333;
server.listen(port);

module.exports = app;
