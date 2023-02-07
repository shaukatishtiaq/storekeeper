const express = require('express');
const router = express.Router();

const {post_to_db, get_all_products_from_db , get_product_by_id, delete_product_by_id} = require('../controller/product');

// GET all products
router.get('/', get_all_products_from_db);

// GET product by id
router.get('/:id', get_product_by_id);

// POST one product
router.post('/', post_to_db);

// TODO POST multiple products
router.post('/multiple', (req, res) => {
    console.log(req.body);
    res.send("Multiple products have been posted");
});

// TODO UPDATE one product
router.patch('/:id', (req, res) => {
    res.send(`Product with id = ${req.params.id} has been updated`);
});

// TODO: UPDATE multiple product

// DELETE ONE PRODUCT
router.delete('/:id', delete_product_by_id)

module.exports = router;