const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: { type: String, require: true },
    owner: { type: String, require: true },
    imgUrl: { type: String, require: true },
    noOfRating: { type: Number },
    price: { type: Number, require: true },
    rating: { type: Number },
    searchKey: { type: String },

});
module.exports = mongoose.model('products', productSchema);