import React from "react";
import Menu from "./Menu/Menu";
import SearchBar from "./SearchBar/SearchBar"
import UserMenu from "./UserMenu/UserMenu";
import "./Header.css";
import logo from "../background_red.png"

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <h1>My Website</h1>
        <SearchBar />
        <Menu />
        <UserMenu />
      </header>
    );
  }
}

export default Header;
