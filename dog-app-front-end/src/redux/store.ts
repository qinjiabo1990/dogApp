import { createStore, combineReducers, applyMiddleware } from "redux";
import dogSelectorReducer from './dogSelector/DogSelectorReducer'
import favouriteDogReducer from './favouriteDog/FavouriteDogReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
	dogSelector: dogSelectorReducer,
	favouriteDog: favouriteDogReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>

export default store;
