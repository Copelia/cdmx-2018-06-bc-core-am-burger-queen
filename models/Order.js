const mongoose = require('mongoose');

const OrderSchema = new.mongoose({
    products: {
        type: [mongoose.Scheme.Types.ObjectId],
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
    },
    side: {
        type: [String]
    }
});

// Product es el nombre/etiqueta 
module.exports = mongoose.model('Order', OrderSchema)