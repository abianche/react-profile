import React from "react";
import "./Footer.css";
import DonateButton from "./DonateButton";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="Footer" data-testid="footer">
        <DonateButton />
        <p>
          Made with{" "}
          <span role="img" className="sunburnt_cyclops" aria-label="heart">
            ❤️
          </span>{" "}
          using React
        </p>
        <p>All rights reserverd</p>
        <p>@{new Date().getFullYear()}</p>
      </div>
    );
  }
}
