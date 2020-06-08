const mongoose = require('mongoose');

const DoacaoSchema = new mongoose.Schema({
  tipo: {
    type: String,
  },
  nomeOng: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
  },
  quantidade: {
    type: Number,
    required: true,
  },
  validade: {
    type: Date,
    required: false,
  },
  comentario: {
    type: String,
  },
});

module.exports = mongoose.model('ColDoacao', DoacaoSchema);
