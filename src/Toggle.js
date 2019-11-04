import React from "react";

class Expand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: true
    };
  }

  // another way to do the next function appears in 'Expand.js'
  
  Toggle() {
    if (this.state.content) {
      this.setState({ content: false });
    } else {
      this.setState({ content: true });
    }
  }


  render() {
    return (
      <div>
        <button onClick={this.Toggle.bind(this)}>Toggle</button>
        <span>{this.state.content ? "ON" : "OFF"}</span>
      </div>
    );
  }
}

export default Expand;
