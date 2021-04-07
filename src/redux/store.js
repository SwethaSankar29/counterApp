import { createStore } from "redux";
import counterReducer from "./Reducer";

export default createStore(
    counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);