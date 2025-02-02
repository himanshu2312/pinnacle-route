// import api from "../apis";

// export const getSomething = (data) => async(dispatch) => {
//       try {
//             const result = await api.getSomething();
//             const data = result.data[0];
//             const nextQuote = {_id:data._id,author:data.author,content:data.content,isSaved:false}
//             dispatch({ type: 'NEXT', payload: nextQuote });
//       }
//       catch (error) {
//             console.log(console.error)
//       }
// }