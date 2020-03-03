const { Router } = require('express');

const UserController = require('../controller/UserController');
const OngController = require('../controller/OngController');
const SessionController = require('../controller/SessionController');
const authMiddleware = require('../middleware/auth');

const routes = Router();

routes.post('/cadastro', UserController.store);
routes.post('/login', SessionController.store);
routes.put('/:id/user', authMiddleware);
routes.get('/ong/list', OngController.index);
module.exports = routes;
