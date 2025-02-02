const reviewsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_REVIEWS':
            state = state.concat(action.reviews);
            return state;
        default:
            return state;
    }
}

export default reviewsReducer;