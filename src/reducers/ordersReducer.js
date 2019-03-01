const FETCH_ORDERS = 'FETCH_ORDERS'

const ordersReducer = (state=[], action) => {
	switch (action.type) {
		case FETCH_ORDERS:
			console.log("Payload is:")
			console.log(action)
			return action.payload;
		default:
			return state;
	}
}

export default ordersReducer;