/* 

Component : NoncashGrantsDetail 

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";

/* ***************************** Import constants ************************* */
import { propertyTypeList, various } from "../../../constants/lists";
import myAccountListConstants from "../../../constants/my-account-lists";

/* ***************************** Import common ************************* */
import { displayDate, displayAmount } from "../../../utils/common";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { detail } = this.props;
    if (!detail) return null;
    const dateVarious = detail.date;
    return (
      <div className="myaccountforms-details">
        <div className="row">
          <div className="col-md-12">
            <table className="table myaccount-dashboard-table table-td-25 myaccountforms-details my-donations mb-0 table-responsive-sm">
              <tbody>
                <tr>
                  <td width="18%" className="align-middle p-3 border-top-0">
                    <p className="th-date text-dark mb-0">
                      {myAccountListConstants.date.text}
                    </p>
                  </td>
                  <td width="32%" className="align-middle bg-white">
                    <p className="date mdm-txt text-muted mb-0">
                      {dateVarious ? various : displayDate(detail.date)}
                    </p>
                  </td>
                  <td width="18%" className="align-middle p-3 border-top-0">
                    <p className="th-reference-no text-dark mb-0">
                      {myAccountListConstants.reference.text}
                    </p>
                  </td>
                  <td width="32%" className="align-middle bg-white">
                    <p className="reference-no mdm-txt text-muted mb-0">
                      {detail.transactionId}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td width="18%" className="align-middle p-3 border-top-0">
                    <p className="th-property-name text-dark mb-0">
                      {myAccountListConstants.charityName.text}
                    </p>
                  </td>
                  <td width="32%" className="align-middle bg-white">
                    <p className="property-name mdm-txt text-muted mb-0">
                      {detail.charityName}
                    </p>
                  </td>
                  <td width="18%" className="align-middle p-3 border-top-0">
                    <p className="th-property-name text-dark mb-0">
                      {myAccountListConstants.propertyName.text}
                    </p>
                  </td>
                  <td width="32%" className="align-middle bg-white">
                    <p className="property-name mdm-txt text-muted mb-0">
                      {detail.propertyName}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td width="18%" className="align-middle p-3 border-top-0">
                    <p className="th-property-type text-dark mb-0">
                      {myAccountListConstants.propertyType.text}
                    </p>
                  </td>
                  <td width="32%" className="align-middle bg-white">
                    <p className="property-type mdm-txt text-muted mb-0">
                      {propertyTypeList[detail.propertyType].value}
                    </p>
                  </td>
                  <td width="18%" className="align-middle p-3 border-top-0">
                    <p className="th-how-acquired text-dark mb-0">
                      {myAccountListConstants.howAcquired.text}
                    </p>
                  </td>
                  <td width="32%" className="align-middle bg-white">
                    <p className="how-acquired mdm-txt text-muted mb-0">
                      {detail.howAcquired}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td width="18%" className="align-middle p-3 border-top-0">
                    <p className="th-value text-dark mb-0">
                      {myAccountListConstants.dateAcquired.text}
                    </p>
                  </td>
                  <td width="32%" className="align-middle bg-white">
                    <p className="value mdm-txt text-muted mb-0">
                      {displayDate(detail.dateAcquired)}
                    </p>
                  </td>
                  <td width="18%" className="align-middle p-3 border-top-0">
                    <p className="th-market-value text-dark mb-0">
                      {myAccountListConstants.marketValue.text}
                    </p>
                  </td>
                  <td width="32%" className="align-middle bg-white">
                    <p className="market-value mdm-txt text-muted mb-0 blue">
                      {displayAmount(detail.marketValue)}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td width="18%" className="align-middle p-3 border-top-0">
                    <p className="th-desc text-dark mb-0">
                      {myAccountListConstants.description.text}
                    </p>
                  </td>
                  <td width="82%" colSpan="3" className="align-middle bg-white">
                    <p className="desc mdm-txt text-muted mb-0">
                      {detail.description}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
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
