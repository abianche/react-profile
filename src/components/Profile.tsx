import React, { Component } from "react";
import profileImage from "../images/profile.jpg";
import "./Profile.css";

export default class Profile extends Component {
  render() {
    return (
      <div className="Profile" data-testid="profile">
        <img src={profileImage} className="Profile-logo" alt="logo" />
        <h1 className="Profile-title">Alessio Bianchetti</h1>
        <h2 className="Profile-subtitle">Computer Scientist</h2>
        {this.props.children}
      </div>
    );
  }
}
