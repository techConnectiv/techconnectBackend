const { Router } = require('express');

const UserController = require('../controller/UserController');
const SessionController = require('../controller/SessionController');
const authMiddleware = require('../middleware/auth');

const routes = Router();

routes.post('/cadastro', UserController.store);
routes.post('/login', SessionController.store);
routes.put('/user', authMiddleware);

module.exports = routes;
