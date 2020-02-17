import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Projects.css";
import ProjectsList from "../components/ProjectsList";

export default class Projects extends Component {
  render() {
    return (
      <div className="Projects" data-testid="projects">
        <Header />
        <ProjectsList projects={[{ name: "test", description: "test" }]} />
        <Footer />
      </div>
    );
  }
}
