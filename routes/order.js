const express = require('express');
const router = express.Router();

const {post_order_to_db, get_all_orders_from_db} = require('../controller/order');

router.post('/', post_order_to_db);

router.get('/', get_all_orders_from_db);

router.get('/:id', (req,res) => {
    res.send(`Order with id ${req.params.id} has been fetched`);
});

router.get('/:name', (req,res) => {
    res.send(`Order with client name is ${req.params.name} has been fetched.`);
});

router.patch('/:id', (req,res) => {
    res.send(`Order with id = ${req.params.id} has been updated.`);
});

router.delete('/:id', (req,res) => {   
    res.send(`Order with id = ${req.params.id} has been deleted.`);
});

module.exports = router;