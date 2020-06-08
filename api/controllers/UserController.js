const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authConfig = require('../Config/config');

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}
module.exports = {
  async index(req, res) {
    const user = User.find();

    res.json(user);
  },
  async store(req, res) {
    const { name, email, password, cpf, sexo, latitude, longitude } = req.body;

    const userExists = await User.findOne({ email: req.body.email });
    const userCpfExists = await User.findOne({ cpf: req.body.cpf });

    if (userExists || userCpfExists) {
      return res.status(400).json({ error: 'Usuário existente' });
    }

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    };

    const user = await User.create({
      name,
      password,
      email,
      cpf,
      sexo,
      location,
      address: User.address,
    });

    delete user.password;

    return res.json({
      user,
      token: generateToken({ id: user.id }),
    });
  },
  async update(req, res) {
    const user = User.findById({ id: req.body.id });

    if (!user) {
      return res.status(400).json({ message: 'usuário não encontrado' });
    }

    const {
      password = user.password,
      address = user.address,
      longitude = user.location.coordinates[0],
      latitude = user.location.coordinates[1],
      telFixo = user.tel.res,
      telCelular = user.tel.movel,
    } = req.body;

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    };
    try {
      const updateUser = await User.findOneAndUpdate(
        user,
        { password, address, telFixo, telCelular, location },
        { new: true }
      );

      return res.json(updateUser);
    } catch (err) {
      res.status(400).json({ message: `Erro ao atualizar usuário, ${err}` });
    }

    return res.json(user);
  },
};
