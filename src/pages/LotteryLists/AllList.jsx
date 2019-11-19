/*
   
Component : AllList

*/
/** ****************************** Import packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { dripForm } from "react-drip-form";

/** ****************************** Import constants *************************** */
import lotteryConstants from "../../constants/lottery-constants";

/** ****************************** Import common functions *************************** */
import History from "../../utils/History";
import { displayAmount } from "../../utils/common";

class AllList extends Component {
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

  _renderItems = () => {
    const { list } = this.props;
    const self = this;
    if (Object.keys(list).length === 0) return null;
    return Object.keys(list).map(function(key) {
      const data = list[key];
      return (
        <tr
          className="lottery-table-details hover-popup"
          key={data._id}
          onClick={() => {
            History.push(`/lottery/${data._id}`);
          }}
        >
          <td className="pl-4 align-middle">
            <p className="lottery-name mdm-txt text-muted mb-0">
              {data.poolName}
            </p>
          </td>
          <td className="align-middle">
            <p className="pool mdm-txt text-muted mb-0">{`#${data._id}`}</p>
          </td>
          <td className="align-middle">
            <p className="estimated-jackpot blue text-muted mb-0">
              {displayAmount(data.jackpotAmount)}
            </p>
          </td>
          <td className="align-middle">
            <p className="no-of-tickets blue mdm-txt text-muted mb-0">
              {data.nofTickets}
            </p>
          </td>
          <td className="align-middle">
            <p className="no-of-winning-tickets blue mdm-txt text-muted mb-0">
              {data.nofwinningTickets}
            </p>
          </td>
          <td className="align-middle">
            <p className="no-of-winning-tickets blue text-muted mb-0">
              {displayAmount(data.winningAmount)}
            </p>
          </td>
          <td className="align-middle relative">
            <div className="winning-numbers">
              <span className="win-combination d-flex">
                {self.displayWinningNumber(data.winningNumbers)}
              </span>
            </div>
            <span className="go-to-details">
              <i className="fa fa-angle-right blue text-dark text-right" />
            </span>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="lottery-form-wrapper border border-bottom-0">
        <div className="lottery-form-details">
          <table className="table myaccount-dashboard-table mb-0 table-responsive-sm">
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
              {this._renderItems()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

AllList.propTypes = {
  list: PropTypes.array.isRequired
};

export default dripForm({})(AllList);
