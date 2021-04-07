import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import Logger from "../components1/Logger";
import CountReducer from "../reducers/CountReducer";

import UserReducer from "../reducers/userReducer";

const rootReducer = combineReducers({
  count: CountReducer,
  user: UserReducer,
});
let store = createStore(rootReducer, applyMiddleware(Logger, thunk));
export default store;
