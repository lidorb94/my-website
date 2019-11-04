import React from "react";
import MenuItem from "./MenuItem/MenuItem";
import "./Menu.css";

class Menu extends React.Component {
  render() {
    return (
      <nav className="Menu">
        <MenuItem url="#">Home</MenuItem>
        <MenuItem url="#">About</MenuItem>
        <MenuItem url="#">Contact</MenuItem>
      </nav>
    );
  }
}

export default Menu;
