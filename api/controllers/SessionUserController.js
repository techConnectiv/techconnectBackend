const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const authConfig = require('../Config/config');
const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if (!user) return res.status(400).send({ error: 'User not found' });

    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(400).send({ error: 'Invalid password' });
    }

    delete user.password;

    const { id, name } = user;

    return res.json({
      user: {
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
