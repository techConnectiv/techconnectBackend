const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const authConfig = require('../Config/config');
const Ong = require('../models/Ong');

module.exports = {
  async store(req, res) {
    const { email, password } = req.body;

    const ong = await Ong.findOne({ email }).select('+password');

    if (!ong) return res.status(400).send({ error: 'User not found' });

    if (!(await bcrypt.compare(password, ong.password))) {
      return res.status(400).send({ error: 'Invalid password' });
    }

    delete ong.password;

    const { id, name } = ong;

    return res.json({
      ong: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  },
};
