import { useDispatch, useSelector } from "react-redux";
import { asyncIncrease, decrement, increment } from "../actions/counterActions";

function ReduxCounter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count.count);
  const increase = () => {
    dispatch(increment());
  };
  const decrease = () => {
    dispatch(decrement());
  };
  const aIncrease = () => {
    dispatch(asyncIncrease());
  };
  return (
    <>
      <button onClick={increase}> Increment </button>{" "}
      <button onClick={decrease}> Decrement </button> <br />{" "}
      <button onClick={aIncrease}> AsyncIncrement </button> <br />{" "}
      {" Count = " + count}{" "}
    </>
  );
}
export default ReduxCounter;
