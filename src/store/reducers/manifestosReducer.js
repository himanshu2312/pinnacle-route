const manifestosReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_MANIFESTOS':
			state = state.concat(action.manifestos);
			return state;
		default:
			return state;
	}
}

export default manifestosReducer;