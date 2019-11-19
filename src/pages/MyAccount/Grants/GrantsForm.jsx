/* 

Component : GrantsForm 

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

/** ******************* Import Constants and Common Functions **************** */
import myAccountFormConstants from "../../../constants/my-account-forms";
import { sharedDetails } from "../../../constants/lists";
import { displayAmount } from "../../../utils/common";

/** ****************************** Import APIS *************************** */
//import { getCharityListByName } from "/imports/api/charities";

class GrantsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charityList: [],
      charityId: null,
      charitySource: [],
      searchText: null,
      maxLimitError: null,
      defaultValue: "name_email",
      date: new Date()
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

  _handleMaxLimit = event => {
    const { dashBoardData } = this.props;
    const amount = event.target.value;
    const availableFunds = dashBoardData.unallocated_funds;
    if (availableFunds <= amount) {
      const error = `${displayAmount(availableFunds)} is still unallocated`;
      this.setState({
        maxLimitError: error
      });
    } else {
      this.setState({
        maxLimitError: null
      });
    }
  };

  _setDefaultcharity = () => {
    const charityData = { charityId: 1, charityName: "TrueKarma Charitable" };
    const checkboxData = document.getElementById("checkDefault");
    if (checkboxData && checkboxData.checked) {
      this.setState({
        isChecked: true,
        charityId: charityData.charityId,
        searchText: charityData.charityName
      });
    } else {
      this.setState({
        isChecked: false,
        charityId: null,
        searchText: null
      });
    }
  };

  render() {
    const { handlers, submitting } = this.props;
    const { charitySource, charityId, searchText, defaultValue } = this.state;
    const { maxLimitError, date, isChecked } = this.state;
    return (
      <form onSubmit={handlers.onSubmit} autoComplete="off">
        <div className="form-wrapper grants-form">
          <div className="row">
            <div className="col-md-4" />
            <div className="col-md-8 check-box-grant">
              <CheckBox
                id="checkDefault"
                name="checkDefault"
                className="checkbox-box blue"
                style={{ display: "inline-block" }}
                color="primary"
                onClick={() => this._setDefaultcharity()}
              />
              <span>
                {myAccountFormConstants.checkboxDonateTKCharity.text}
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 input-fields mb-2">
              <DatePicker
                required
                className="width-100 date-picker"
                id="date"
                name="date"
                autoOk
                label={myAccountFormConstants.date.label}
                floatingLabelText={myAccountFormConstants.date.FloatingText}
                value={date}
              />
            </div>
            <div className="col-md-8">
              <AutoComplete
                fullWidth
                required
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
                className={isChecked ? `d-none` : `mb-0`}
              />
              <TextField
                name="scharityName"
                id="scharityName"
                className={
                  isChecked
                    ? `custom-textfield tk-charitable width-100 pt-2 mb-4`
                    : `d-none`
                }
                disabled
                value={searchText}
              />
              <TextField
                className="custom-textfield pt-2 mb-4"
                name="charityId"
                id="charityId"
                style={{ display: "none" }}
                value={charityId}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4 input-fields mb-2">
              <TextField
                required
                className="custom-textfield width-100 mt-1 pt-3"
                id="amount"
                name="amount"
                errortext={maxLimitError}
                onChange={value => this._handleMaxLimit(value)}
                labeltext={myAccountFormConstants.amount.FloatingText}
                dollar="true"
              />
            </div>
            <div className="col-md-8">
              <SelectField
                className="select-input-fields width-100"
                id="sharedDetails"
                name="sharedDetails"
                labeltext={myAccountFormConstants.sharedDetails.FloatingText}
                source={sharedDetails}
                value={defaultValue}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 input-fields mb-2">
              <TextField
                className="custom-textfield width-100"
                name="description"
                multiline
                rowsMax={10}
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
                      disabled={submitting}
                      className="blue-bg text-inherit"
                      onClick={handlers.onSubmit}
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

GrantsForm.propTypes = {
  handlers: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  dashBoardData: PropTypes.object.isRequired
};

export default dripForm({
  validations: {
    date: {
      required: true
    },
    charityName: {
      required: true
    },
    amount: {
      required: true,
      numeric: true
    }
  }
})(GrantsForm);
