import React from "react";
import "./App.css";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import Footer from "./Footer/Footer";
import Counter from "./Counter";
import Expand from "./Expand";
import Copier from "./Copier";
import Toggle from "./Toggle";
import logo from "./background.png"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Counter />
        <Copier />
        <Expand />
        <Toggle /> */}
        <SideBar />
        <Footer />
      </div>
    );
  }
}

export default App;

// first component - Header
