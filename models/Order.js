const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    product: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: 'Product'
    },
    drink: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: 'Drink'
    },
    total: {
        type: Number,
        required: true
    },
    client: {
        type: String,
        required: true
    },
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
});

// Product es el nombre/etiqueta 
module.exports = mongoose.model('Order', OrderSchema)