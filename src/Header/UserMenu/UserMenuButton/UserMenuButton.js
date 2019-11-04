import React from "react";
import "./UserMenuButton.css";
import userLogo from "../../../user_logo.png"

class UserMenuButton extends React.Component {
  render() {
    return (
      <button className="UserMenuButton" onClick={this.props.onClick}>
        <img src={userLogo} />
      </button>
    );
  }
}

export default UserMenuButton;
