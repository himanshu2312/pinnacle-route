const homeContentReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_HOME_CONTENT':
            state = state.concat(action.homeContent);
            return state;
        default:
            return state;
    }
}

export default homeContentReducer;