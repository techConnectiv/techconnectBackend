const jwt = require('jsonwebtoken');
const Yup = require('yup');
const authConfig = require('../Config/config');
const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const schema = Yup.object().shape({
      login: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.send(400).json({ error: 'Validation fails' });
    }
    const { login , password } = req.body;

    const user = await User.findOne({ where: { login } });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match!' });
    }

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
  }
}