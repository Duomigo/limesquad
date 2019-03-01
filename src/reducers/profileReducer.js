const FETCH_PROFILE = 'FETCH_PROFILE'

const profileReducer = (state = [], action) => {
	switch (action.type) {
		case FETCH_PROFILE:
			console.log(action)
			return action.payload;
		default:
			return state;
	}
}

export default profileReducer;