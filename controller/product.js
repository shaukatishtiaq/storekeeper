const express = require('express');

const Product = require('../model/product');

async function post_to_db(req,res,next) {
    const data = new Product({
        batch_no : req.body.batch_no,
        name : req.body.name,
        cost_price : req.body.cost_price,
        selling_price : req.body.selling_price,
        quantity : req.body.quantity
    });

    try {
        const data_to_save = await data.save();
        res.status(200).json(data_to_save);
    }
    catch(error) {
        console.error(error);
        res.status(400).json({message: error.message});
    };
};

// TODO: post_products_to_db

async function get_all_products_from_db(req,res,next) {
    try {
        
        const data = await Product.find();
        // TODO: if data.length == 0 , then send different response
        res.json(data);
    } catch(error) {
        console.log(error);
        res.status(500).json({message : error.message});
    };
};

async function get_product_by_id(req, res,next) {
    try {
        const data = await Product.findById(req.params.id);
        
        // if(data === null) {
        //     console.log("null");
        // }
        
        res.json(data);

    }catch(error) {
        console.error(error);
        res.status(500).json({message: error.message});
    };
};

async function delete_product_by_id(req, res, next) {
    
    try {
        
        const data = await Product.findByIdAndDelete(req.params.id);
        res.json(data);
    
    }catch(error) {
        console.error(error);
        res.status(400).json({message : error.message});
    };
    
};

// TODO
// function update_product_by_id(req, res, next) {
    
// };

module.exports = {post_to_db, get_all_products_from_db, get_product_by_id, delete_product_by_id};