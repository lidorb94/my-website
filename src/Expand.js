import React from "react";
import './Expand.css'

class Expand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }

  Expand() {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    const cls = this.state.toggle ? '' : 'Expand-hide'
    return (
      <div>
        <button onClick={this.Expand.bind(this)}>Expand</button>
        <div className={cls}>text text text</div>
      </div>
    );
  }
}

export default Expand;
