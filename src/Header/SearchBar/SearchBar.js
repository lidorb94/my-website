import React from "react";
import SearchBarButton from "./SearchBarButton/SearchBarButton";
import "./SearchBar.css";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="SearchBar">
        <SearchBarButton />
        <input type="text" placeholder="Search.." name="search" />
      </div>
    );
  }
}

export default SearchBar;
