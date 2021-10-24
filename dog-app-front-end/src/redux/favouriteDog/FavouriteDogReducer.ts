/* eslint-disable import/no-anonymous-default-export */
import {
	FETCH_FAVOURITE_DOGS_STATE,
	FETCH_FAVOURITE_DOGS_SUCCESS,
	FETCH_FAVOURITE_DOGS_FAIL,
	FAVOURITE_BUTTON,
	FavouriteDogAction
} from "./FavouriteDogAction";

interface favouriteDogState {
	favouriteList: any[],
	favouriteLoading: boolean,
	error: string | null,
}

const defaultFavouriteDog: favouriteDogState = {
	favouriteList: [],
	favouriteLoading: true,
	error: null,
}

export default (state = defaultFavouriteDog, action: FavouriteDogAction) => {
	switch (action.type) {
		case FETCH_FAVOURITE_DOGS_STATE:
			return { ...state }
		case FETCH_FAVOURITE_DOGS_SUCCESS:
			return { ...state, favouriteList: action.payload, favouriteLoading: false }
		case FETCH_FAVOURITE_DOGS_FAIL:
			return { ...state, error: action.payload, favouriteLoading: false }
		case FAVOURITE_BUTTON:
			return { ...state }
		default:
			return state;
	}
}