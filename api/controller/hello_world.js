const util = require('util');

function hello(req, res) {
  const name = req.swagger.params.name.value || 'stranger';
  const hell = util.format('Hello, %s!', name);
  res.json({ message: hell });
}

module.exports = {
  hell: hello,
};
