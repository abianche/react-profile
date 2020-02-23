import { Project } from "./project";
import headerImage from "../../images/projects/planning_poker/header.png";
import playstore from "../../images/playstore_badge.png";
import appstore from "../../images/appstore_badge.png";

import * as React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./ProjectPage.css";

export const planning_poker = new Project({
  name: "Planning Poker Online",
  image: headerImage,
  datetime: new Date("2019.05.19"),
  tags: ["Flutter", "Android", "iOS", "Scrum"],
  url: "/projects/planning_poker"
});

export interface IPlanningPokerProps {}

export default class PlanningPoker extends React.Component<
  IPlanningPokerProps
> {
  public render() {
    return (
      <div className="ProjectPage">
        <Header />
        <h1 className="Title">{planning_poker.name}</h1>
        <p className="DateTime">
          {planning_poker.datetime.toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric"
          })}
        </p>
        <h4 className="Tags">{planning_poker.tags.join(" · ")}</h4>
        <div>
          <img
            className="Header"
            src={planning_poker.image}
            alt={planning_poker.name.concat(" image")}
          ></img>
        </div>
        <div className="Content">
          <p>
            Planning Poker (SCRUM) is an Android and iOS application developed
            with Flutter! This is my first released app, get it for FREE on
            Google Play and App Store!
          </p>
          <div className="Center">
            <a
              className="Badge"
              href="https://play.google.com/store/apps/details?id=com.abianche.planningpoker"
            >
              <img src={playstore} alt="PlayStore badge"></img>
            </a>
            <a
              className="Badge"
              href="https://apps.apple.com/us/app/planning-poker-scrum/id1466098334?mt=8"
            >
              <img src={appstore} alt="AppStore badge"></img>
            </a>
          </div>

          <h2>What is Planning Poker?</h2>
          <p>
            Planning poker, also called Scrum poker, is a consensus-based,
            gamified technique for estimating, mostly used to estimate effort or
            relative size of development goals in software development. In
            planning poker, members of the group make estimates by playing
            numbered cards face-down to the table, instead of speaking them
            aloud. The cards are revealed, and the estimates are then discussed.
            By hiding the figures in this way, the group can avoid the cognitive
            bias of anchoring, where the first number spoken aloud sets a
            precedent for subsequent estimates.
          </p>
          <p>
            Check out more at{" "}
            <a href="https://wikipedia.org/wiki/Planning_poker">
              https://wikipedia.org/wiki/Planning_poker
            </a>
            .
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}
