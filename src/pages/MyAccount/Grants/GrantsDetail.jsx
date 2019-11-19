/* 

Component : GrantsDetail 

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";

/* ***************************** Import Constants ************************* */
import myAccountListConstants from "../../../constants/my-account-lists";
import { sharedDetails } from "../../../constants/lists";

/* ***************************** Import Commons ************************* */
import { displayDate, displayAmount } from "../../../utils/common";

class GrantsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { detail } = this.props;
    if (!detail) return null;
    const sharedDetailsText = detail.sharedDetails
      ? sharedDetails[detail.sharedDetails].value
      : "";
    return (
      <div className="myaccountforms-details">
        <table className="table myaccount-dashboard-table my-donations mb-0 table-responsive-sm">
          <tbody>
            <tr className="mt-2">
              <td width="17%" className="align-middle p-3 border-top-0">
                <p className="th-date text-dark mb-0">
                  {myAccountListConstants.date.text}
                </p>
              </td>
              <td width="33%" className="align-middle bg-white">
                <p className="date mdm-txt text-muted mb-0">
                  {displayDate(detail.date)}
                </p>
              </td>
              <td width="17%" className="align-middle p-3 border-top-0">
                <p className="th-charities text-dark mb-0">
                  {myAccountListConstants.charityName.text}
                </p>
              </td>
              <td width="33%" className="align-middle bg-white">
                <p className="charity-name mdm-txt text-muted mb-0">
                  {detail.charityName}
                </p>
              </td>
            </tr>
            <tr>
              <td width="17%" className="align-middle p-3 border-top-0">
                <p className="th-amount text-dark mb-0">
                  {myAccountListConstants.amount.text}
                </p>
              </td>
              <td width="33%" className="align-middle bg-white">
                <p className="amount mdm-txt text-muted mb-0 blue">
                  {displayAmount(detail.amount)}
                </p>
              </td>
              <td width="17%" className="align-middle p-3 border-top-0">
                <p className="th-shared-details text-dark mb-0">
                  {myAccountListConstants.sharedDetails.text}
                </p>
              </td>
              <td width="33%" className="align-middle bg-white">
                <p className="shared-details mdm-txt text-muted mb-0">
                  {sharedDetailsText}
                </p>
              </td>
            </tr>
            <tr>
              <td width="17%" className="align-middle p-3 border-top-0">
                <p className="th-desc text-dark mb-0">
                  {myAccountListConstants.description.text}
                </p>
              </td>
              <td width="33%" colSpan="3" className="align-middle bg-white">
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

GrantsDetail.defaultProps = {
  detail: []
};

GrantsDetail.propTypes = {
  detail: PropTypes.object
};

export default GrantsDetail;
