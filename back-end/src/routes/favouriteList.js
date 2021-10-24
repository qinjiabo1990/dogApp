const express = require('express');
const {
	getAllFavouriteDogs,
	addFavouriteDogs
} = require('../controllers/favouriteList');

const router = express.Router();

router.get('', getAllFavouriteDogs);
router.post('', addFavouriteDogs);

module.exports = router;