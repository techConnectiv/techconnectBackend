const UserController = require('../controllers/UserController');
const OngController = require('../controllers/OngController');
const SessionController = require('../controllers/SessionController');
const authMiddleware = require('../middleware/auth');

const routes = app => {
  /**
   * @Swagger
   * /:
   *    get:
   *      description: OIEMMMM
   *      responses:
   *       200:
   *        description: hello world
   */
  app.get('/', (req, res) => {
    res.json({ message: 'Helo World' });
  });
  /**
   * @Swagger
   * /cadastro:
   *    post:
   *      description: This should return all users
   */
  app.post('/cadastro', UserController.store);

  app.post('/login', SessionController.store);
  app.put('/:id/user', authMiddleware);
  app.get('/ong/list', OngController.index);
};

module.exports = routes;
