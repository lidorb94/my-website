import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    };
  }

  Increase() {
    console.log("typed");
    this.setState({
      num: this.state.num +1
    });
  }

  Decrease() {
    console.log("typed");
    this.setState({
      num: this.state.num -1
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.Increase.bind(this)}>Increase</button>
        <button onClick={this.Decrease.bind(this)}>Decrease</button>
        <span>{this.state.num}</span>
      </div>
    );
  }
}

export default Counter;

// immutable = אובייקט שלא משתנה