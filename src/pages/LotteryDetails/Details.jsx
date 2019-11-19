/*

Component : LotteryDetails

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";

/** ****************************** Import constants *************************** */
import lotteryConstants from "../../constants/lottery-constants";

/** ****************************** Import common functions *************************** */
import { displayAmount } from "../../utils/common";

class Details extends Component {
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
          key={index}
          className={
            isRed
              ? `win-comb red-bg border-r50 p-2 mr-2 text-white `
              : `win-comb border-r50 p-2 mr-2 text-dark`
          }
        >
          {num}
        </h6>
      );
    });
  };

  _lotteryDetails = () => {
    const { details } = this.props;
    if (details && Object.keys(details).length === 0) return null;
    return (
      <tr className="lottery-table-details">
        <td className="pl-4 align-middle">
          <p className="lottery-name mdm-txt text-muted mb-0">
            {`${details.poolName}`}
          </p>
        </td>
        <td className="align-middle">
          <p className="pool mdm-txt text-muted mb-0">{`#${details._id}`}</p>
        </td>
        <td className="align-middle">
          <p className="estimated-jackpot blue text-muted mb-0">
            {displayAmount(details.jackpotAmount)}
          </p>
        </td>
        <td className="align-middle">
          <p className="no-of-tickets blue mdm-txt text-muted mb-0">
            {details.nofTickets}
          </p>
        </td>
        <td className="align-middle">
          <p className="no-of-winning-tickets blue mdm-txt text-muted mb-0">
            {details.nofwinningTickets}
          </p>
        </td>
        <td className="align-middle">
          <p className="no-of-winning-tickets blue text-muted mb-0">
            {displayAmount(details.winningAmount)}
          </p>
        </td>
        <td>
          <div className="winning-numbers">
            <span className="win-combination d-flex">
              {this.displayWinningNumber(details.winningNumbers)}
            </span>
          </div>
        </td>
      </tr>
    );
  };

  render() {
    return (
      <div className="row">
        {/* Left Side */}
        <div className="col-xl-12 col-lg-12 col-md-12">
          <div className="lottery-form-wrapper border border-bottom-0">
            <div className="lottery-form-details">
              <table className="table myaccount-dashboard-table mb-0 table-responsive-lg">
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
                      <h6 className="th-estimated-jackpot mb-0">
                        {lotteryConstants.lotteryTable.estimatedJackpot}
                      </h6>
                    </th>
                    <th className="align-middle p-3 border-top-0">
                      <h6 className="th-no-of-tickets mb-0">
                        {lotteryConstants.lotteryTable.noOfTickets}
                      </h6>
                    </th>
                    <th className="align-middle p-3 border-top-0">
                      <h6 className="th-total-winning-tickets mb-0">
                        {lotteryConstants.lotteryTable.noOfWinningTickets}
                      </h6>
                    </th>
                    <th className="align-middle p-3 border-top-0">
                      <h6 className="th-winning-amount mb-0">
                        {lotteryConstants.lotteryTable.winningAmount}
                      </h6>
                    </th>
                    <th className="align-middle p-3 border-top-0">
                      <h6 className="th-donation mb-0">
                        {lotteryConstants.lotteryTable.winningNumbers}
                      </h6>
                    </th>
                  </tr>
                  {/* Table Datas */}
                  {this._lotteryDetails()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  details: PropTypes.object.isRequired
};

export default Details;
