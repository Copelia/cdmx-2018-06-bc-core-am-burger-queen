const mongoose = require('mongoose');

const DrinkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

// Product es el nombre/etiqueta 
module.exports = mongoose.model('Drink', DrinkSchema)