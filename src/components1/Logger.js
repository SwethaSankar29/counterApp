function Logger({ getState, dispatch }) {
  return (next) => (action) => {
    console.log("middleWare called");
    let modifiedAction;
    if (typeof action == "function") {
      modifiedAction = action;
      console.log("action inside function", action);
    } else {
      modifiedAction = { ...action, millisecondStamp: Date.now() };
      console.log("action", action);
    }

    return next(modifiedAction);
  };
}
export default Logger;
