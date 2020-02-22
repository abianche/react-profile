import React, { Component } from "react";
import "./Project.css";
import { navigate } from "../utils";

export interface IProjectProps {
  name: string;
  image: string;
  datetime: Date;
  tags: string[];
  url: string;
}

export default class Project extends Component<IProjectProps> {
  public render() {
    const dataTestId = `project-${this.props.name}`;
    return (
      <div className="Project" data-testid={dataTestId}>
        <a href={this.props.url}>
          <h2>{this.props.name}</h2>
        </a>
        <img
          className="Header"
          src={this.props.image}
          alt={this.props.name.concat(" image")}
          onClick={() => navigate(this.props.url)}
        ></img>
      </div>
    );
  }
}
