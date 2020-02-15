import React from "react";
import "./Header.css";

export default class Header extends React.Component {
  render() {
    return (
      <div className="Header" data-testid="header">
        <div className="Header-bar">
          <b>ALESSIO BIANCHETTI</b>
          <b>Projects</b>
        </div>
      </div>
    );
  }
}
