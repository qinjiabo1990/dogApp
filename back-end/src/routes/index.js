const express = require('express');
const favouriteDogsRoute = require('./favouriteList')
const router = express.Router();

router.use('/lists', favouriteDogsRoute);

module.exports = router;