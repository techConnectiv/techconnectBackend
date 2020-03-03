const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Address = require('./utils/Address');
const PointSchema = require('./utils/PointSchema');

const OngSchema = new mongoose.Schema({
  nomeInst: {
    type: String,
    require: true,
  },
  login: {
    type: String,
    require: true,
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
    required: true,
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
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

module.exports = mongoose.model('Ong', OngSchema);
