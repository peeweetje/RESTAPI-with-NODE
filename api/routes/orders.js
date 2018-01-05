const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const Order = require('../models/orders');
const Product = require('../models/products');

router.get('/', (req, res, next) => {
  Order.find()
    .select('product quantity _id')
    .exec()
    .then((docs) => {
      res.status(200).json({
        count: docs.length,
        orders: docs.map(doc => ({
          _id: doc._id,
          product: doc.product,
          quantity: doc.quantity,
          request: {
            type: 'GET',
            url: `http://localhost:3000/orders/${doc._id}`,
          },
        })),
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

router.post('/', (req, res, next) => {
  // making sure a productId is valid
  Product.findById(req.body.productId)
    .then((product) => {})
    .catch((err) => {
      res.status(500).json({
        message: 'ProductId not found',
        error: err,
      });
    });
  const order = new Order({
    _id: mongoose.Types.ObjectId(),
    quantity: req.body.quantity,
    product: req.body.productId,
  });
  return order.save();
});

router.get('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: 'Id orders',
    orderId: req.params.orderId,
  });
});

router.delete('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: 'delete orders',
    orderId: req.params.orderId,
  });
});

module.exports = router;
