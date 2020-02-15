import React from "react";
import { partialRight } from "ramda";
import { IconButton } from "@material-ui/core";
import {
  Email,
  GitHub,
  Telegram,
  LinkedIn,
  Facebook
} from "@material-ui/icons";
import "./SocialButtons.css";
import "font-awesome/css/font-awesome.min.css";

export class SocialButtons extends React.Component {
  openPage(
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    url: string
  ) {
    window.open(url, "_blank");
  }

  render() {
    return (
      <div data-testid="social-buttons">
        <IconButton
          className="SocialButton"
          data-testid="social-button"
          color="primary"
          aria-label="email"
          onClick={partialRight(this.openPage, [
            "mailto:alessio.bianchetti@gmail.com"
          ])}
        >
          <Email fontSize="large" />
        </IconButton>
        <IconButton
          className="SocialButton"
          data-testid="social-button"
          color="primary"
          aria-label="github"
          onClick={partialRight(this.openPage, ["https://github.com/abianche"])}
        >
          <GitHub fontSize="large" />
        </IconButton>
        <IconButton
          className="SocialButton"
          data-testid="social-button"
          color="primary"
          aria-label="telegram"
          onClick={partialRight(this.openPage, ["https://t.me/abianche"])}
        >
          <Telegram fontSize="large" />
        </IconButton>
        <IconButton
          className="SocialButton"
          data-testid="social-button"
          color="primary"
          aria-label="linkedin"
          onClick={partialRight(this.openPage, [
            "https://www.linkedin.com/in/alessio-bianchetti"
          ])}
        >
          <LinkedIn fontSize="large" />
        </IconButton>
        <IconButton
          className="SocialButton"
          data-testid="social-button"
          color="primary"
          aria-label="facebook"
          onClick={partialRight(this.openPage, [
            "https://www.facebook.com/alessio.bianchetti"
          ])}
        >
          <Facebook fontSize="large" />
        </IconButton>
      </div>
    );
  }
}
