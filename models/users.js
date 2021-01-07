const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    _id: {
        type: String,
        required: true,
    },
    current_balance: { type: Number },
    name: {
        type: String,
        required: true
    },
    phone: { type: String },



});
module.exports = mongoose.model('users', userSchema);