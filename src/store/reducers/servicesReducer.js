const servicesReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_SERVICES':
			state = state.concat(action.services);
			return state;
		default:
			return state;
	}
}

export default servicesReducer;