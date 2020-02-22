import React, { Component } from "react";
import "./ProjectsList.css";
import Project, { IProjectProps } from "./Project";

export interface IProjectsListProps {
  projects: IProjectProps[];
}

export default class ProjectsList extends Component<IProjectsListProps> {
  public render() {
    const projects = this.props.projects.map(project => (
      <Project
        name={project.name}
        image={project.image}
        datetime={project.datetime}
        tags={project.tags}
        url={project.url}
      ></Project>
    ));
    return (
      <div className="ProjectsList" data-testid="projects-list">
        <h1>Projects</h1>
        {projects}
      </div>
    );
  }
}
