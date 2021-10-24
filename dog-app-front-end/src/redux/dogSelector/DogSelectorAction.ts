import axios from 'axios'
import {ThunkAction} from 'redux-thunk'
import { RootState } from '../store'

export const FETCH_DOGS_STATE = 'fetch_dogs_state'
export const FETCH_DOGS_SUCCESS = 'fetch_dogs_success'
export const FETCH_DOGS_FAIL = 'fetch_dogs_fail'
export const SELECT_DOGS_BUTTON = 'select_dog_button'

interface FetchDogsState {
	type: typeof FETCH_DOGS_STATE
}

interface FetchDogsSuccess {
	type: typeof FETCH_DOGS_SUCCESS,
	payload: any
}

interface FetchDogsFail {
	type: typeof FETCH_DOGS_FAIL,
	payload: any
}

interface SelectDogsButton {
	type: typeof SELECT_DOGS_BUTTON,
	payload: any
}

export type DogSelectorAction = FetchDogsState | FetchDogsSuccess | FetchDogsFail | SelectDogsButton

export const fetchDogsStateActionCreator = ():FetchDogsState => {
	return {
		type: FETCH_DOGS_STATE
	}
}

export const fetchDogsSuccessStateActionCreator = (data):FetchDogsSuccess => {
	return {
		type: FETCH_DOGS_SUCCESS,
		payload: data
	}
}

export const fetchDogsFailActionCreator = (error):FetchDogsFail => {
	return {
		type: FETCH_DOGS_FAIL,
		payload: error
	}
} 

export const getDogsDataAction = ():ThunkAction<
		void, 
		RootState, 
		unknown, 
		DogSelectorAction
	> => async (dispatch, getState) => {
	dispatch(fetchDogsStateActionCreator())
	try {
		const {data} = await axios.get<any>('https://api.thedogapi.com/v1/breeds');
		dispatch(fetchDogsSuccessStateActionCreator(data));
	} catch (error) {
		dispatch(fetchDogsFailActionCreator(error.message));
	}
}

export const getNextDogAction = (index):SelectDogsButton => {
	return {
		type: SELECT_DOGS_BUTTON,
		payload: index
	}
}
