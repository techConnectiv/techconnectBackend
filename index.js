const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const SwaggerExpress = require('swagger-express-mw');
const routes = require('./api/Routes/routes');
const configdb = require('./api/Config/config');

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
  console.error(`Erro na conexão com o banco de dados! ${err}`);
});
mongoose.connection.on('disconnected', () => {
  console.error('Aplicação desconectada do banco de dados! ');
});
mongoose.connection.on('connected', () => {
  console.log('Aplicação conectada do banco de dados! ');
});

const config = {
  appRoot: __dirname, // required config
};

SwaggerExpress.create(config, (err, swaggerExpress) => {
  if (err) {
    throw err;
  }

  swaggerExpress.register(app);

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log(`try this:\ncurl http://127.0.0.1:3333/hello?name=Scott`);
  }
});

app.use(express.json());
app.use(routes);

app.use(cors());

module.exports = app;
