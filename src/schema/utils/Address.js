const mongoose = require('mongoose')

const Address = new mongoose.Schema({
    cep: {
        type: Number,
        required: true
    },
    logradouro: {
        type: String,
        required: true
    },
    numero: {
        type: Number,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    bairro: {
        type: String,
        required: true
    },
    complemento: {
        type: String,
        required: false
    },
    referencia: {
        type: String,
        required: false
    },

})

module.exports = Address;