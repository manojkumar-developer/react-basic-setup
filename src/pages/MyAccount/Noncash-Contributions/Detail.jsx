/* 

Component : NonCashContributionDetails

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";

/* ***************************** Import constants ************************* */
import myAccountListConstants from "../../../constants/my-account-lists";
import { contributionCategoryList, propertyTypeList } from "../../../constants/lists";

/** ****************************** Import API *************************** */
import { displayDate, displayAmount } from "../../../utils/common";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { detail } = this.props;
    if (!detail) return null;
    return (
      <div className="myaccountforms-details">
        <table className="table myaccount-dashboard-table myaccountforms-details my-donations mb-0 table-responsive-sm">
          <tbody>
            <tr>
              <td width="20%" className="align-middle p-3 border-top-0">
                <p className="th-date text-dark mb-0">
                  {myAccountListConstants.date.text}
                </p>
              </td>
              <td width="30%" className="align-middle bg-white">
                <p className="date mdm-txt text-muted mb-0">
                  {displayDate(detail.date)}
                </p>
              </td>
              <td width="20%" className="align-middle p-3 border-top-0">
                <p className="th-reference-no text-dark mb-0">
                  {myAccountListConstants.reference.text}
                </p>
              </td>
              <td width="30%" className="align-middle bg-white">
                <p className="reference-no mdm-txt text-muted mb-0">
                  {detail.transactionId}
                </p>
              </td>
            </tr>
            <tr>
              <td width="20%" className="align-middle p-3 border-top-0">
                <p className="th-charities text-dark mb-0">
                  {myAccountListConstants.propertyName.text}
                </p>
              </td>
              <td width="30%" className="align-middle bg-white">
                <p className="charity-name mdm-txt text-muted mb-0">
                  {detail.propertyName}
                </p>
              </td>
              <td width="20%" className="align-middle p-3 border-top-0">
                <p className="th-category text-dark text-dark mb-0">
                  {myAccountListConstants.propertyCategory.text}
                </p>
              </td>
              <td width="30%" className="align-middle bg-white">
                <p className="category mdm-txt text-muted mb-0">
                  {contributionCategoryList[detail.propertyCategory].value}
                </p>
              </td>
            </tr>
            <tr>
              <td width="20%" className="align-middle p-3 border-top-0">
                <p className="th-property-type text-dark mb-0">
                  {myAccountListConstants.propertyType.text}
                </p>
              </td>
              <td width="30%" className="align-middle bg-white">
                <p className="property-type mdm-txt text-muted mb-0">
                  {propertyTypeList[detail.propertyType].value}
                </p>
              </td>
              <td width="20%" className="align-middle p-3 border-top-0">
                <p className="th-value text-dark mb-0">
                  {myAccountListConstants.propertyValue.text}
                </p>
              </td>
              <td width="30%" className="align-middle bg-white">
                <p className="value blue mdm-txt text-muted mb-0 blue">
                  {displayAmount(detail.propertyValue)}
                </p>
              </td>
            </tr>
            <tr>
              <td width="20%" className="align-middle p-3 border-top-0">
                <p className="th-market-value text-dark mb-0">
                  {myAccountListConstants.marketValue.text}
                </p>
              </td>
              <td width="30%" className="align-middle bg-white">
                <p className="market-value blue mdm-txt text-muted mb-0 blue">
                  {displayAmount(detail.marketValue)}
                </p>
              </td>
              <td width="20%" className="align-middle p-3 border-top-0">
                <p className="th-market-value text-dark mb-0" />
              </td>
              <td width="30%" className="align-middle bg-white">
                <p className="th-market-value text-dark mb-0" />
              </td>
            </tr>
            <tr>
              <td width="20%" className="align-middle p-3 border-top-0">
                <p className="th-desc text-dark mb-0">
                  {myAccountListConstants.description.text}
                </p>
              </td>
              <td width="80%" colSpan="3" className="align-middle bg-white">
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

Detail.defaultProps = {
  detail: []
};

Detail.propTypes = {
  detail: PropTypes.object
};

export default Detail;
