const worksReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_WORKS':
			state = state.concat(action.works);
			return state;
		default:
			return state;
	}
}

export default worksReducer;