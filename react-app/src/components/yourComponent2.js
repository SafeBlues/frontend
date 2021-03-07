import React from "react";
class yourComponent2 extends React.Component {
  constructor() {
    // default state
    super();
  }
  render() {
    const { someValue } = this.props;
    if (this.props.someValue) {
      return <div>{this.props.someValue}</div>;
    } else {
      return "nothing passed in";
    }
  }
}
export default yourComponent2;
