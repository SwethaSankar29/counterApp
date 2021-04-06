import React, { Component } from "react";
import { connect } from "react-redux";
import {
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  RESET_COUNT,
} from "../redux/ActionTypes";

class Counter extends Component {
  incrementCount = () => {
    this.props.dispatch({ type: "INCREMENT_COUNT" });
  };
  decrementCount = () => {
    this.props.dispatch({ type: "DECREMENT_COUNT" });
  };
  reset = () => {
    this.props.dispatch({ type: "RESET_COUNT" });
  };
  render() {
    return (
      <>
        <button onClick={this.incrementCount}> Increment </button>{" "}
        <button onClick={this.decrementCount}> Decrement </button>{" "}
        <button onClick={this.reset}> Reset </button>
        <br />
        {" Value is " + this.props.value}
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    value: state.count,
  };
}
export default connect(mapStateToProps)(Counter);
