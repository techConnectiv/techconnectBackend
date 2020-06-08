const User = require('../schema/User');
const jwt = require('jsonwebtoken');
const authConfig = require('../Config/config');

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}
module.exports = {
  async store(req, res) {
    const userExists = await User.findOne(
      { where: { email: req.body.email } } || { where: req.body.cpf } || {
        where: req.body.tel,
      }
    );

    if (userExists) {
      return res.status(400).json({ error: 'Usuário existente' });
    }

    const {
      name,
      login,
      password,
      email,
      cpf,
      dtNasc,
      address,
      sexo,
      tel,
      latitude,
      longitude,
    } = req.body;

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    };


    const user = await User.create({
      name,
      login,
      password,
      email,
      cpf,
      dtNasc,
      address,
      sexo,
      tel,
      location,
    });

    user.password = undefined;

    return res.json({
      user,
      token: generateToken({ id: user.id })
    });
  },
  async update(req, res) {

  },
};
