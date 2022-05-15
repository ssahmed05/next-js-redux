
// export const depositMoney = (amount) => {
//   return (dispatch) => {
//     dispatch({
//       type: 'deposit',
//       payload: amount
//     });
//   }
// }
export const depositMoney = (amount) => {
    return {
      type: 'deposit',
      payload: amount
    };
}

export const withDrawMoney = (amount) => {
  return {
      type: 'withDraw',
      payload: amount
    };
  
}