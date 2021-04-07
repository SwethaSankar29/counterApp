import { CounterConstants } from "../constants";

let initialState = {
  count: 0,
};

function CountReducer(state = initialState, action) {
  console.log("Reducer called");
  switch (action.type) {
    case CounterConstants.INCREMENT: {
      console.log("Increment called");
      let step;
      if (action.step) {
        step = action.step;
      } else {
        step = 1;
      }
      return {
        ...state,
        count: state.count + step,
      };
    }
    case CounterConstants.DECREMENT: {
      console.log("Decrement called");
      let step;
      if (action.step) {
        step = action.step;
      } else {
        step = 1;
      }
      return {
        ...state,
        count: state.count - step,
      };
    }
    default:
      return state;
  }
}
export default CountReducer;
