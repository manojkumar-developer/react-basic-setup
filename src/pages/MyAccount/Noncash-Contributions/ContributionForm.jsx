/* 

Component : ContributionForm

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { dripForm } from "react-drip-form";
import Button from "@material-ui/core/Button";
import { RadioButton } from "material-ui/RadioButton";

/** ****************************** Import Components *************************** */
import TextField from "../../../components/FormElements/TextField";
import SelectField from "../../../components/FormElements/SelectField";
import DatePicker from "../../../components/FormElements/DatePicker";

/* ***************************** Import Constants ************************* */
import myAccountFormConstants from "../../../constants/my-account-forms";
import { propertyTypeList } from "../../../constants/lists";
import { contributionCategoryList } from "../../../constants/lists";

class ContributionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "less_5000",
      propertyValue: null,
      propertyValueError: null,
      marketValue: null,
      marketValueError: null,
      date: new Date()
    };
  }

  _handleClose = () => {
    const { handleClose } = this.props;
    handleClose();
  };

  _handleType = event => {
    const currentType = event.target.value;
    const { type } = this.state;
    if (type !== currentType) {
      this.setState({
        type: currentType,
        propertyValue: null,
        marketValue: null
      });
    }
  };

  _handlePropertyValue = event => {
    const { type } = this.state;
    event.preventDefault();
    const value = event.target.value;
    let error = null;
    if (type === "less_5000" && value > 5000) {
      error = myAccountFormConstants.propertyLess5000.text;
    } else if (type === "above_5000" && value < 5000) {
      error = myAccountFormConstants.propertyGreater5000.text;
    }
    this.setState({ propertyValueError: error });
  };

  _handleMarketValue = event => {
    const { type } = this.state;
    event.preventDefault();
    const value = event.target.value;
    let error = null;
    if (type === "less_5000" && value > 5000) {
      error = myAccountFormConstants.propertyLess5000.text;
    } else if (type === "above_5000" && value < 5000) {
      error = myAccountFormConstants.propertyGreater5000.text;
    }
    this.setState({ marketValueError: error });
  };

  _handleValidate = () => {
    const { handlers } = this.props;
    const { propertyValueError, marketValueError } = this.state;
    if (propertyValueError || marketValueError) {
      return false;
    }
    handlers.onSubmit();
  };

  render() {
    const { handlers, submitting } = this.props;
    const { propertyValueError, marketValueError } = this.state;
    const { propertyValue, marketValue, type, date } = this.state;
    const self = this;
    return (
      <form onSubmit={handlers.onSubmit} autoComplete="off">
        <div className="form-wrapper noncash-contributions">
          <div className="row mb-0">
            <div className="col-md-6 input-fields mb-2">
              <DatePicker
                className="width-100 date-picker"
                id="date"
                name="date"
                autoOk
                label={myAccountFormConstants.date.label}
                floatingLabelText={myAccountFormConstants.date.FloatingText}
                value={date}
              />
            </div>
            <div className="col-md-6 input-fields mb-2 pt-3">
              <TextField
                required
                className="custom-textfield width-100"
                id="propertyName"
                name="propertyName"
                labeltext={myAccountFormConstants.propertyName.FloatingText}
                label={myAccountFormConstants.propertyName.FloatingText}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-2">
              <SelectField
                required
                className="select-input-fields width-100"
                root={{ background: "red" }}
                id="propertyCategory"
                name="propertyCategory"
                labeltext={myAccountFormConstants.propertyCategory.FloatingText}
                label={myAccountFormConstants.propertyCategory.FloatingText}
                source={contributionCategoryList}
              />
            </div>
            <div className="col-md-6 mb-2 pr-0">
              <div className="align-middle d-flex">
                {Object.keys(propertyTypeList).map(function(key) {
                  const dataValue = propertyTypeList[key].id;
                  return (
                    <div className="col-6" key={dataValue}>
                      <label className="mb-3 pb-2 fs-12" htmlFor="Type">
                        {`Donated property of`}
                      </label>
                      <RadioButton
                        name="Type"
                        value={dataValue}
                        label={propertyTypeList[key].value1}
                        style={{ display: "inline-block" }}
                        onClick={event => self._handleType(event)}
                        checked={type === dataValue}
                      />
                    </div>
                  );
                })}
              </div>
              <TextField
                className="custom-textfield"
                id="propertyType"
                name="propertyType"
                value={type}
                style={{ display: "none" }}
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
          <div className="row">
            <div className="col-md-6 input-fields dollar-value-field mb-2">
              <TextField
                required
                className="custom-textfield width-100"
                id="propertyValue"
                name="propertyValue"
                dollar="true"
                errortext={propertyValueError}
                labeltext={myAccountFormConstants.propertyValue.FloatingText}
                label={myAccountFormConstants.propertyValue.FloatingText}
                onChange={value => this._handlePropertyValue(value)}
                value={propertyValue}
              />
            </div>
            <div className="col-md-6 input-fields dollar-value-field mb-2">
              <TextField
                required
                className="width-100 dollar-field custom-textfield"
                name="marketValue"
                dollar="true"
                labeltext={myAccountFormConstants.marketValue.FloatingText}
                label={myAccountFormConstants.marketValue.FloatingText}
                errortext={marketValueError}
                onChange={value => this._handleMarketValue(value)}
                value={marketValue}
              />
            </div>
          </div>
          <div className={type === "above_5000" ? `row mb-3` : `d-none`}>
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
          <div className="row">
            <div className="col-md-12 input-fields mb-2">
              <TextField
                required
                className="width-100 custom-textfield"
                name="fairMarketValueMethod"
                multiline
                rows="1"
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
          <div className="row">
            <div className="col-md-12 input-fields mb-2">
              <TextField
                className="width-100 custom-textfield"
                name="description"
                rows="1"
                multiline
                rowsMax={10}
                labeltext={myAccountFormConstants.description.FloatingText}
                label={myAccountFormConstants.description.FloatingText}
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
                      className="blue-bg text-inherit"
                      onClick={this._handleValidate}
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

ContributionForm.propTypes = {
  handlers: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default dripForm({
  validations: {
    date: {
      required: true
    },
    propertyName: {
      required: true
    },
    propertyCategory: {
      required: true
    },
    propertyType: {
      required: true
    },
    propertyValue: {
      required: true,
      numeric: true
    },
    marketValue: {
      required: true,
      numeric: true
    },
    fairMarketValueMethod: {
      required: true
    }
  }
})(ContributionForm);
