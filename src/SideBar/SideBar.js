import React from "react";
import SideBarItem from "./SideBarItem/SideBarItem";
import "./SideBar.css";

class SideBar extends React.Component {
  render() {
    return (
      <div className="SideBar">
        <SideBarItem url="#"> >> Article 1</SideBarItem>
        <SideBarItem url="#"> >> Article 2</SideBarItem>
        <SideBarItem url="#"> >> Article 3</SideBarItem>
        <SideBarItem url="#"> >> Article 4</SideBarItem>
        <SideBarItem url="#"> >> Article 5</SideBarItem>
        <SideBarItem url="#"> >> Article 6</SideBarItem>
        <SideBarItem url="#"> >> Article 7</SideBarItem>
        <SideBarItem url="#"> >> Article 8</SideBarItem>
        <SideBarItem url="#"> >> Article 9</SideBarItem>
      </div>
    );
  }
}

export default SideBar;