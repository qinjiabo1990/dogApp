/* eslint-disable import/no-anonymous-default-export */
import {
	FETCH_DOGS_STATE,
	FETCH_DOGS_SUCCESS,
	FETCH_DOGS_FAIL,
	SELECT_DOGS_BUTTON,
	DogSelectorAction
} from "./DogSelectorAction";

interface dogSelectorState {
	dogList: any[],
	dogListLoading: boolean,
	error: string | null,
	index: number,
}

const defaultDogSelector: dogSelectorState = {
	dogList: [],
	dogListLoading: true,
	error: null,
	index: 0,
}

export default (state = defaultDogSelector, action: DogSelectorAction) => {
	switch (action.type) {
		case FETCH_DOGS_STATE:
			return { ...state }
		case FETCH_DOGS_SUCCESS:
			return { ...state, dogList: action.payload, dogListLoading: false }
		case FETCH_DOGS_FAIL:
			return { ...state, error: action.payload, dogListLoading: false }
		case SELECT_DOGS_BUTTON:
			return { ...state, index: action.payload }
		default:
			return state;
	}
}