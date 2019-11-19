/* 

Component : CashGrantsForm 

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { dripForm } from "react-drip-form";
import Button from "@material-ui/core/Button";

/** ****************************** Import Components *************************** */
import TextField from "../../../components/FormElements/TextField";
import SelectField from "../../../components/FormElements/SelectField";
import DatePicker from "../../../components/FormElements/DatePicker";
import AutoComplete from "../../../components/FormElements/AutoComplete";
import CheckBox from "../../../components/FormElements/CheckBox";

/* ***************************** Import Constants ************************* */
import myAccountFormConstants from "../../../constants/my-account-forms";
import { paymentMethodList } from "../../../constants/lists";

/** ****************************** Import APIS *************************** */
//import { getCharityListByName } from "/imports/api/charities";

class CashGrantsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charityList: [],
      charityId: null,
      charitySource: [],
      searchText: null,
      date: new Date(),
      isDateVarious: true
    };
  }

  _handleClose = () => {
    const { handleClose, handlers } = this.props;
    handlers.onClear();
    handleClose();
  };

  // _handleCharity = value => {
  //   if (value) {
  //     getCharityListByName(value).then(charityList => {
  //       const charitySource = [];
  //       Object.keys(charityList).map(function(key) {
  //         charitySource.push(charityList[key].charityName);
  //         return true;
  //       });
  //       this.setState({ charityList, charitySource, searchText: value });
  //     });
  //   }
  // };

  _handleCharityChange = selectedCharity => {
    const self = this;
    const { charityList } = this.state;
    Object.keys(charityList).map(function(key) {
      if (charityList[key].charityName === selectedCharity) {
        self.setState({ charityId: charityList[key].charityId });
      }
      return true;
    });
  };

  _handleDateVerious = () => {
    const isChecked = document.getElementById("isDateVarious").checked;
    if (isChecked) {
      this.setState({
        isDateVarious: true
      });
    } else {
      this.setState({
        isDateVarious: false
      });
    }
  };

  render() {
    const { handlers, submitting } = this.props;
    const { charitySource, charityId } = this.state;
    const { searchText, date, isDateVarious } = this.state;
    return (
      <form onSubmit={handlers.onSubmit} autoComplete="off">
        <div className="form-wrapper cash-grants-form">
          <div className="row">
            <div className="col-md-3 input-fields mb-2">
              <span className="d-flex mt-4 pt-3 check-various">
                <CheckBox
                  className="pl-0 p-0 pr-0 blue checkbox-box"
                  id="isDateVarious"
                  name="isDateVarious"
                  color="primary"
                  checked={isDateVarious}
                  onClick={() => this._handleDateVerious()}
                />
                {myAccountFormConstants.checkboxVariousDates.text}
              </span>
              <TextField
                required
                className="d-none"
                id="dateVarious"
                name="dateVarious"
                value={isDateVarious}
              />
            </div>
            <div className={isDateVarious ? `d-none` : `col-md-3 pl-0`}>
              <DatePicker
                required
                className="width-100 date-picker"
                id="date"
                name="date"
                autoOk
                label={myAccountFormConstants.date.label}
                floatingLabelText={myAccountFormConstants.date.FloatingText}
                value={date}
                disabled={isDateVarious}
              />
            </div>
            <div
              className={
                isDateVarious ? `col-md-3 input-fields res-pl-0 mb-2 pl-0` : `d-none`
              }
            >
              <TextField
                className="custom-textfield mt-3"
                fullWidth
                id="variousText"
                name="variousText"
                value="Various"
                label={myAccountFormConstants.date.label}
                labeltext={myAccountFormConstants.date.FloatingText}
              />
            </div>
            <div className="col-md-6 input-fields mb-2">
              <AutoComplete
                fullWidth
                label={myAccountFormConstants.charityName.label}
                floatingLabelText={`${
                  myAccountFormConstants.charityName.FloatingText
                } *`}
                name="charityName"
                id="charityName"
                value={searchText}
                dataSource={charitySource}
                handleUpdateInput={value => this._handleCharity(value)}
                onChange={value => this._handleCharityChange(value)}
              />
              <TextField
                className="custom-textfield"
                name="charityId"
                id="charityId"
                style={{ display: "none" }}
                value={charityId}
              />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-6 input-fields mb-2 align-middle">
              <SelectField
                required
                className="select-input-fields custom-textfield width-100"
                id="method"
                name="method"
                labeltext={myAccountFormConstants.method.FloatingText}
                source={paymentMethodList}
              />
            </div>
            <div className="col-md-6 input-fields mb-2 pt-3 align-middle">
              <TextField
                required
                className="custom-textfield"
                fullWidth
                id="amount"
                name="amount"
                label={myAccountFormConstants.amount.label}
                labeltext={myAccountFormConstants.amount.FloatingText}
                onKeyPress={this._handleKeyPress}
                dollar="true"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 input-fields mb-4 align-middle">
              <TextField
                className="custom-textfield width-100"
                name="description"
                multiline
                rowsMax={10}
                label={myAccountFormConstants.description.label}
                labeltext={myAccountFormConstants.description.FloatingText}
              />
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
                      type="reset"
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
                      {myAccountFormConstants.submit.label}
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

CashGrantsForm.propTypes = {
  handlers: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default dripForm({
  validations: {
    dateVarious: {
      required: false
    },
    date: {
      required: false
    },
    charityName: {
      required: true
    },
    method: {
      required: true
    },
    amount: {
      required: true,
      numeric: true
    }
  }
})(CashGrantsForm);
