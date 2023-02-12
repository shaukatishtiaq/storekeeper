const mongoose = require('mongoose');

const order_schema = new mongoose.Schema({
   
    customer_name : {
    type : String,
    required : true
   },
   items : [
    {
        _id : false,
        "item_id" : String,
        "mrp" : Number,
        "selling_price" : Number,
        "quantity" : Number
    }
   ],
   "payment_method" : String,
   "total_amount" : Number
});

const Order = mongoose.model('Order', order_schema);

module.exports = Order;