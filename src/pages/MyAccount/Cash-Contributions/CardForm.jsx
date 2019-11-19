/*

Component : CardForm 

*/
/* ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import StripeCheckout from "react-stripe-checkout";
import Button from "@material-ui/core/Button";
import { dripForm } from "react-drip-form";

/* ****************************** Import Components *************************** */
import TextField from "../../../components/FormElements/TextField";
import DatePicker from "../../../components/FormElements/DatePicker";

/* ***************************** Import Constants ************************* */
import myAccountFormConstants from "../../../constants/my-account-forms";
import { domainConfig } from "../../../config";

/* ****************************** Import APIS *************************** */
//import { insertContributionByCard } from "/imports/api/contributions";

class CardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      date: new Date(),
      userData: {},
      configuration: {}
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
    if (nextProps) {
      this.setState({
        configuration: nextProps.configuration
      });
    }
  };

  _handleClose = () => {
    const { handleClose } = this.props;
    handleClose();
  };

  _handleOpen = () => {
    const { handlers } = this.props;
    const amount = document.getElementById("amount").value;
    if (amount !== "") {
      this._handleClose();
      handlers.onSubmit();
    }
  };

  // _handleToken = token => {
  //   const self = this;
  //   const userId = Session.get("currentUserId");
  //   const { method, handleClose } = this.props;
  //   const { date, amount, userData } = this.state;
  //   const _inputData = {};
  //   _inputData.method = method;
  //   _inputData.date = date;
  //   _inputData.amount = amount;
  //   _inputData.verified = true;
  //   _inputData.walletAddress = userData.walletAddress;
  //   if (token) {
  //     insertContributionByCard(userId, _inputData, token.id).then(
  //       (result, err) => {
  //         if (err) {
  //           self.setState({
  //             errorMsg: myAccountFormConstants.errorMsg.text
  //           });
  //         }
  //       }
  //     );
  //     setTimeout(function() {
  //       handleClose();
  //     }, 3000);
  //   }
  // };

  _changeState = () => {
    const self = this;
    setTimeout(function() {
      const amount = document.getElementById("amount").value;
      const isnumber = parseInt(amount, 10);
      if (amount !== "" && Number.isInteger(isnumber)) {
        const amountCents = parseInt(amount, 10) * 100;
        self.setState({ payEnabled: true, amount: amountCents });
      } else {
        self.setState({ payEnabled: false, amount: true });
      }
    }, 1000);
  };

  _renderStripe = () => {
    const { userData, amount } = this.state;
    const { configuration } = this.state;
    if (Object.entries(configuration).length === 0) return null;
    return (
      <div className="ml-3">
        <div className={amount === 0 ? `align-middle` : `d-none`}>
          <Button
            color="primary"
            variant="contained"
            size="medium"
            type="button"
            className="bg-grey text-dark text-inherit stripe-hidden-btn"
          >
            <span>{myAccountFormConstants.donateBtn.title}</span>
          </Button>
        </div>
        <div
          className={amount === 0 ? `d-none` : `align-middle stripesbuttons`}
        >
          <StripeCheckout
            className="text-inherit"
            primary
            stripeKey={configuration.stripe.publicKey}
            panelLabel="Donate"
            token={this._handleToken}
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
              <span>{myAccountFormConstants.donateBtn.title}</span>
            </Button>
          </StripeCheckout>
        </div>
      </div>
    );
  };

  render() {
    const { handlers } = this.props;
    const { date } = this.state;
    return (
      <form onSubmit={handlers.onSubmit} autoComplete="off">
        <div className="form-wrapper cash">
          <div className="cash-form mb-4">
            <div className="row mb-2">
              <div className="col-md-6 input-fields mb-2">
                <DatePicker
                  required
                  className="width-100 date-picker"
                  id="date"
                  name="date"
                  autoOk
                  label={myAccountFormConstants.amount.FloatingText}
                  floatingLabelText={myAccountFormConstants.date.FloatingText}
                  onChange={this._changeState}
                  value={date}
                />
              </div>
              <div className="col-md-6 input-fields mb-2 pt-3">
                <TextField
                  required
                  className="custom-textfield width-100"
                  id="amount"
                  name="amount"
                  labeltext={myAccountFormConstants.amount.FloatingText}
                  dollar="true"
                  onKeyPress={this._changeState}
                  onChange={this._changeState}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="submit-buttons">
                <div className="d-flex flex-row justify-content-end">
                  <div className="align-middle">
                    <Button
                      color="secondary"
                      variant="contained"
                      size="medium"
                      type="button"
                      className="red-bg text-inherit"
                      onClick={this._handleClose}
                    >
                      {myAccountFormConstants.cancel.label}
                    </Button>
                  </div>
                  {this._renderStripe()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

CardForm.propTypes = {
  handlers: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
  configuration: PropTypes.object.isRequired
};

export default dripForm({
  validations: {
    date: {
      required: true
    },
    amount: {
      required: true,
      numeric: true
    }
  }
})(CardForm);
