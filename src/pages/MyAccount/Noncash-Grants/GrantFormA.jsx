/* 

Component : GrantFormA 

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { dripForm } from "react-drip-form";
import Button from "@material-ui/core/Button";

/** ****************************** Import Components *************************** */
import TextField from "../../../components/FormElements/TextField";
import DatePicker from "../../../components/FormElements/DatePicker";
import AutoComplete from "../../../components/FormElements/AutoComplete";
import CheckBox from "../../../components/FormElements/CheckBox";

/* ***************************** Import Constants ************************* */
import myAccountFormConstants from "../../../constants/my-account-forms";

/** ****************************** Import APIS *************************** */
//import { getCharityListByName } from "/imports/api/charities";

class GrantFormA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      charityList: [],
      charityId: null,
      charitySource: [],
      searchText: null,
      date: new Date(),
      isDateVarious: true
    };
  }

  _handleClose = () => {
    const { handleClose } = this.props;
    handleClose();
  };

  _displayItem = () => {
    const { disabled } = this.state;
    const isdisabled = !disabled;
    this.setState({ disabled: isdisabled });
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
    const { charitySource, charityId, searchText } = this.state;
    const { disabled, date, isDateVarious } = this.state;
    return (
      <form onSubmit={handlers.onSubmit} autoComplete="off">
        <div className="form-wrapper noncash-form">
          <div className="donated-less">
            <div className="add-item mb-3">
              <div className="row mb-3">
                <div className="col-md-6 r-mb-3">
                  <small className="mdm-text text-dark">
                    {"Information on donated property"}
                  </small>
                  <TextField
                    required
                    className="custom-textfield width-100 mt-2"
                    type="text"
                    id="propertyName"
                    name="propertyName"
                    label={myAccountFormConstants.propertyName.label}
                    labeltext={myAccountFormConstants.propertyName.FloatingText}
                  />
                </div>
                <div className="col-md-6">
                  <div className="d-flex">
                    <div className="align-middle mr-2 res-mt-1">
                      <small className="mdm-text text-dark">
                        {myAccountFormConstants.checkboxContent.text}
                      </small>
                    </div>
                    <div className="align-middle ml-3 res-mt-1">
                      <CheckBox
                        className="pl-0 p-0 pr-0 blue checkbox-box"
                        id="checkbox"
                        name="checkbox"
                        color="primary"
                        onClick={() => this._displayItem()}
                      />
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-xl-12">
                      <TextField
                        disabled={disabled}
                        className="custom-textfield width-100"
                        type="text"
                        id="vehicleId"
                        name="vehicleId"
                        label={myAccountFormConstants.vehicleId.label}
                        labeltext={
                          myAccountFormConstants.vehicleId.FloatingText
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-0">
                <div className="col-md-6">
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
                    className="custom-textfield width-100"
                    type="text"
                    name="charityId"
                    id="charityId"
                    style={{ display: "none" }}
                    value={charityId}
                    label={myAccountFormConstants.charityName.label}
                    labeltext={myAccountFormConstants.charityName.FloatingText}
                  />
                </div>
                <div className="col-md-3">
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
                </div>
                <div
                  className={
                    isDateVarious ? `d-none` : `col-md-3 res-pl-0 pl-0`
                  }
                >
                  <DatePicker
                    required
                    className="width-100 date-picker pl-0"
                    id="date"
                    name="date"
                    autoOk
                    label={myAccountFormConstants.date.label}
                    floatingLabelText={myAccountFormConstants.date.FloatingText}
                    value={date}
                    disabled={isDateVarious}
                  />
                  <TextField
                    required
                    className="d-none"
                    id="dateVarious"
                    name="dateVarious"
                    value={isDateVarious}
                  />
                </div>
                <div
                  className={
                    isDateVarious
                      ? `col-md-3 input-fields res-pl-0 mb-2 pl-0`
                      : `d-none`
                  }
                >
                  <TextField
                    className="custom-textfield mt-3 pl-0"
                    fullWidth
                    id="variousText"
                    name="variousText"
                    value="Various"
                    label={myAccountFormConstants.date.label}
                    labeltext={myAccountFormConstants.date.FloatingText}
                  />
                </div>
              </div>
              <div className="row mb-0">
                <div className="col-md-6 input-fields mb-2 pt-3">
                  <TextField
                    required
                    className="custom-textfield width-100"
                    type="text"
                    id="howAcquired"
                    name="howAcquired"
                    label={myAccountFormConstants.howAcquired.label}
                    labeltext={myAccountFormConstants.howAcquired.FloatingText}
                  />
                </div>
                <div className="col-md-6 input-fields mb-2">
                  <DatePicker
                    required
                    className="width-100 date-picker"
                    id="dateAcquired"
                    name="dateAcquired"
                    autoOk
                    label={myAccountFormConstants.dateAcquired.label}
                    floatingLabelText={
                      myAccountFormConstants.dateAcquired.FloatingText
                    }
                  />
                </div>
              </div>
              <div className="row mb-0">
                <div className="col-md-6 input-fields mb-2 dollar-value-field">
                  <TextField
                    required
                    className="custom-textfield width-100 dollar-field"
                    id="donorCost"
                    name="donorCost"
                    dollar="true"
                    label={myAccountFormConstants.donorCost.label}
                    labeltext={myAccountFormConstants.donorCost.FloatingText}
                  />
                </div>
                <div className="col-md-6 input-fields mb-2 dollar-value-field">
                  <TextField
                    required
                    className="custom-textfield width-100 dollar-field"
                    type="text"
                    name="marketValue"
                    dollar="true"
                    label={myAccountFormConstants.marketValue.label}
                    labeltext={myAccountFormConstants.marketValue.FloatingText}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 input-fields mb-2">
                  <TextField
                    required
                    className="width-100 custom-textfield market-value-method-field"
                    name="fairMarketValueMethod"
                    multiline
                    rows="2"
                    rowsMax={10}
                    labeltext={
                      myAccountFormConstants.fairMarketValueMethod.FloatingText
                    }
                    label={
                      myAccountFormConstants.fairMarketValueMethod.FloatingText
                    }
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-12 input-fields mb-2">
                  <TextField
                    className="custom-textfield width-100"
                    id="description"
                    name="description"
                    multiline
                    rows="2"
                    rowsMax={10}
                    label={myAccountFormConstants.description.label}
                    labeltext={myAccountFormConstants.description.FloatingText}
                  />
                </div>
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

GrantFormA.propTypes = {
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
    propertyName: {
      required: true
    },
    howAcquired: {
      required: true
    },
    donorCost: {
      required: true,
      numeric: true,
      max: 5000
    },
    marketValue: {
      required: true,
      numeric: true,
      max: 5000
    },
    fairMarketValueMethod: {
      required: true
    }
  }
})(GrantFormA);
