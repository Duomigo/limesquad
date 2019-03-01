const FETCH_PROFILE = 'FETCH_PROFILE'

const profileReducer = (state = [], action) => {
	switch (action.type) {
		case FETCH_PROFILE:
			return action.payload;
		default:
			return state;
	}
}

export default profileReducer;