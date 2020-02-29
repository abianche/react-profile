import { Project } from "./project";
import headerImage from "../../images/projects/profile_flutter/header.png";

import * as React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./ProjectPage.css";

export const profile_flutter = new Project({
  name: "Profile page with Flutter",
  image: headerImage,
  datetime: new Date("2020.01.12"),
  tags: ["Website", "Flutter", "Beta"],
  url: "/projects/profile_flutter"
});

export interface IProfileFlutterProps {}

export default class ProfileFlutter extends React.Component<
  IProfileFlutterProps
> {
  public render() {
    return (
      <div className="ProjectPage">
        <Header />
        <h1 className="Title">{profile_flutter.name}</h1>
        <p className="DateTime">
          {profile_flutter.datetime.toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric"
          })}
        </p>
        <h4 className="Tags">{profile_flutter.tags.join(" · ")}</h4>
        <div>
          <img
            className="Header"
            src={profile_flutter.image}
            alt={profile_flutter.name.concat(" image")}
          ></img>
        </div>
        <div className="Content">
          <p>My profile page, that you are browsing, made with Flutter!</p>
          <p>
            Code is open source. Check it at{" "}
            <a href="https://github.com/abianche/flutter_profile">
              https://github.com/abianche/flutter_profile
            </a>
            {"."}
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}
