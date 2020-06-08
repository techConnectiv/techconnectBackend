const Doacao = require('../models/Doacao');

module.exports = {
  async index(req, res) {
    const doacao = await Doacao.find();

    return res.json(doacao);
  },

  // async store(req, res) {

  //   const availableOng = req.body;
  // }
};
