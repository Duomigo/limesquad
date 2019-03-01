import { combineReducers } from 'redux';
import profileReducer from './profileReducer';
import storesReducer from './storesReducer';
import ordersReducer from './ordersReducer';

export default combineReducers({
	profile: profileReducer,
	groceries: storesReducer,
	orders: ordersReducer
})