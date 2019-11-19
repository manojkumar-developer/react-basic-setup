/*

Component : PaymentModal

 */
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import StripeCheckout from "react-stripe-checkout";

/** ****************************** Import commonfunctions *************************** */
import { displayAmount } from "../../utils/common";
import { domainConfig } from "../../config";

/* ***************************** Import constants ************************* */
import { regConstants } from "../../constants/registration";

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { handleToken, userEmail, configuration } = this.props;
    if (Object.entries(configuration).length === 0) return null;
    const registrationFee = configuration.stellar.registrationFee;
    const inputRegFee = parseInt(registrationFee, 10) * 100;
    return (
      <div className="info-modal-inner pt-1 d-none">
        <div className="dialog-content-box mt-3 float-right">
          <StripeCheckout
            className="text-inherit"
            primary
            stripeKey={configuration.stripe.publicKey}
            panelLabel={`Pay ${displayAmount(registrationFee)} (One Time Fee)`}
            token={handleToken}
            email={userEmail}
            description="Earn TrueKarma with every donation!"
            image={`${domainConfig.websiteUrl}image/fav/TK-64x64.png`}
            locale="auto"
            name="TrueKarma.org"
            amount={inputRegFee}
            zipCode
          >
            <button
              id="openStripe"
              color="primary"
              variant="contained"
              size="medium"
              type="button"
              className="pale-green-bg text-inherit"
            >
              <span className="mr-1">{regConstants.stellerBtn.text1}</span>
              <span className="mr-1">{displayAmount(registrationFee)}</span>
              <span className="">{regConstants.stellerBtn.text2}</span>
            </button>
          </StripeCheckout>
        </div>
      </div>
    );
  }
}

Payment.defaultProps = {
  userEmail: ""
};

Payment.propTypes = {
  handleToken: PropTypes.func.isRequired,
  userEmail: PropTypes.string,
  configuration: PropTypes.object.isRequired
};

export default Payment;
