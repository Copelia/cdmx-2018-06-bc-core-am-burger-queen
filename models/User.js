const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
});

// Product es el nombre/etiqueta 
module.exports = mongoose.model('User', UserSchema)