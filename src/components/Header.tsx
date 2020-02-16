import React from "react";
import "./Header.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <Router>
        <div className="Header" data-testid="header">
          <div className="Header-bar">
            <Link to="/">
              <b>ALESSIO BIANCHETTI</b>
            </Link>
            <Link to="/projects">
              <b>Projects</b>
            </Link>
          </div>
        </div>
      </Router>
    );
  }
}
