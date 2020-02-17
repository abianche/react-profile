import React, { Component } from "react";
import donateImage from "../images/btn_donate_LG.gif";
import pixelImage from "../images/pixel.gif";

const noBorder = {
  border: 0
};

export default class DonateButton extends Component {
  render() {
    return (
      <div data-testid="donate-button">
        <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_top"
        >
          <input type="hidden" name="cmd" value="_donations" />
          <input type="hidden" name="business" value="LCVGA76B4AH5U" />
          <input type="hidden" name="currency_code" value="EUR" />
          <input
            type="image"
            src={donateImage}
            style={noBorder}
            name="submit"
            title="PayPal - The safer, easier way to pay online!"
            alt="Donate with PayPal button"
          />
          <img alt="" style={noBorder} src={pixelImage} width="1" height="1" />
        </form>
      </div>
    );
  }
}
