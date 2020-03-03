const jwt = require('jsonwebtoken');
const Ong = require('../models/Ong');
const authConfig = require('../Config/config');

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}
module.exports = {
  async index(req, res) {
    const ongs = await Ong.find();

    return res.json(ongs);
  },

  async store(req, res) {
    const userExists = await Ong.findOne(
      { where: { email: req.body.email } } || { where: req.body.cnpj } || {
          where: req.body.tel,
        }
    );

    if (userExists) {
      return res.status(400).json({ error: 'Ong existente' });
    }

    const {
      name,
      login,
      password,
      email,
      cnpj,
      dtNasc,
      address,
      tel,
      latitude,
      longitude,
    } = req.body;

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    };

    const ong = await Ong.create({
      name,
      login,
      password,
      email,
      cnpj,
      dtNasc,
      address,
      tel,
      location,
    });

    ong.password = undefined;

    return res.json({
      ong,
      token: generateToken({ id: ong.id }),
    });
  },
  async update(req, res) {},
};
