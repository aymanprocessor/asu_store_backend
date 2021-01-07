const mongoose = require('mongoose');

const balanceSchema = mongoose.Schema({
    balance: { type: Number, require: true },
    owner: { type: String, require: true },
    date: { type: Number, require: true },


});
module.exports = mongoose.model('balances', balanceSchema);