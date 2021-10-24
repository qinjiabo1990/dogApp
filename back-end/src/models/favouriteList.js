const list = []

const getAllFavouriteDogs = () => {
	return list
}

const addFavouriteDogs = (url, id) => {
	const dog = {url, id} 
	list.push(dog)
	return list 
}

module.exports = {
	getAllFavouriteDogs,
	addFavouriteDogs
}