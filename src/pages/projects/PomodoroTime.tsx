import { Project } from "./project";
import headerImage from "../../images/projects/pomodoro_time/header.jpg";

import * as React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./ProjectPage.css";

export const pomodoro_time = new Project({
  name: "Pomodoro Time",
  image: headerImage,
  datetime: new Date("2020.02.07"),
  tags: ["Mobile", "Flutter", "Redux"],
  url: "/projects/pomodoro_time"
});

export interface IPomodoroTimeProps {}

export default class PomodoroTime extends React.Component<IPomodoroTimeProps> {
  public render() {
    return (
      <div className="ProjectPage">
        <Header />
        <h1 className="Title">{pomodoro_time.name}</h1>
        <p className="DateTime">
          {pomodoro_time.datetime.toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric"
          })}
        </p>
        <h4 className="Tags">{pomodoro_time.tags.join(" · ")}</h4>
        <div>
          <img
            className="Header"
            src={pomodoro_time.image}
            alt={pomodoro_time.name.concat(" image")}
          ></img>
        </div>
        <div className="Content">
          <p>This is a work in progress app built with Flutter and Redux!</p>
          <p>
            Code is open source. Check it at{" "}
            <a href="https://github.com/abianche/pomodoro_time">
              https://github.com/abianche/pomodoro_time
            </a>
            .
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}
