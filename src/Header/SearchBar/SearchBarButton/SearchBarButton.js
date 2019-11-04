import React from "react";
import "./SearchBarButton.css";
import search_icon from "../../../search_icon.png"

class SearchBarButton extends React.Component {
  render() {
    return (
      <button className="SearchBarButton">
        <img src={search_icon} />
      </button>
    );
  }
}

export default SearchBarButton;
