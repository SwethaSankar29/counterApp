import "./App.css";
import Counter from "./components/Counter";
import PureComponentExample from "./components/sampleComponent";
import CustomHookAssignment from "./customHooks/CustomHookAssignment";
import HocClassBased from "./components/HocClassBased";
import { Provider } from "react-redux";
import store from "./stores/store";
import { decrement, increment } from "./actions/counterActions";
import ReduxCounter from "./components1/ReduxCounter";
//import store from "./redux/store";

// store.subscribe(() => {
//   console.log(store.getState());
// });
// store.dispatch(increment(10)); //dispatch action
// store.dispatch({ type: "INCREMENT" }); //dispatch object
// store.dispatch(decrement(4));
const App = () => (
  //Assignments
  <div>
    {/* <h1> Counter</h1>
    <Provider store={store}>
      <Counter />
    </Provider>
    <h2> PureComponent</h2>
    <PureComponentExample />
    <h3> CustomHook</h3>
    <CustomHookAssignment />
    <HocClassBased /> */}
    <Provider store={store}>
      <ReduxCounter />
    </Provider>
  </div>
);
export default App;
