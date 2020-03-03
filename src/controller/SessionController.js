const jwt = require('jsonwebtoken');
const authConfig = require('../Config/config');
const User = require('../schema/User');
const bcrypt = require('bcryptjs');

module.exports = {
  async store(req, res) {
    const { login, password } = req.body;

    const user = await User.findOne({ login }).select('+password');

    if (!user)
      return res.status(400).send({ error: 'User not found' });

    if (!await bcrypt.compare(password, user.password))
      return res.status(400).send({ error: 'Invalid password' });

    user.password = undefined;

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        login,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  },
};
