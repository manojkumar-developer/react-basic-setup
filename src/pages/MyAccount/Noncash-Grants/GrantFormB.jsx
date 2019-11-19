/* 

Component : GrantFormB 

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { dripForm } from "react-drip-form";
import Button from "@material-ui/core/Button";

/** ****************************** Import Components *************************** */
import TextField from "../../../components/FormElements/TextField";
import RadioButton from "../../../components/FormElements/RadioButton";
import DatePicker from "../../../components/FormElements/DatePicker";
import FieldGroup from "../../../components/FormElements/FieldGroup";
import AutoComplete from "../../../components/FormElements/AutoComplete";
import CheckBox from "../../../components/FormElements/CheckBox";

/* ***************************** Import Constants ************************* */
import myAccountFormConstants from "../../../constants/my-account-forms";
import { grantsCategoryList } from "../../../constants/lists";

/** ****************************** Import APIS *************************** */
//import { getCharityListByName } from "/imports/api/charities";

class NoncashFormB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      charityList: [],
      charityId: null,
      charitySource: [],
      searchText: null,
      date: new Date(),
      selectedCategory: null,
      isDateVarious: true
    };
  }

  _handleClose = () => {
    const { handleClose } = this.props;
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

  _handleCheck = category => {
    if (category === "vehicles") {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
    this.setState({ selectedCategory: category });
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
    const self = this;
    const { handlers, submitting } = this.props;
    const { charitySource, charityId, isDateVarious } = this.state;
    const { date, searchText, selectedCategory, disabled } = this.state;
    return (
      <form onSubmit={handlers.onSubmit} autoComplete="off">
        <div className="form-wrapper noncash-form">
          <div className="donated-more">
            <div className="property-type mb-3">
              <div className="row mb-0">
                <div className="col-md-12 mb-3 mt-3">
                  <h6 className="text-dark fw-400 ml-3">
                    {myAccountFormConstants.contributionCategoryList.title}
                  </h6>
                </div>
                <div className="col-md-12 check-box-label grantform-b mb-0">
                  <FieldGroup
                    className="pl-3"
                    name="propertyCategory2"
                    label={myAccountFormConstants.propertyCategory.label}
                  >
                    <div className="row">
                      {Object.keys(grantsCategoryList).map(function(key) {
                        const dataValue = grantsCategoryList[key].id;
                        return (
                          <div
                            className="col-xl-4 col-sm-6 col-12"
                            key={dataValue}
                          >
                            <RadioButton
                              name="propertyCategory"
                              value={dataValue}
                              labeltext={grantsCategoryList[key].value}
                              color="primary"
                              onChange={() => self._handleCheck(dataValue)}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </FieldGroup>
                  <TextField
                    className="d-none"
                    type="text"
                    id="propertyCategory"
                    name="propertyCategory"
                    value={selectedCategory}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="add-item mb-3">
            <div className="row mb-0">
              <div className="col-md-6 pt-3 mb-3">
                <TextField
                  required
                  className="custom-textfield width-100"
                  type="text"
                  id="propertyName"
                  name="propertyName"
                  label={myAccountFormConstants.propertyName.label}
                  labeltext={myAccountFormConstants.propertyName.FloatingText}
                />
              </div>
              <div className="col-md-6 pt-3 mb-3">
                <TextField
                  disabled={selectedCategory === "vehicles" ? disabled : true}
                  className="custom-textfield width-100"
                  type="text"
                  id="vehicleId"
                  name="vehicleId"
                  label={myAccountFormConstants.vehicleId.label}
                  labeltext={myAccountFormConstants.vehicleId.FloatingText}
                />
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
                  isDateVarious ? `d-none` : `col-md-3 pl-0 res-pl-0 mb-0`
                }
              >
                <DatePicker
                  required
                  className="width-100 date-picker"
                  type="text"
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
                  isDateVarious ? `col-md-3 pl-0 isDateVarious` : `d-none`
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
            </div>
            <div className="row mb-0">
              <div className="col-md-12 pt-3 mb-3">
                <TextField
                  className="custom-textfield width-100"
                  name="propertySummary"
                  label={myAccountFormConstants.propertySummary.label}
                  labeltext={
                    myAccountFormConstants.propertySummary.FloatingText
                  }
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6 input-fields mb-2">
                <DatePicker
                  required
                  className="width-100 date-picker"
                  name="dateAcquired"
                  autoOk
                  label={myAccountFormConstants.dateAcquired.label}
                  floatingLabelText={
                    myAccountFormConstants.dateAcquired.FloatingText
                  }
                />
              </div>
              <div className="col-md-6 input-fields mb-2 pt-3">
                <TextField
                  required
                  className="custom-textfield width-100"
                  type="text"
                  name="howAcquired"
                  label={myAccountFormConstants.howAcquired.label}
                  labeltext={myAccountFormConstants.howAcquired.FloatingText}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6 input-fields mb-2">
                <TextField
                  required
                  className="custom-textfield width-100 dollar-field"
                  type="text"
                  id="donorCost"
                  name="donorCost"
                  dollar="true"
                  label={myAccountFormConstants.donorCost.label}
                  labeltext={myAccountFormConstants.donorCost.FloatingText}
                />
              </div>
              <div className="col-md-6 input-fields mb-2">
                <TextField
                  className="custom-textfield width-100 dollar-field"
                  type="text"
                  name="amountBargain"
                  dollar="true"
                  label={myAccountFormConstants.amountBargain.label}
                  labeltext={myAccountFormConstants.amountBargain.FloatingText}
                />
              </div>
            </div>
            <div className="row mb-0">
              <div className="col-md-6 input-fields mb-2 dollar-value-field">
                <TextField
                  required
                  className="custom-textfield width-100 dollar-field"
                  type="text"
                  name="amountClaimed"
                  dollar="true"
                  label={myAccountFormConstants.amountClaimed.label}
                  labeltext={myAccountFormConstants.amountClaimed.FloatingText}
                />
              </div>
              <div className="col-md-6 input-fields mb-2 dollar-value-field">
                <TextField
                  required
                  className="custom-textfield width-100 dollar-field"
                  type="text"
                  id="marketValue"
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
                  className="width-100 custom-textfield"
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

NoncashFormB.propTypes = {
  handlers: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default dripForm({
  validations: {
    propertyCategory: {
      required: true
    },
    date: {
      required: true
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
      min: 5000
    },
    amountClaimed: {
      required: true,
      numeric: true
    },
    marketValue: {
      required: true,
      numeric: true,
      min: 5000
    },
    amountBargain: {
      required: false,
      numeric: true
    },
    fairMarketValueMethod: {
      required: true
    }
  }
})(NoncashFormB);
