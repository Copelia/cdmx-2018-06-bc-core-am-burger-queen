const mongoose = require('mongoose');

const ExtraSchema = new mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    }
});

module.exports = mongoose.model('Extra', ExtraSchema)