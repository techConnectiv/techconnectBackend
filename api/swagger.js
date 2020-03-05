const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const routes = require('./Routes/routes');

class Swagger {
  createDocsRoute(app) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.use('/', routes);
  }
}

const swagger = new Swagger();
module.exports = swagger;
