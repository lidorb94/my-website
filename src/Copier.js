import React from "react";

class Copier extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        content: ''
    };
  }

  Copy(e){
    this.setState({
        content: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input onKeyUp={this.Copy.bind(this)} />
        <span>{this.state.content}</span>
      </div>
    );
  }
}

export default Copier;
