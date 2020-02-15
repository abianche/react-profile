import React, { Component } from "react";

export default class DonateButton extends Component {
  render() {
    return (
      <div>
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
            src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif"
            // border="0"
            name="submit"
            title="PayPal - The safer, easier way to pay online!"
            alt="Donate with PayPal button"
          />
          <img
            alt=""
            // border="0"
            src="https://www.paypal.com/en_IT/i/scr/pixel.gif"
            width="1"
            height="1"
          />
        </form>
      </div>
    );
  }
}
