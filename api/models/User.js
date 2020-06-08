/* eslint-disable func-names */
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Address = require('./utils/Address');
const PointSchema = require('./utils/PointSchema');

const UserSchema = new mongoose.Schema({
  name: {
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
  cpf: {
    type: String,
    unique: true,
    required: true,
  },
  dtNasc: {
    type: Date,
    required: false,
  },
  sexo: {
    type: String,
    enum: ['M', 'F', 'OUTROS'],
    required: true,
  },
  address: Address,
  tel: {
    res: {
      type: Number,
    },
    movel: {
      type: Number,
      required: false,
    },
  },
  location: {
    type: PointSchema,
    index: '2dsphere', // eixo X e Y
  },
});

UserSchema.pre('save', async function(next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

module.exports = mongoose.model('colUser', UserSchema);
