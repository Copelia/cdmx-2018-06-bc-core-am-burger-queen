const mongoose = require('mongoose');

const SideSchema = new mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    }
});

module.exports = mongoose.model('Side', SideSchema)