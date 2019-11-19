/* 

Component : CashGrantsDetail 

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";

/* ***************************** Import constants & Common Functions ************************* */
import myAccountListConstants from "../../../constants/my-account-lists";
import { paymentMethodList } from "../../../constants/lists";
import { displayDate, displayAmount } from "../../../utils/common";

class CashGrantsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { detail } = this.props;
    if (!detail) return null;
    const method = detail.method;
    const dateVarious = detail.dateVarious;
    return (
      <div className="myaccountforms-details">
        <table className="table myaccount-dashboard-table my-donations cash-grants-details mb-0 table-responsive-sm">
          <tbody>
            <tr className="mt-2">
              <td width="16%" className="align-middle p-3 border-top-0">
                <p className="th-date text-dark mb-0">
                  {myAccountListConstants.date.text}
                </p>
              </td>
              <td width="34%" className="align-middle bg-white">
                <p className="date mdm-txt text-muted mb-0">
                  {dateVarious ? "Various" : displayDate(detail.date)}
                </p>
              </td>
              <td width="16%" className="align-middle p-3 border-top-0">
                <h6 className="th-reference-no text-dark mb-0">
                  {myAccountListConstants.reference.text}
                </h6>
              </td>
              <td width="34%" className="align-middle bg-white">
                <p className="reference-no mdm-txt text-muted mb-0">
                  {detail.transactionId}
                </p>
              </td>
            </tr>
            <tr>
              <td width="16%" className="align-middle p-3 border-top-0">
                <p className="th-charities text-dark mb-0">
                  {myAccountListConstants.charityName.text}
                </p>
              </td>
              <td width="34%" className="align-middle bg-white">
                <p className="charity-name mdm-txt text-muted mb-0">
                  {detail.charityName}
                </p>
              </td>
              <td width="16%" className="align-middle p-3 border-top-0">
                <p className="th-hours text-dark mb-0">
                  {myAccountListConstants.method.text}
                </p>
              </td>
              <td width="34%" className="align-middle bg-white">
                <p className="method mdm-txt text-muted mb-0">
                  {paymentMethodList[method].value}
                </p>
              </td>
            </tr>
            <tr>
              <td width="16%" className="align-middle p-3 border-top-0">
                <p className="th-amount text-dark mb-0">
                  {myAccountListConstants.amount.text}
                </p>
              </td>
              <td width="34%" className="align-middle bg-white">
                <p className="amount mdm-txt text-muted mb-0 blue">
                  {displayAmount(detail.amount)}
                </p>
              </td>
              <td width="16%" className="align-middle p-3 border-top-0">
                <p className="th-amount text-dark mb-0" />
              </td>
              <td width="34%" className="align-middle bg-white">
                <p className="amount mdm-txt text-muted mb-0 blue" />
              </td>
            </tr>
            <tr>
              <td width="16%" className="align-middle p-3 border-top-0">
                <p className="th-desc text-dark mb-0">
                  {myAccountListConstants.description.text}
                </p>
              </td>
              <td width="84%" colSpan="3" className="align-middle bg-white">
                <p className="desc mdm-txt text-muted mb-0">
                  {detail.description}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

CashGrantsDetail.defaultProps = {
  detail: []
};

CashGrantsDetail.propTypes = {
  detail: PropTypes.object
};

export default CashGrantsDetail;
