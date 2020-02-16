import React from "react";
import "./Header.css";

export default class Header extends React.Component {
  render() {
    return (
      <div className="Header" data-testid="header">
        <div className="Header-bar">
          <a href="/">
            <b>ALESSIO BIANCHETTI</b>
          </a>
          <a href="/projects">
            <b>Projects</b>
          </a>
        </div>
      </div>
    );
  }
}
