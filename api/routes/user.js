const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const User = require('../models/user');

router.post('/signup', (req, res, next) => {
   const user = new user({
    _id: new mongoose.Types.ObjectId(),
    email: req.body.email,
    password: req.body.password,
   });
})


module.exports = router;