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
    const ongEmailExists = await Ong.findOne({ email: req.body.email });

    const ongCnpjExists = await Ong.findOne({
      cnpj: req.body.cnpj,
    });

    const ongNameExists = await Ong.findOne({
      cnpj: req.body.nomeInst,
    });

    if (ongEmailExists || ongCnpjExists || ongNameExists) {
      return res.status(400).json({ error: 'Ong existente' });
    }

    const { nomeInst, password, email, cnpj, latitude, longitude } = req.body;

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    };

    const ong = await Ong.create({
      nomeInst,
      password,
      email,
      cnpj,
      location,
    });

    delete ong.password;

    return res.status(201).json({
      ong,
      token: generateToken({ id: ong.id }),
    });
  },
  // async update(req, res) {},
};
