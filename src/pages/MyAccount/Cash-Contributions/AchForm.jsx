/*

Component : ACHForm 

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

class AchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
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
                  required
                  className="custom-textfield width-100"
                  id="amount"
                  name="amount"
                  labeltext={myAccountFormConstants.amount.FloatingText}
                  dollar="true"
                  onKeyPress={this.changeState}
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-md-6 input-fields mb-2 pt-3">
                <TextField
                  className="custom-textfield width-100"
                  type="text"
                  id="accountHolderName"
                  name="accountHolderName"
                  label="Account Holder Name"
                  labeltext="Account Holder Name"
                />
              </div>
              <div className="col-md-6 input-fields mb-2 pt-3">
                <TextField
                  className="custom-textfield width-100"
                  type="text"
                  id="bankName"
                  name="bankName"
                  label="Bank Name"
                  labeltext="Bank Name"
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-md-6 input-fields mb-2 pt-3">
                <TextField
                  className="custom-textfield width-100"
                  type="text"
                  id="accountNumber"
                  name="accountNumber"
                  label="Account Number"
                  labeltext="Account Number"
                />
              </div>
              <div className="col-md-6 input-fields mb-2 pt-3">
                <TextField
                  className="custom-textfield width-100"
                  type="text"
                  id="routeNumber"
                  name="routeNumber"
                  label="Route Number"
                  labeltext="Route Number"
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

AchForm.propTypes = {
  handlers: PropTypes.object.isRequired,
  handleCloseACH: PropTypes.func.isRequired,
  submitting:PropTypes.bool.isRequired
};

export default dripForm({
  validations: {
    date: {
      required: true
    },
    amount: {
      numeric: true,
      max: 999999
    },
    accountHolderName: {
      required: true
    },
    accountNumber: {
      required: true,
      numeric: true,
      max: 999999999999
    },
    routeNumber: {
      required: true,
      numeric: true,
      max: 999999999
    },
    bankName: {
      required: true
    }
  }
})(AchForm);
