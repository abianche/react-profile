import { Project } from "./project";
import headerImage from "../../images/projects/autoscuola_silveri/header.png";

import * as React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./ProjectPage.css";

export const autoscuola_silveri = new Project({
  name: "AutoscuolaSilveri.it",
  image: headerImage,
  datetime: new Date("2019.04.15"),
  tags: ["Hugo", "Website", "Driving", "School"],
  url: "/projects/autoscuola_silveri"
});

export interface IAutoscuolaSilveriProps {}

export default class AutoscuolaSilveri extends React.Component<
  IAutoscuolaSilveriProps
> {
  public render() {
    return (
      <div className="ProjectPage">
        <Header />
        <h1>{autoscuola_silveri.name}</h1>
        <h4 className="Tags">{autoscuola_silveri.tags.join(" · ")}</h4>
        <div>
          <img
            className="Header"
            src={autoscuola_silveri.image}
            alt={autoscuola_silveri.name.concat(" image")}
          ></img>
        </div>
        <div className="Content">
          <p>
            Website for{" "}
            <a href="https://www.autoscuolasilveri.it/">
              https://www.autoscuolasilveri.it/
            </a>
            .
          </p>
          <h2>About Autoscuola Silveri</h2>
          <p>
            Since 1967 we assist our students in their goal: to drive. Combining
            traditional values with modern style, we have become one of the
            leading driving schools in the Marche region in Italy with over 50
            years of experience in the second generation. Our professional,
            reliable and friendly instructors will make learning to drive as
            simple as possible and make you feel safe at the wheel. We look
            forward to accompanying you on this journey and we are always
            available to answer your questions!
          </p>
          <p>Check out more in their website!</p>
        </div>
        <Footer />
      </div>
    );
  }
}
