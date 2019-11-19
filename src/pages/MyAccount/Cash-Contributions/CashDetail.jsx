/* 

Component : CashDetail 

*/
/* ***************************** Import Packages ************************* */
import React, { Component } from "react";
import PropTypes from "prop-types";

/* ***************************** Import Constants & Common Functions ************************* */
import myAccountListConstants from "../../../constants/my-account-lists";
import { displayDate, displayAmount } from "../../../utils/common";

class CashDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { detail } = this.props;
    let methodName = "";
    // if (detail.method === "card" && detail.source) {
    //   const source =
    //     detail.source.funding === "credit" ? "Credit card" : "Debit card";
    //   methodName = `${source} (${detail.source.brand})`;
    // }
    if (detail.method === "card" && detail.stripeId) {
      methodName = "Credit card (Stripe)";
    } else if (detail.method === "card" && !detail.stripeId) {
      methodName = "Credit card (CardConnect)";
    } else if (detail.method === "ach") {
      methodName = "ACH Payment";
    }

    if (!detail) return null;
    return (
      <div className="myaccountforms-details">
        <table className="table myaccount-dashboard-table my-donations mb-0 table-responsive-sm">
          <tbody>
            <tr className="mt-2">
              <td width="15%" className="align-middle p-3 border-top-0">
                <p className="th-date text-dark mb-0">
                  {myAccountListConstants.date.text}
                </p>
              </td>
              <td width="35%" className="align-middle bg-white">
                <p className="date mdm-txt text-muted mb-0">
                  {displayDate(detail.date)}
                </p>
              </td>
              <td width="15%" className="align-middle p-3 border-top-0">
                <h6 className="th-reference-no text-dark mb-0">
                  {myAccountListConstants.reference.text}
                </h6>
              </td>
              <td width="35%" className="align-middle bg-white">
                <p className="reference-no mdm-txt text-muted mb-0">
                  {detail.transactionId}
                </p>
              </td>
            </tr>
            <tr>
              <td width="15%" className="align-middle p-3 border-top-0">
                <p className="th-hours text-dark mb-0">
                  {myAccountListConstants.method.text}
                </p>
              </td>
              <td width="35%" className="align-middle bg-white">
                <p className="method mdm-txt text-muted mb-0">{methodName}</p>
              </td>
              <td width="15%" className="align-middle p-3 border-top-0">
                <p className="th-amount text-dark mb-0">
                  {myAccountListConstants.amount.text}
                </p>
              </td>
              <td width="35%" className="align-middle bg-white">
                <p className="amount mdm-txt text-muted mb-0 blue">
                  {displayAmount(detail.amount)}
                  {detail.verified ? (
                    <i className="fa fa-check pale-green font-weight-normal fs-20 ml-2 mt-1" />
                  ) : null}
                </p>
              </td>
            </tr>
            <tr className={detail.retref ? `` : `d-none`}>
              <td width="15%" className="align-middle p-3 border-top-0">
                <p className="th-hours text-dark mb-0">Rtf Number</p>
              </td>
              <td width="35%" className="align-middle bg-white">
                <p className="method mdm-txt text-muted mb-0">
                  {detail.retref}
                </p>
              </td>
            </tr>
            <tr className={detail.batchid ? `` : `d-none`}>
              <td width="15%" className="align-middle p-3 border-top-0">
                <p className="th-hours text-dark mb-0">Batch Number</p>
              </td>
              <td width="35%" className="align-middle bg-white">
                <p className="method mdm-txt text-muted mb-0">
                  {detail.batchid}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

CashDetail.defaultProps = {
  detail: []
};

CashDetail.propTypes = {
  detail: PropTypes.object
};

export default CashDetail;
