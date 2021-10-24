const FavouriteList = require('../models/favouriteList');

const getAllFavouriteDogs = (req,res) => {
	const favouriteDogs = FavouriteList.getAllFavouriteDogs();
	return res.json(favouriteDogs)
}

const addFavouriteDogs = (req, res) => {
	const {url, id} = req.body;
	const favouriteDogs = FavouriteList.addFavouriteDogs(url, id);
	return res.status(201).json(favouriteDogs)
}

module.exports = {
	getAllFavouriteDogs,
	addFavouriteDogs
}