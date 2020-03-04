const { Router } = require('express');
// const swaggerjsDoc = require('swagger-jsdoc');
const UserController = require('../controllers/UserController');
const OngController = require('../controllers/OngController');
const SessionController = require('../controllers/SessionController');
const authMiddleware = require('../middleware/auth');

const routes = Router();

/**
 * @Swagger
 * /cadastro:
 *  get:
 *    description: Use to store a new User
 */

routes.post('/cadastro', UserController.store);

routes.post('/login', SessionController.store);
routes.put('/:id/user', authMiddleware);
routes.get('/ong/list', OngController.index);
// routes.use()

module.exports = routes;
