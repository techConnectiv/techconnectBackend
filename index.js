const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const swaggerjsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
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

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'TechConnective',
      description: 'Api em NodeJS da TechConnective',
      contact: {
        name: 'Developement',
      },
      servers: ['localhost:3333'],
    },
  },
  apis: ['index.js'],
};

const swaggerDocs = swaggerjsDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());
app.use(routes);

app.use(cors());

const port = process.env.PORT || 3333;
app.listen(port);

module.exports = app;
