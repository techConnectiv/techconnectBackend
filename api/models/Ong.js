const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Address = require('./utils/Address');
const PointSchema = require('./utils/PointSchema');

const OngSchema = new mongoose.Schema({
  nomeInst: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  cnpj: {
    type: String,
    unique: true,
    required: true,
  },
  dtNasc: {
    type: Date,
    required: false,
  },
  address: Address,
  tel: {
    com: {
      type: Number,
    },
  },
  location: {
    type: PointSchema,
    index: '2dsphere', // eixo X e Y
  },
});

OngSchema.pre('save', async next => {
  const hash = await bcrypt.hash(toString(this.password), 8);
  this.password = hash;
  next();
});

module.exports = mongoose.model('colOng', OngSchema);
