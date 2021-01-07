const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({

    from: { type: String, required: true },
    to: { type: String, required: true },
    date: { type: Number },
    name: { type: String, required: true },
    price: { type: Number },
    productId: { type: String, required: true },



});
module.exports = mongoose.model('transactions', transactionSchema);