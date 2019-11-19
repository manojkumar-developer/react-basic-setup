/*

Component : DonateForm 

*/
/* ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import StripeCheckout from "react-stripe-checkout";
import Button from "@material-ui/core/Button";
import { dripForm } from "react-drip-form";

/* ****************************** Import Components *************************** */
import TextField from "../../components/FormElements/TextField";
import CheckBox from "../../components/FormElements/CheckBox";

/* ***************************** Import Config ************************* */
import { domainConfig } from "../../config";

/** ****************************** Import Constants *************************** */
import { DonateAdConstants } from "../../constants/common-constants";
import { signInContinueConstants } from "../../constants/common-constants";

class DonateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      userData: {},
      stripe: {},
      isChecked: false,
      token: null
    };
  }

  // componentWillMount = () => {
  //   const userData = Session.get("currentUser");
  //   if (userData && userData._id) {
  //     this.setState({
  //       userData
  //     });
  //   }
  // };

  componentWillReceiveProps = nextProps => {
    if (nextProps && nextProps.configuration) {
      this.setState({
        stripe: nextProps.configuration.stripe
      });
    }
  };

  _handleOpen = () => {
    const { handlers } = this.props;
    const amount = document.getElementById("amount").value;
    if (amount !== "") {
      handlers.onSubmit();
    } else {
      return false;
    }
  };

  _renderButton = () => (
    <div className="align-middle stripesbuttons">
      <Button
        color="primary"
        variant="contained"
        size="medium"
        type="button"
        className="pale-green-bg text-inherit"
        onClick={() => this._handleOpen()}
      >
        <span>{DonateAdConstants.donateForm.donateBtn}</span>
      </Button>
    </div>
  );

  _renderStripe = () => {
    const { userData, amount } = this.state;
    const { stripe } = this.state;
    if (userData && !userData.email)
      return (
        <p className="donate-ad-alert-msg mdm-txt text-danger p-2 box-shadow border">
          {signInContinueConstants.signInMsg.text}
        </p>
      );
    if (!stripe || (stripe && Object.entries(stripe).length === 0)) return null;
    return (
      <div className="align-middle stripesbuttons">
        <StripeCheckout
          className="text-inherit"
          primary
          stripeKey={stripe.publicKey}
          panelLabel="Donate"
          token={this.handleToken}
          email={userData.email}
          description="Earn TrueKarma with every donation!"
          image={`${domainConfig.websiteUrl}image/fav/TK-64x64.png`}
          locale="auto"
          name="TrueKarma.org"
          amount={amount}
          zipCode
        >
          <Button
            color="primary"
            variant="contained"
            size="medium"
            type="button"
            className="pale-green-bg text-inherit"
            onClick={() => this._handleOpen()}
          >
            <span>{DonateAdConstants.donateForm.donateBtn}</span>
          </Button>
        </StripeCheckout>
      </div>
    );
  };

  // setAmount = value => {
  //   if (value) {
  //     const cAmount = parseInt(value, 10) * 100;
  //     this.setState({
  //       amount: cAmount
  //     });
  //     Meteor.setTimeout(function() {
  //       document.getElementById("tempAmount").value = "";
  //     }, 1000);
  //   }
  // };

  renderAmount = () => {
    const { details } = this.props;
    const { amount } = this.state;
    const self = this;
    const donateAmount = details.donateAmount;
    const camount = amount / 100;
    if (!donateAmount) return null;
    return Object.keys(donateAmount).map(function(index) {
      return (
        <div className="col-4 text-center" key={`index${index}`}>
          <div
            role="presentation"
            className={
              camount.toString() === donateAmount[index]
                ? `usd-field p-1 d-block border-r3 border active`
                : `usd-field p-1 d-block border-r3 border`
            }
            onClick={() => self.setAmount(donateAmount[index])}
          >
            <h6 className="mb-1">{`$${donateAmount[index]}`}</h6>
            <h6 className="mb-0">USD</h6>
          </div>
        </div>
      );
    });
  };

  handleToken = token => {
    const { handlers } = this.props;
    if (token.id) {
      const ctoken = token.id;
      this.setState({
        token: ctoken
      });
      handlers.onSubmit();
    }
  };

  // changeAmount = () => {
  //   const self = this;
  //   Meteor.setTimeout(function() {
  //     const amount = document.getElementById("tempAmount").value;
  //     const cAmount = parseInt(amount, 10) * 100;
  //     self.setState({
  //       amount: cAmount
  //     });
  //   }, 500);
  // };

  acceptCondition = () => {
    const checkboxData = document.getElementById("acceptTerms");
    if (checkboxData && checkboxData.checked) {
      this.setState({
        isChecked: true
      });
    } else {
      this.setState({
        isChecked: false
      });
    }
  };

  render() {
    const { amount, token, isChecked } = this.state;
    const { handlers } = this.props;
    return (
      <form onSubmit={handlers.onSubmit} autoComplete="off">
        <div className="form-wrapper cash donate-form pl-0 pl-xl-4 pr-0 border-left">
          <div className="cash-form mb-0">
            <h5 className="mb-4 fw-500">
              {DonateAdConstants.donateForm.title}
            </h5>
            <div className="row mb-3">{this.renderAmount()}</div>
            <div className="row mb-1">
              <div className="col-12 align-middle">
                <TextField
                  required
                  id="amount"
                  name="amount"
                  className="d-none"
                  value={amount}
                />
                <TextField
                  className="custom-textfield width-100"
                  id="tempAmount"
                  name="tempAmount"
                  dollar="true"
                  placeholder="Amount"
                  onKeyPress={this.changeAmount}
                  onChange={this.changeAmount}
                />
                <TextField
                  className="custom-textfield width-100 mt-0"
                  type="text"
                  name="token"
                  id="token"
                  style={{ display: "none" }}
                  value={token}
                />
              </div>
            </div>
          </div>
          <div className="row mb-0">
            <div className="col-md-8 col-sm-8 check-box-grant">
              <CheckBox
                id="acceptTerms"
                name="acceptTerms"
                className="checkbox-box blue"
                style={{ display: "inline-block" }}
                color="primary"
                onClick={() => this.acceptCondition()}
              />
              <span>{DonateAdConstants.donateForm.acceptTerms}</span>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="submit-buttons">
                <div className="d-flex flex-row justify-content-start justify-content-sm-end mb-3 mb-xl-0 mt-3 mt-sm-0">
                  {amount === 0 && !isChecked
                    ? this._renderButton()
                    : this._renderStripe()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

DonateForm.propTypes = {
  handlers: PropTypes.object.isRequired,
  configuration: PropTypes.object.isRequired,
  details: PropTypes.object.isRequired
};

export default dripForm({
  validations: {
    amount: {
      required: true,
      numeric: true
    }
  }
})(DonateForm);
