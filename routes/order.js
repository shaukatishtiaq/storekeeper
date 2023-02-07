const express = require('express');
const router = express.Router();

router.post('/', (req,res) => {
    res.send("Order has been posted.");
});

router.get('/', (req, res) => {
    res.send("All orders have been fetched.");
});

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