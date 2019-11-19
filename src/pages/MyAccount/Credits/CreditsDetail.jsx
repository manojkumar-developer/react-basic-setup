/* 

Component : CreditsDetail 

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";

/* ***************************** Import Constants & Common Functions ************************* */
import myAccountListConstants from "../../../constants/my-account-lists";
import { tkConstants } from "../../../config";
import { displayDate } from "../../../utils/common";
import { displayAmountWithComma } from "../../../utils/common";

class CreditsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { detail } = this.props;
    if (!detail) return null;
    const type = detail ? detail.type : null;
    const creditType = type ? tkConstants[type] : null;
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
              <td width="85%" className="align-middle bg-white">
                <p className="date mdm-txt text-muted mb-0">
                  {displayDate(detail.date)}
                </p>
              </td>
            </tr>
            <tr>
              <td width="15%" className="align-middle p-3 border-top-0">
                <h6 className="th-reference-no text-dark mb-0">
                  {myAccountListConstants.reason.text}
                </h6>
              </td>
              <td width="85%" className="align-middle bg-white">
                <p className="reference-no mdm-txt text-muted mb-0">
                  {creditType}
                </p>
              </td>
            </tr>
            <tr>
              <td width="15%" className="align-middle p-3 border-top-0">
                <p className="th-charities text-dark mb-0">
                  {myAccountListConstants.credits.text}
                </p>
              </td>
              <td width="85%" className="align-middle bg-white">
                <p className="charity-name mdm-txt text-muted mb-0">
                  {displayAmountWithComma(detail.credits)}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

CreditsDetail.defaultProps = {
  detail: []
};

CreditsDetail.propTypes = {
  detail: PropTypes.object
};

export default CreditsDetail;
