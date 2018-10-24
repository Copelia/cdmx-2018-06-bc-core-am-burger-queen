const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;


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

ObjectId.prototype.valueOf = function () {
	return this.toString();
};