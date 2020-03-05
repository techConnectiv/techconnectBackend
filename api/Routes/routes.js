const { Router } = require('express');
const UserController = require('../controllers/UserController');
const OngController = require('../controllers/OngController');
const SessionController = require('../controllers/SessionController');
const authMiddleware = require('../middleware/auth');

const routes = Router();
// usuários
routes.get('/user', UserController.index);
routes.post('/cadastro', UserController.store);
routes.post('/login', SessionController.store);
routes.put('/:id/user', authMiddleware);
routes.get('/ongs', OngController.index);

module.exports = routes;
