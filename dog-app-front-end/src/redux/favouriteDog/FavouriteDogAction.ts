import axios from 'axios'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../store'

export const FETCH_FAVOURITE_DOGS_STATE = 'fetch_favourite_dogs_state'
export const FETCH_FAVOURITE_DOGS_SUCCESS = 'fetch_favourite_dogs_success'
export const FETCH_FAVOURITE_DOGS_FAIL = 'fetch_favourite_dogs_fail'
export const FAVOURITE_BUTTON = 'favourite_button'

interface FetchFavouriteDogsState {
	type: typeof FETCH_FAVOURITE_DOGS_STATE
}

interface FetchFavouriteDogsSuccess {
	type: typeof FETCH_FAVOURITE_DOGS_SUCCESS,
	payload: any
}

interface FetchFavouriteDogsFail {
	type: typeof FETCH_FAVOURITE_DOGS_FAIL,
	payload: any
}

interface FavouriteButton {
	type: typeof FAVOURITE_BUTTON,
	payload: any
}

export type FavouriteDogAction = FetchFavouriteDogsState | FetchFavouriteDogsSuccess | FetchFavouriteDogsFail | FavouriteButton

export const fetchFavouriteDogsStateActionCreator = (): FetchFavouriteDogsState => {
	return {
		type: FETCH_FAVOURITE_DOGS_STATE
	}
}

export const fetchFavouriteDogsSuccessStateActionCreator = (data): FetchFavouriteDogsSuccess => {
	return {
		type: FETCH_FAVOURITE_DOGS_SUCCESS,
		payload: data
	}
}

export const fetchFavouriteDogsFailActionCreator = (error): FetchFavouriteDogsFail => {
	return {
		type: FETCH_FAVOURITE_DOGS_FAIL,
		payload: error
	}
}

export const fetchFavouriteDogsAction = (): ThunkAction<
	void,
	RootState,
	unknown,
	FavouriteDogAction
> => async (dispatch, getState) => {
	dispatch(fetchFavouriteDogsStateActionCreator())
	try {
		const { data } = await axios.get('http://localhost:8000/lists');
		dispatch(fetchFavouriteDogsSuccessStateActionCreator(data));
	} catch (error) {
		dispatch(fetchFavouriteDogsFailActionCreator(error.message));
	}
}

export const postFavouriteDogAction = (dogUrl, dogId): ThunkAction<
	void,
	RootState,
	unknown,
	FavouriteDogAction
> => async (dispatch, getState) => {
	try {
		await axios.post('http://localhost:8000/lists', {
			url: dogUrl,
			id: dogId
		});
		dispatch(fetchFavouriteDogsAction())
	} catch (error) {
		dispatch(fetchFavouriteDogsFailActionCreator(error.message));
	}
}
