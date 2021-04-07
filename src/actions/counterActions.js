export const increment = (step = 1) => {
  return { type: "INCREMENT", step };
};
export const decrement = (step = 1) => {
  return {
    type: "DECREMENT",
    step,
  };
};
export const asyncIncrease = (step = 1) => {
  return (dispatch) => {
    return setTimeout(() => {
      return dispatch({ type: "INCREMENT", step }, 3000);
    });
  };
};
