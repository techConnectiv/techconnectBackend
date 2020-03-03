const { Router } = require('express');

const UserController = require('../controllers/UserController');
const OngController = require('../controllers/OngController');
const SessionController = require('../controllers/SessionController');
const authMiddleware = require('../middleware/auth');

const routes = Router();

routes.post('/cadastro', UserController.store);
routes.post('/login', SessionController.store);
routes.put('/:id/user', authMiddleware);
routes.get('/ong/list', OngController.index);
module.exports = routes;
