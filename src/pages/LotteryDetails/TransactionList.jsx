/*

Component : TransactionList

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";

/** ****************************** Import constants *************************** */
import lotteryConstants from "../../constants/lottery-constants";

/** ****************************** Import common functions *************************** */
import { displayAmount, displayDateTime } from "../../utils/common";

class TransactionList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  transactionDetails = () => {
    const { list } = this.props;
    if (list && list.length === 0) return null;
    return list.map(function(item) {
      return (
        <tr className="lottery-table-details" key={item.poolId}>
          <td className="pl-4 align-middle">
            <p className="pool-id mdm-txt text-muted mb-0">
              {`#${item.poolId}`}
            </p>
          </td>
          <td className="align-middle">
            <p className="pool mdm-txt text-muted mb-0">
              {`#${item.poolName}`}
            </p>
          </td>
          <td className="align-middle">
            <p className="estimated-jackpot blue text-muted mb-0">
              {displayAmount(item.amount)}
            </p>
          </td>
          <td className="align-middle">
            <p className="item-nickname mdm-txt text-muted mb-0">
              {item.nickName}
            </p>
          </td>
          <td className="align-middle">
            <p className="item-email mdm-txt text-muted mb-0">
              {item.email}
            </p>
          </td>
          <td width="30%" className="align-middle">
            <p className="created-at blue text-muted mb-0">
              {displayDateTime(list.createdAt)}
            </p>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="row">
        {/* Left Side */}
        <div className="col-xl-12 col-lg-12 col-md-12">
          <div className="lottery-form-wrapper border border-bottom-0">
            <div className="lottery-form-details">
              <table className="table myaccount-dashboard-table mb-0 table-responsive-md">
                <tbody>
                  <tr className="table-heading">
                    <th className="align-middle pl-4 border-top-0">
                      <h6 className="th-lottery-name mb-0">
                        {lotteryConstants.lotteryTable.poolID}
                      </h6>
                    </th>
                    <th className="align-middle p-3 border-top-0">
                      <h6 className="th-pool mb-0">
                        {lotteryConstants.lotteryTable.lotteryName}
                      </h6>
                    </th>
                    <th className="align-middle p-3 border-top-0">
                      <h6 className="th-estimated-jackpot mb-0">
                        {lotteryConstants.lotteryTable.donation}
                      </h6>
                    </th>
                    <th className="align-middle p-3 border-top-0">
                      <h6 className="th-no-of-tickets mb-0">
                        {lotteryConstants.lotteryTable.nickName}
                      </h6>
                    </th>
                    <th className="align-middle p-3 border-top-0">
                      <h6 className="th-total-winning-tickets mb-0">
                        {lotteryConstants.lotteryTable.email}
                      </h6>
                    </th>
                    <th className="align-middle p-3 border-top-0">
                      <h6 className="th-winning-amount mb-0">
                        {lotteryConstants.lotteryTable.createdAt}
                      </h6>
                    </th>
                  </tr>
                  {/* Table Datas */}
                  {this.transactionDetails()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TransactionList.propTypes = {
  list: PropTypes.array.isRequired
};

export default TransactionList;
