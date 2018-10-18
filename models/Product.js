const mongoose = require('mongoose');

const ProductSchema = new.mongoose({
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
    },
    extra: {
        type: [String]
    },
    side: {
        type: [String]
    }
});

// Product es el nombre/etiqueta 
module.exports = mongoose.model('Product', ProductSchema)