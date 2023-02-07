const express = require('express');
const router = express.Router();

// GET all products
router.get('/', (req, res) => {
    res.send("ALL Products have been fetched");
});

// GET product by id
router.get('/:id', (req,res) => {
    res.send("Product has been fetched with id = " + req.params.id);
});

// POST one product
router.post('/', (req, res) => {
 
    res.send("One product has been posted.");
});

// POST multiple products
router.post('/multiple', (req, res) => {
    console.log(req.body);
    res.send("Multiple products have been posted");
});

// UPDATE one product
router.patch('/:id', (req, res) => {
    res.send(`Product with id = ${req.params.id} has been updated`);
});

// TODO: UPDATE multiple product

// DELETE ONE PRODUCT
router.delete('/:id', (req, res) => {
    res.send(`Product with id ${req.params.id} has been deleted`);
});

module.exports = router;