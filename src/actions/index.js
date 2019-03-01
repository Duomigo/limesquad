import limesquad from '../apis/limesquad';
import { 
	AsyncStorage
} from 'react-native'

export const fetchProfile = () => async (dispatch) => {
	const token = await AsyncStorage.getItem('userToken', token);
	limesquad.defaults.headers.common = { 'Authorization': `bearer ${token}` }

	try {
		console.log("START FETCHING PROFILES")
		const response = await limesquad.get('/api/users/me');

		dispatch({
			type: 'FETCH_PROFILE',
			payload: response.data
		})
		console.log("DONE FETCHING PROFILES")
	} catch(err) {
		console.log(err)
	}
}

export const fetchOrders = () => async (dispatch) => {
	const token = await AsyncStorage.getItem('userToken', token);
	limesquad.defaults.headers.common = { 'Authorization': `bearer ${token}`}

	try {
		console.log("START FETCHING ORDERS")
		const response = await limesquad.get('/api/orders');

		dispatch({
			type: 'FETCH_ORDERS',
			payload: response.data
		})
		console.log("DONE FETCHING ORDERS")
	} catch(err) {
		console.log(err);
	}
}

export const fetchStores = () => async (dispatch) => {
	const token = await AsyncStorage.getItem('userToken', token);
	limesquad.defaults.headers.common = { 'Authorization': `bearer ${token}`}

	try {
		console.log("START FETCHING STORES")
		const response = await limesquad.get('/api/groceries');

		dispatch({
			type: 'FETCH_STORES',
			payload: response.data
		})
		console.log("DONE FETCHING STORES")
	} catch(err) {
		console.log(err);
	}
}