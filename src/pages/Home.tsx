import React, { Component } from "react";
import Header from "../components/Header";
import Profile from "../components/Profile";
import { SocialButtons } from "../components/SocialButtons";
import Footer from "../components/Footer";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home" data-testid="home">
        <Header />
        <Profile>
          <SocialButtons />
        </Profile>
        <Footer />
      </div>
    );
  }
}
