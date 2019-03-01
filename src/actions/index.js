import limesquad from '../apis/limesquad';
import { 
	AsyncStorage
} from 'react-native'

export const fetchProfile = () => async dispatch => {
	console.log("MAO")
	const token = await AsyncStorage.getItem('userToken', token);
	limesquad.defaults.headers.common = { 'Authorization': `bearer ${token}` }

	try {
		let response = await limesquad.get('/api/users/me');

		dispatch({
			type: 'FETCH_PROFILE',
			payload: response.data
		})
	} catch(err) {
		console.log(err)
	}
}