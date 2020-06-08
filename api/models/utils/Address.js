const mongoose = require('mongoose');

const Address = new mongoose.Schema({
  cep: {
    type: String,
    required: false,
  },
  logradouro: {
    type: String,
    required: false,
  },
  numero: {
    type: Number,
    required: false,
  },
  estado: {
    type: String,
    required: false,
    enum: [
      'AC',
      'AL',
      'AP',
      'AM',
      'BA',
      'CE',
      'DF',
      'ES',
      'GO',
      'MA',
      'MT',
      'MS',
      'MG',
      'PA',
      'PB',
      'PR',
      'PE',
      'PI',
      'RJ',
      'RN',
      'RS',
      'RO',
      'RR',
      'SC',
      'SP',
      'SE',
      'TO',
    ],
  },
  cidade: {
    type: String,
    required: false,
  },
  bairro: {
    type: String,
    required: false,
  },
  complemento: {
    type: String,
    required: false,
  },
  referencia: {
    type: String,
    required: false,
  },
});

module.exports = Address;
