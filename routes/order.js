const express = require('express');
const router = express.Router();

const { post_order_to_db, get_all_orders_from_db, get_order_by_id, delete_order_by_id, update_order_by_id } = require('../controller/order');

router.post('/', post_order_to_db);

router.get('/', get_all_orders_from_db);

router.get('/:id', get_order_by_id);

router.delete('/:id', delete_order_by_id);

router.patch('/:id', update_order_by_id);

module.exports = router;