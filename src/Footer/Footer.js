import React from "react";
import FooterItem from "./FooterItem/FooterItem";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer">
        <FooterItem url="#">footeritem1</FooterItem>
        <FooterItem url="#">footeritem2</FooterItem>
        <FooterItem url="#">footeritem3</FooterItem>
      </footer>
    );
  }
}

export default Footer;