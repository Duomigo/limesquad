const FETCH_USER = 'FETCH_USER'

export default (state = [], action) => {
	switch (action.type) {
		case FETCH_USER:
			return action.payload;
		default:
			return state;
	}
}