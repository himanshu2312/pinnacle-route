const faqsReducer = (state = [], action) => {
      switch (action.type) {
          case 'ADD_FAQS':
              state = state.concat(action.faqs);
              return state;
          default:
              return state;
      }
  }
  
  export default faqsReducer;