/*

Component : CardConnectForm 

*/
/* ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { dripForm } from "react-drip-form";

/* ****************************** Import Components *************************** */
import TextField from "../../../components/FormElements/TextField";
import DatePicker from "../../../components/FormElements/DatePicker";

/* ***************************** Import Constants ************************* */
import myAccountFormConstants from "../../../constants/my-account-forms";

/* ****************************** Import APIS *************************** */
//import { insertContributionByCard } from "/imports/api/contributions";

class CardConnectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  // componentWillMount = () => {
  //   const userData = Session.get("currentUser");
  //   if (userData) {
  //     this.setState({ userData });
  //   }
  // };

  _handleClose = () => {
    const { handleCloseACH } = this.props;
    handleCloseACH();
  };

  // onToken = token => {
  //   const self = this;
  //   const userId = Session.get("currentUserId");

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
  //     Meteor.setTimeout(function() {
  //       handleClose();
  //     }, 3000);
  //   }
  // };

  changeState = () => {
    const self = this;
    setTimeout(function() {
      const amount = document.getElementById("amount").value;
      if (amount !== "") {
        const amountCents = parseInt(amount, 10) * 100;
        self.setState({ payEnabled: true, amount: amountCents });
      }
    }, 1000);
  };

  render() {
    const { handlers, submitting } = this.props;
    const { date } = this.state;
    return (
      <form onSubmit={handlers.onSubmit} autoComplete="off">
        <div className="form-wrapper cash">
          <div className="cash-form mb-4">
            <div className="row mb-2">
              <div className="col-md-6 input-fields mb-2">
                <DatePicker
                  className="width-100 date-picker"
                  id="date"
                  name="date"
                  autoOk
                  label={myAccountFormConstants.date.FloatingText}
                  floatingLabelText={myAccountFormConstants.date.FloatingText}
                  value={date}
                />
              </div>
              <div className="col-md-6 input-fields mb-2 pt-3">
                <TextField
                  className="custom-textfield width-100"
                  type="text"
                  name="cardNumber"
                  label="Card number"
                  labeltext="Card number"
                  placeholder="XXXX XXXX XXXX XXX"
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-md-6 input-fields mb-2 pt-3">
                <TextField
                  className="custom-textfield width-100"
                  type="text"
                  name="cardHolderName"
                  label="Card holder name"
                  labeltext="Card holder Name"
                />
              </div>
              <div className="col-md-6 input-fields mb-2 pt-3">
                <TextField
                  className="custom-textfield width-100"
                  type="text"
                  name="expiryDate"
                  label="Expiry date"
                  labeltext="Expiry date"
                  placeholder="MMDD"
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-md-6 input-fields mb-2 pt-3">
                <TextField
                  className="custom-textfield width-100"
                  type="text"
                  name="cvv"
                  label="cvv"
                  labeltext="cvv"
                  placeholder="XXX"
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
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="submit-buttons">
                <div className="d-flex flex-row justify-content-end">
                  <div className="align-middle mr-3">
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
                  <div className="align-middle">
                    <Button
                      color="primary"
                      variant="contained"
                      size="medium"
                      type="button"
                      className="blue-bg text-inherit"
                      onClick={handlers.onSubmit}
                      disabled={submitting}
                    >
                      {"Pay"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

CardConnectForm.propTypes = {
  handlers: PropTypes.object.isRequired,
  handleCloseACH: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default dripForm({
  validations: {
    date: {
      required: true
    },
    cardHolderName: {
      required: true
    },
    cardNumber: {
      required: true,
      numeric: true,
      max: 9999999999999999
    },
    expiryDate: {
      required: true
    },
    cvv: {
      required: true,
      numeric: true,
      max: 999
    },
    amount: {
      required: true,
      numeric: true,
      max: 999999
    }
  }
})(CardConnectForm);
