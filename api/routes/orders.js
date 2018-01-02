const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	res.status(200).json({
		message: 'get orders'
	});
});

router.post('/', (req, res, next) => {
	const order = {
		productId: req.body.productId,
		quantity: req.body.quantity
	};
	res.status(201).json({
		message: 'Create orders',
		order: order
	});
});

router.get('/:orderId', (req, res, next) => {
	res.status(200).json({
		message: 'Id orders',
		orderId: req.params.orderId
	});
});

router.delete('/:orderId', (req, res, next) => {
	res.status(200).json({
		message: 'delete orders',
		orderId: req.params.orderId
	});
});

module.exports = router;
