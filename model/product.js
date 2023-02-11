const mongoose = require('mongoose');

const product_schema = new mongoose.Schema({
    batch_no : {
        type : Number,
        required : true
    },
    name : {
        type : String,
        required : true,
        lowercase : true
    },
    brand: {
        type: String,
        required : true,
        lowercase: true
    },
    cost_price: {
        type: Number,
        required: true,
        min : 0
    },
    selling_price: {
        type: Number,
        required: true,
        min : 0
    },
    quantity : {
        type : Number,
        required : true,
        min : 0
    }
});

const Product = mongoose.model('Product', product_schema);

module.exports = Product;