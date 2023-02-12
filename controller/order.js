const express = require('express');

const Order = require('../model/order');

async function post_order_to_db(req, res, next) {
    
    const data = new Order({
        customer_name : req.body.customer_name,
        payment_method : req.body.payment_method,
        total_amount : req.body.total_amount,  
    });
    
    for(let i=0; i<req.body.items.length; i++) {
        data.items.push(req.body.items[i]);
    }

    try{
        const data_to_save = await data.save();
        res.status(200).json(data_to_save);
    }catch(error) {
        console.log(error);
        res.status(400).json({message : error.message});
    };
}

async function get_all_orders_from_db(req, res, next) {
    try {
        
        const data = await Order.find();
        
        if(data.length === 0) {
            res.json({message : "DB is empty"});
        }
        else {
            res.json(data);
        }

    }catch(error) {
        console.log(error);
        res.status(500).json({message : error.message});
    };
}


module.exports = {post_order_to_db, get_all_orders_from_db};