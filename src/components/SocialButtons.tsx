import React from "react";
import "font-awesome/css/font-awesome.min.css";

export class SocialButtons extends React.Component {
  render() {
    return (
      <div>
        <i className="fa fa-envelope" onClick={() => {}}></i>
        <i className="fa fa-github" onClick={() => {}}></i>
        <i className="fa fa-telegram" onClick={() => {}}></i>
        <i className="fa fa-linkedin" onClick={() => {}}></i>
        <i className="fa fa-facebook" onClick={() => {}}></i>
      </div>
    );
  }
}
