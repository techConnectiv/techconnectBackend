const { Router } = require('express');
const UserController = require('../controllers/UserController');
const OngController = require('../controllers/OngController');
const SessionUserController = require('../controllers/SessionUserController');
const SessionOngController = require('../controllers/SessionOngController');
const authMiddleware = require('../middleware/auth');

const routes = Router();
// usuários
routes.get('/', (req, res) => {
  return res.json({ message: 'Techconnective' });
});
routes.get('/user', UserController.index);
routes.post('/cadastro', UserController.store);
routes.post('/login', SessionUserController.store);
routes.put('/user/:id', authMiddleware, UserController.update);

routes.get('/ong', OngController.index);
routes.post('/ong', OngController.store);
routes.post('/logon', SessionOngController.store);

module.exports = routes;
