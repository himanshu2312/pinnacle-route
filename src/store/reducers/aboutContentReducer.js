const aboutContentReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ABOUT_CONTENT':
            state = state.concat(action.aboutContent);
            return state;
        default:
            return state;
    }
}

export default aboutContentReducer;