import React, { Component } from "react";
import profileImage from "../images/profile.jpg";
import "./Profile.css";

export default class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <img src={profileImage} className="Profile-logo" alt="logo" />
        <p className="Profile-title">Alessio Bianchetti</p>
        <p className="Profile-subtitle">Computer Scientist</p>
        {this.props.children}
      </div>
    );
  }
}
