const express = require('express');

const Product = require('../model/product');

async function post_to_db(req, res, next) {
    const data = new Product({
        batch_no: req.body.batch_no,
        name: req.body.name,
        brand: req.body.brand,
        cost_price: req.body.cost_price,
        mrp: req.body.mrp,
        quantity: req.body.quantity
    });

    try {
        const data_to_save = await data.save();
        res.status(200).json(data_to_save);
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message });
    };
}

// TODO: post_products_to_db

async function get_all_products_from_db(req, res, next) {
    try {

        const data = await Product.find();

        if (data.length === 0) {
            res.json({ message: "DB is empty." });
        }
        else {
            res.json(data);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    };
}

async function get_product_by_id(req, res, next) {
    try {
        const data = await Product.findById(req.params.id);
        if (data === null) {
            res.json({ message: "No product with sent id was found" });
        }
        else {
            res.json(data);
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
}

async function delete_product_by_id(req, res, next) {
    try {
        const data = await Product.findByIdAndDelete(req.params.id);
        if (data === null) {
            res.json({ message: "The item you are trying to access isn't in the database." });
        }
        else {
            res.json({ message: "Product has been deleted." });
        }
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message });
    };

}
async function update_product_by_id(req, res, next) {
    const update = {
        batch_no: req.body.batch_no,
        name: req.body.name,
        brand: req.body.brand,
        cost_price: req.body.cost_price,
        mrp: req.body.mrp,
        quantity: req.body.quantity
    }
    try {
        const data = await Product.findByIdAndUpdate(req.params.id, update, { new: true });
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message });
    }
}


module.exports = { post_to_db, get_all_products_from_db, get_product_by_id, delete_product_by_id, update_product_by_id };