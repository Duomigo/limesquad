const FETCH_PROFILE = 'FETCH_PROFILE'

export default (state = [], action) => {
	switch (action.type) {
		case FETCH_PROFILE:
			console.log(action)
			return action.payload;
		default:
			return state;
	}
}