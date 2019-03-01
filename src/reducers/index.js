import { combineReducers } from 'redux';
import profileReducer from './profileReducer';
import storesReducer from './storesReducer';

export default combineReducers({
	profile: profileReducer,
	stores: storesReducer
})