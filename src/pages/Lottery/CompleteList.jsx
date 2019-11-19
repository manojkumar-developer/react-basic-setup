/*
   
Component : CompleteList

*/
/** ****************************** Import packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { dripForm } from "react-drip-form";
import { Link } from "react-router-dom";

/** ****************************** Import constants *************************** */
import lotteryConstants from "../../constants/lottery-constants";

/** ****************************** Import common functions *************************** */
import { displayReadDate, displayAmount } from "../../utils/common";

class CompleteList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  displayWinningNumber = numbers => {
    const numberList = numbers.split(" ");
    const length = numberList.length;
    if (length === 0) return null;
    return numberList.map(function(num, key) {
      const isRed = key === length - 1;
      const index = key + 1;
      return (
        <h6
          className={
            isRed
              ? `win-comb red-bg border-r50 p-2 mr-2 text-white `
              : `win-comb border-r50 p-2 mr-2 text-dark`
          }
          key={index}
        >
          {num}
        </h6>
      );
    });
  };

  renderDetails = () => {
    const { list } = this.props;
    const self = this;
    if (Object.keys(list).length === 0) return false;
    return Object.keys(list).map(function(key) {
      const data = list[key];
      return (
        <div
          className="lottery-results hover-box-shadow bg-white border p-3 mb-3"
          key={data._id}
        >
          <Link to={`/lottery/${data._id}`} className="text-dark">
            <h5 className="mb-3">
              {`Pool #`}
              {data._id}
              {`(${data.poolName})`}
            </h5>
            <table className="table myaccount-dashboard-table my-donations cash-grants-details mb-0">
              <tbody>
                <tr className="mt-2">
                  <td
                    width="50%"
                    className="align-middle pl-0 pt-3 pr-0 pb-3"
                  >
                    <p className="th-date mdm-text text-dark mb-0">
                      <span className="fw-600">{lotteryConstants.lotteryTable.drawingDate}</span>
                    </p>
                  </td>
                  <td
                    width="50%"
                    className="align-middle pl-0 pt-3 pr-0 pb-3 bg-white"
                  >
                    <span className="ml-1 mdm-text blue recent-lottery-drawing">
                      {displayReadDate(data.drawingDate)}
                    </span>
                  </td>
                </tr>
                <tr className="mt-2">
                  <td
                    width="50%"
                    className="align-middle pl-0 pt-3 pr-0 pb-3"
                  >
                    <p className="th-date mdm-text text-dark mb-0">
                      <span className="fw-600">{lotteryConstants.lotteryTable.estimatedJackpot}</span>
                    </p>
                  </td>
                  <td
                    width="50%"
                    className="align-middle pl-0 pt-3 pr-0 pb-3 bg-white"
                  >
                    <span className="ml-1 blue recent-lottery-drawing">
                      {displayAmount(data.jackpotAmount)}
                    </span>
                  </td>
                </tr>
                <tr className="mt-2">
                  <td
                    width="50%"
                    className="align-middle pl-0 pt-3 pr-0 pb-3 border-bottom"
                  >
                    <p className="th-date mdm-text text-dark mb-0">
                      <span className="fw-600">
                        {lotteryConstants.lotteryTable.winningAmount}
                      </span>
                    </p>
                  </td>
                  <td
                    width="50%"
                    className="align-middle pl-0 pt-3 pr-0 pb-3 border-bottom"
                  >
                    <span className="ml-1 blue recent-lottery-drawing">
                      {displayAmount(data.winningAmount)}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="winning-combination mt-3">
              <p className="mdm-text mb-1">
                <span className="fw-600 d-block mb-2">
                  {lotteryConstants.lotteryTable.winningNumbers}           
                </span>           
              </p>
              <span className="win-combination d-flex">
                {self.displayWinningNumber(data.winningNumbers)}
              </span>
            </div>
          </Link>
        </div>
      );
    });
  };

  render() {
    return <div className="lottery-results-events">{this.renderDetails()}</div>;
  }
}

CompleteList.propTypes = {
  list: PropTypes.array.isRequired
};

export default dripForm({})(CompleteList);
