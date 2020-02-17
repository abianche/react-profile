import React, { Component } from "react";
import "./Project.css";

export interface IProjectProps {
  name: string;
  description: string;
}

export default class Project extends Component<IProjectProps> {
  public render() {
    const dataTestId = `project-${this.props.name}`;
    return (
      <div className="Project" data-testid={dataTestId}>
        <h2>{this.props.name}</h2>
        <h3>{this.props.description}</h3>
      </div>
    );
  }
}
