const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	res.status(200).json({
		message: 'get orders'
	});
});

router.post('/', (req, res, next) => {
	res.status(200).json({
		message: 'Create orders'
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
