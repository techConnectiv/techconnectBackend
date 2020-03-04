const swaggerjsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = require('../../index');

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
