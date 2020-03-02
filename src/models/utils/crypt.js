const bcrypt = require('bcryptjs');

const User = require('../User');

module.exports = {
  comparePassword(password) {
    return bcrypt.compare(password, User.password);
  },
};
