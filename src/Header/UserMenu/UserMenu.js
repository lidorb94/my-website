import React from "react";
import UserMenuItem from "./UserMenuItem/UserMenuItem";
import UserMenuButton from "./UserMenuButton/UserMenuButton";
import './UserMenu.css'

class UserMenu extends React.Component {
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
      <div className="UserMenu">
        <UserMenuButton onClick={this.Expand.bind(this)} />
        <nav className={cls}>
          <UserMenuItem>Item1</UserMenuItem>
          <UserMenuItem>Item2</UserMenuItem>
          <UserMenuItem>Item3</UserMenuItem>
        </nav>
      </div>
    );
  }
}

export default UserMenu;
