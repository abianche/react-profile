import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Projects.css";

export default class Projects extends Component {
  render() {
    return (
      <div className="Projects" data-testid="projects">
        <Header />
        <b>Projects</b>
        <Footer />
      </div>
    );
  }
}
