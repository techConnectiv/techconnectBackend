const { Router } = require('express');

const UserController = require('../controller/UserController');
const authMiddleware = require('../middleware/auth');

const routes = Router();

routes.post('/cadastro', UserController.store);

module.exports = routes;