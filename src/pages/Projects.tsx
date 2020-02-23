import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Projects.css";
import ProjectsList from "../components/ProjectsList";
import * as projects from "./projects";

export default class Projects extends Component {
  render() {
    return (
      <div className="Projects" data-testid="projects">
        <Header />
        <ProjectsList
          projects={[
            projects.pomodoro_time,
            projects.profile_flutter,
            projects.planning_poker,
            projects.autoscuola_silveri
          ]}
        />
        <Footer />
      </div>
    );
  }
}
