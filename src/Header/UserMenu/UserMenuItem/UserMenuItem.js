import React from "react";
import "./UserMenuItem.css";

class UserMenuItem extends React.Component {
  render() {
    return (
      <a href={this.props.url} className="UserMenuItem">
        {this.props.children}
      </a>
    );
  }
}

export default UserMenuItem;
