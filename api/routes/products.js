const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	res.status(200).json({
		message: 'handling GET requests'
	});
});

router.post('/', (req, res, next) => {
	res.status(200).json({
		message: 'handling POST requests'
	});
});

router.get('/:productId', (req, res, next) => {
	const id = req.params.productId;
	if (id === 'special') {
		res.status(200).json({
			message: 'special Id',
			id: id
		});
	} else {
		res.status(200).json({
			message: 'you passed an ID'
		});
	}
});

router.patch('/:productId', (req, res, next) => {
	res.status(200).json({
		message: 'product updated'
	});
});

router.delete('/:productId', (req, res, next) => {
	res.status(200).json({
		message: 'product deleted'
	});
});

module.exports = router;
