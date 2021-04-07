import { UserConstants } from "../constants";

let initialState = {
  loggedIn: false,
};

function UserReducer(state = initialState, action) {
  console.log("UseReducer called");
  console.log(action);
  switch (action.type) {
    case UserConstants.LOGIN: {
      return {
        ...state,
        loggedIn: true,
      };
    }
    default:
      return state;
  }
}
export default UserReducer;
