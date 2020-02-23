import { Project } from "./project";
import headerImage from "../../images/projects/profile_react/header.png";

import * as React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./ProjectPage.css";

export const profile_react = new Project({
  name: "Profile page with React",
  image: headerImage,
  datetime: new Date("2020.02.23"),
  tags: ["Website", "React"],
  url: "/projects/profile_react"
});

export interface IProfileReactProps {}

export default class ProfileReact extends React.Component<IProfileReactProps> {
  public render() {
    return (
      <div className="ProjectPage">
        <Header />
        <h1 className="Title">{profile_react.name}</h1>
        <p className="DateTime">
          {profile_react.datetime.toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric"
          })}
        </p>
        <h4 className="Tags">{profile_react.tags.join(" · ")}</h4>
        <div>
          <img
            className="Header"
            src={profile_react.image}
            alt={profile_react.name.concat(" image")}
          ></img>
        </div>
        <div className="Content">
          <p>My profile page, that you are browsing, made with React!</p>
          <p>
            Code is open source. Check it at{" "}
            <a href="https://github.com/abianche/react-profile">
              https://github.com/abianche/react-profile
            </a>
          </p>
          .
        </div>
        <Footer />
      </div>
    );
  }
}
