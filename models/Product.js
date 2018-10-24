const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    shift: {
        type: Boolean,
        required: true
    }
});

// Product es el nombre/etiqueta 
module.exports = mongoose.model('Product', ProductSchema)