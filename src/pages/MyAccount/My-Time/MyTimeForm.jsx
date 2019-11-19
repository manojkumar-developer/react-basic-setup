/* 

Component : MyTimeForm 

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

/** ****************************** Import Constants *************************** */
import myAccountFormConstants from "../../../constants/my-account-forms";
import { expenseTypeList, timeList } from "../../../constants/lists";

/** ****************************** Import APIS *************************** */
//import { getCharityListByName } from "/imports/api/charities";

class MyTimeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charityList: [],
      charityId: null,
      charitySource: [],
      expensesRow: [{ pocketExpenses: "", expensesType: "", miles: "" }],
      searchText: null,
      date: new Date()
    };
  }

  _handleClose = () => {
    const { handleClose } = this.props;
    handleClose();
  };

  _handlePocketText = (event, id) => {
    const { expensesRow } = this.state;
    const value = event.target.value;
    if (value) {
      expensesRow[id].pocketExpenses = value;
    }
  };

  _handleExpensesType = (event, id) => {
    const { expensesRow } = this.state;
    expensesRow[id].expensesType = event.target.value;
  };

  _handleMilage = (event, id) => {
    const { expensesRow } = this.state;
    if (event.target.value) {
      const miles = event.target.value ? parseInt(event.target.value, 10) : 0;
      const pocketExpenses = miles * 0.14;
      expensesRow[id].miles = miles;
      expensesRow[id].pocketExpenses = parseFloat(pocketExpenses).toFixed(2);
    }
  };

  addItem = () => {
    this.setState(prevState => ({
      expensesRow: [
        ...prevState.expensesRow,
        { pocketExpenses: "", expensesType: "", miles: "" }
      ]
    }));
  };

  removeItems = removeId => {
    const { expensesRow } = this.state;
    const rowId = `etRow${removeId}`;
    document.getElementById(rowId).remove();
    expensesRow.splice(removeId, 1);
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

  renderExpenseRow = () => {
    const { expensesRow } = this.state;
    const displayNone = { display: "none" };
    return expensesRow.map((currentData, idx) => {
      const poketId = `pocketExpenses[${idx}]`;
      const typeId = `expensesType[${idx}]`;
      const milesId = `miles[${idx}]`;
      const rowId = `etRow${idx}`;
      let isDisbaled = true;
      if (currentData.expensesType === "mileage") {
        isDisbaled = false;
      }
      return (
        <div className="row" id={rowId} key={rowId}>
          <div className="col-md-5 col-xs-5 input-fields mb-2">
            <SelectField
              className="select-input-fields width-100"
              name={typeId}
              id={typeId}
              labeltext={myAccountFormConstants.expensesType.FloatingText}
              source={expenseTypeList}
              onChange={value => this._handleExpensesType(value, idx)}
            />
          </div>
          <div className={isDisbaled ? `d-none` : `col-md-3 input-fields mb-2`}>
            <TextField
              className="custom-textfield width-50 mt-1 pt-3"
              fullWidth
              type="text"
              name={milesId}
              id={milesId}
              onChange={value => this._handleMilage(value, idx)}
              label={myAccountFormConstants.miles.label}
              labeltext={myAccountFormConstants.miles.FloatingText}
            />
          </div>
          <div
            className={
              isDisbaled
                ? `col-md-6 input-fields mb-2`
                : `col-md-3 input-fields mb-2`
            }
          >
            <TextField
              className="custom-textfield width-50 mt-1 pt-3"
              fullWidth
              type="text"
              name={poketId}
              id={poketId}
              onChange={value => this._handlePocketText(value, idx)}
              label={myAccountFormConstants.pocketExpenses.label}
              labeltext={myAccountFormConstants.pocketExpenses.FloatingText}
              dollar="true"
              value={currentData.pocketExpenses}
            />
          </div>
          <div className="col-md-1 col-xs-1 pl-1 mt-4 relative">
            <a
              href="#"
              className="my-time-remove-icon"
              onClick={() => this.removeItems(idx)}
              style={idx === 0 ? displayNone : null}
            >
              <i className="fa fa-2x fw-800 fa-minus-circle red" />
            </a>
          </div>
        </div>
      );
    });
  };

  render() {
    const { handlers, submitting } = this.props;
    const { charitySource, charityId } = this.state;
    const { date, searchText } = this.state;
    return (
      <form onSubmit={handlers.onSubmit} autoComplete="off">
        <div className="form-wrapper my-time-form">
          <div className="row">
            <div className="col-md-5 input-fields mb-0">
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
            <div className="col-md-6 input-fields mb-0">
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
          </div>
          <div className="row">
            <div className="col-md-5 input-fields mb-2">
              <SelectField
                required
                className="select-input-fields width-100"
                id="duration"
                name="duration"
                labeltext={myAccountFormConstants.duration.FloatingText}
                source={timeList}
              />
            </div>
            <div className="col-md-6 input-fields mb-2">
              <TextField
                required
                className="custom-textfield width-100 mt-1 pt-3"
                type="text"
                name="activity"
                id="activity"
                label={myAccountFormConstants.activity.label}
                labeltext={myAccountFormConstants.activity.FloatingText}
              />
            </div>
          </div>
          <div className="expenses-loop">{this.renderExpenseRow()}</div>
          <div className="d-flex">
            <div className="col-11" />
            <div className="col-1 relative">
              <a
                href="#"
                className="my-time-add-icon"
                onClick={() => this.addItem()}
              >
                <i className="fa fa-2x fw-800 fa-plus-circle pale-green" />
              </a>
            </div>
          </div>
          <div className="d-flex mb-4">
            <div className="col-11 pl-0">
              <TextField
                className="custom-textfield width-100"
                type="text"
                rows={2}
                multiline
                name="description"
                label={myAccountFormConstants.description.label}
                labeltext={myAccountFormConstants.description.FloatingText}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="submit-buttons mt-1">
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

MyTimeForm.propTypes = {
  handlers: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default dripForm({
  validations: {
    date: {
      required: true
    },
    charityName: {
      required: true
    },
    duration: {
      required: true
    },
    activity: {
      required: true
    },
    "pocketExpenses[0]": {
      required: false,
      numeric: true
    },
    "pocketExpenses[1]": {
      required: false,
      numeric: true
    },
    "pocketExpenses[2]": {
      required: false,
      numeric: true
    },
    "pocketExpenses[3]": {
      required: false,
      numeric: true
    },
    "pocketExpenses[4]": {
      required: false,
      numeric: true
    }
  }
})(MyTimeForm);
