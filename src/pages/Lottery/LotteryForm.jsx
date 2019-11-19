/*
   
Component : LotteryForm

*/
/** ****************************** Import packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { dripForm } from "react-drip-form";
import StripeCheckout from "react-stripe-checkout";

/** ****************************** Import Components *************************** */
import TextField from "../../components/FormElements/TextField";
import AutoComplete from "../../components/FormElements/AutoComplete";
import TimeCounter from "../../components/TimeCounter";

/** ****************************** Import Constants *************************** */
import { DonateAdConstants } from "../../constants/common-constants";
import { signInContinueConstants } from "../../constants/common-constants";
import lotteryConstants from "../../constants/lottery-constants";

/* ****************************** Import APIS *************************** */
//import { getCharityListByName } from "/imports/api/charities";

/** ****************************** Import common functions *************************** */
import { displayReadDate } from "../../utils/common";
import { displayAmount } from "../../utils/common";
import { domainConfig } from "../../config";

class LotteryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: null,
      charityList: [],
      charityId: null,
      charitySource: [],
      amount: 0,
      stripe: {},
      userData: {},
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

  _displayItem = () => {
    const { disabled } = this.state;
    const isdisabled = !disabled;
    this.setState({ disabled: isdisabled });
  };

  _displayChecked = () => {
    const { checked } = this.state;
    const ischecked = !checked;
    this.setState({ checked: ischecked });
  };

  _changeAmount = () => {
    const { list } = this.props;
    const length = Object.keys(list).length;
    setTimeout(() => {
      let totalAmount = 0;
      for (let i = 0; i < length; i++) {
        const tempValue = document.getElementById(`pool.${i}.amount`).value;
        if (tempValue !== "") totalAmount += parseInt(tempValue, 10) * 100;
      }
      this.setState({
        amount: totalAmount
      });
    }, 1000);
  };

  _renderItems = () => {
    const { list } = this.props;
    const self = this;
    if (Object.keys(list).length === 0) return null;
    return Object.keys(list).map(function(key) {
      const data = list[key];
      return (
        <tr className="lottery-table-details" key={data._id}>
          <td className="pl-4 align-middle">
            <p className="lottery-name mdm-txt text-muted mb-0">
              {data.poolName}
            </p>
          </td>
          <td className="align-middle">
            <p className="pool mdm-txt text-muted mb-0">{`#${data._id}`}</p>
          </td>
          <td className="align-middle">
            <p className="drawing-date mdm-txt text-muted mb-0">
              {displayReadDate(data.drawingDate)}
            </p>
          </td>
          <td className="align-middle">
            <p className="estimated-jackpot blue mdm-txt text-muted mb-0">
              {displayAmount(data.jackpotAmount)}
            </p>
          </td>
          <td width="15%" className="align-middle error-text relative">
            <TextField
              className="custom-textfield width-50 amount"
              fullWidth
              hintText="Amount"
              placeholder="Amount"
              type="text"
              dollar="true"
              name={`pool.${key}.amount`}
              id={`pool.${key}.amount`}
              onChange={e => self._changeAmount(e)}
              onKeyPress={e => self._changeAmount(e)}
            />
            <TextField
              className="custom-textfield width-100 mt-0"
              type="text"
              name={`pool.${key}.id`}
              id={`pool.${key}.id`}
              style={{ display: "none" }}
              value={data._id}
            />
            <TextField
              className="custom-textfield width-100 mt-0"
              type="text"
              name={`pool.${key}.name`}
              id={`pool.${key}.name`}
              style={{ display: "none" }}
              value={data.poolName}
            />
          </td>
          <td className="align-middle">
            <TimeCounter key={`pool.${key}`} inputDate={data.drawingDate} />
          </td>
        </tr>
      );
    });
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

  _renderButton = () => (
    <div className="align-middle stripesbuttons">
      <Button
        color="primary"
        variant="contained"
        size="medium"
        type="button"
        className="pale-green-bg text-inherit"
      >
        <span>{DonateAdConstants.donateForm.donateBtn}</span>
      </Button>
    </div>
  );

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

  _renderStripe = () => {
    const { userData, amount } = this.state;
    const { stripe } = this.state;
    if (userData && !userData.email)
      return (
        <p className="donate-ad-alert-msg mdm-txt text-danger p-2">
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
          >
            <span>{DonateAdConstants.donateForm.donateBtn}</span>
          </Button>
        </StripeCheckout>
      </div>
    );
  };

  render() {
    const { searchText, charitySource, token, amount, charityId } = this.state;
    const { handlers } = this.props;
    return (
      <form
        className="lottery-form-inner"
        onSubmit={handlers.onSubmit}
        autoComplete="off"
      >
        {/* Disclaimer Text */}
        <div className="lottery-disclaimer-text bg-white border p-4 mb-4 text-left">
          <h4 className="mb-2">{lotteryConstants.disclaimerText.title}</h4>
          <p className="mdm-text mb-0 fw-500">
            {lotteryConstants.disclaimerText.text}
          </p>
        </div>
        {/* Lottery Pool */}
        <div className="lottery-form-wrapper border border-bottom-0">
          <div className="lottery-form-details">
            <table className="table myaccount-dashboard-table mb-0 table-responsive-md">
              <tbody>
                <tr className="table-heading">
                  <th className="align-middle pl-4 border-top-0">
                    <h6 className="th-lottery-name mb-0">
                      {lotteryConstants.lotteryTable.lotteryName}
                    </h6>
                  </th>
                  <th className="align-middle p-3 border-top-0">
                    <h6 className="th-pool mb-0">
                      {lotteryConstants.lotteryTable.poolID}
                    </h6>
                  </th>
                  <th className="align-middle p-3 border-top-0">
                    <h6 className="th-drawing-date mb-0">
                      {lotteryConstants.lotteryTable.nextDrawing}
                    </h6>
                  </th>
                  <th className="align-middle p-3 border-top-0">
                    <h6 className="th-estimated-jackpot mb-0">
                      {lotteryConstants.lotteryTable.estimatedJackpot}
                    </h6>
                  </th>
                  <th className="align-middle p-3 border-top-0">
                    <h6 className="th-donation mb-0">
                      {lotteryConstants.lotteryTable.donation}
                    </h6>
                  </th>
                  <th className="align-middle pl-4 border-top-0">
                    <h6 className="th-cutoff mb-0">
                      {lotteryConstants.lotteryTable.cutOff}
                    </h6>
                  </th>
                </tr>
                {/* Table Datas */}
                {this._renderItems()}
              </tbody>
            </table>
          </div>
        </div>
        {/* Select Charity */}
        <div className="select-charity-box bg-white border border-top-0">
          <div className="row">
            <div className="col-xl-3 col-md-3 align-middle">
              <h5 className="fw-500 lottery-form-title mb-0 mt-2 mb-sm-3 mb-md-0">
                {lotteryConstants.formTitle.title}
              </h5>
            </div>
            <div className="col-xl-7 col-md-7 text-center">
              <div className="align-middle">
                <div className="input-group add-on">
                  <AutoComplete
                    fullWidth
                    className="form-control bg-white b-ra border search-box"
                    hintText="Search charities"
                    name="charityName"
                    id="charityName"
                    listStyle={{ maxHeight: 180, overflow: "auto" }}
                    value={searchText}
                    dataSource={charitySource}
                    handleUpdateInput={value => this._handleCharity(value)}
                    onChange={value => this._handleCharityChange(value)}
                  />
                  <TextField
                    className="custom-textfield width-100 mt-0"
                    type="text"
                    name="charityId"
                    id="charityId"
                    style={{ display: "none" }}
                    value={charityId}
                  />
                  <TextField
                    className="custom-textfield width-100 mt-0"
                    type="text"
                    name="amount"
                    id="amount"
                    style={{ display: "none" }}
                    value={amount}
                  />
                  <TextField
                    className="custom-textfield width-100 mt-0"
                    type="text"
                    name="token"
                    id="token"
                    style={{ display: "none" }}
                    value={token}
                  />

                  <div className="input-group-btn">
                    <button
                      type="button"
                      className="btn btn-default bg-transparent"
                      onClick={this._handleSubmit}
                    >
                      <i className="fa fa-search" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-md-2">
              <div className="submit-buttons">
                <div className="lottery-donate-btn mt-sm-3 mt-md-1 mb-sm-3 mb-md-0">
                  <div className="align-middle">
                    {amount && charityId
                      ? this._renderStripe()
                      : this._renderButton()}
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

LotteryForm.propTypes = {
  handlers: PropTypes.object.isRequired,
  configuration: PropTypes.object.isRequired,
  list: PropTypes.array.isRequired
};

export default dripForm({
  validations: {
    amount: {
      required: true
    }
  }
})(LotteryForm);
