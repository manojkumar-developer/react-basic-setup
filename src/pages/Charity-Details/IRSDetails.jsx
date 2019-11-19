/*
   
IRS Details

*/
/** ****************************** Import packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";

/** ****************************** Import Constants *************************** */
import { charityDetailsConstants } from "../../constants/charity-details";

/** ****************************** Import Common *************************** */
import { displayEin } from "../../utils/common";

class IRSDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { details, charityName, ein } = this.props;
    if (Object.keys(details).length === 0) return false;
    return (
      <div className="IRS-Details">
        <div className="IRS-details-inner">
          <table className="table mt-4 mb-0 table-responsive">
            <tbody>
              <tr className="mt-2">
                <td width="20%" className="align-middle p-3 border-left">
                  <p className="mdm-txt fw-600 text-dark mb-0">
                    {charityDetailsConstants.IRSDetails.title1}
                  </p>
                </td>
                <td width="75%" className="align-middle bg-white border-right">
                  <p className="mdm-txt text-muted mb-0">{displayEin(ein)}</p>
                </td>
              </tr>
              <tr>
                <td width="20%" className="align-middle p-3 border-left">
                  <p className="mdm-txt fw-600 text-dark mb-0">
                    {charityDetailsConstants.IRSDetails.title2}
                  </p>
                </td>
                <td width="75%" className="align-middle bg-white border-right">
                  <p className="mdm-txt text-muted mb-0">{charityName}</p>
                </td>
              </tr>
              <tr>
                <td width="20%" className="align-middle p-3 border-left">
                  <p className="mdm-txt fw-600 text-dark mb-0">
                    {charityDetailsConstants.IRSDetails.title3}
                  </p>
                </td>
                <td width="75%" className="align-middle bg-white border-right">
                  <p className="mdm-txt text-muted mb-0">{details.nteeCode}</p>
                </td>
              </tr>
              <tr>
                <td width="20%" className="align-middle p-3 border-left">
                  <p className="mdm-txt fw-600 text-dark mb-0">
                    {charityDetailsConstants.IRSDetails.title4}
                  </p>
                </td>
                <td width="75%" className="align-middle bg-white border-right">
                  <p className="mdm-txt text-muted mb-0">
                    {details.nteeClassification}
                  </p>
                </td>
              </tr>
              <tr>
                <td width="20%" className="align-middle p-3 border-left">
                  <p className="mdm-txt fw-600 text-dark mb-0">
                    {charityDetailsConstants.IRSDetails.title5}
                  </p>
                </td>
                <td width="75%" className="align-middle bg-white border-right">
                  <p className="mdm-txt text-muted mb-0">{details.nteeType}</p>
                </td>
              </tr>
              <tr>
                <td width="20%" className="align-middle p-3 border-left">
                  <p className="mdm-txt fw-600 text-dark mb-0">
                    {charityDetailsConstants.IRSDetails.title6}
                  </p>
                </td>
                <td width="75%" className="align-middle bg-white border-right">
                  <p className="mdm-txt mdm-txt text-muted mb-0">
                    {details.classification}
                  </p>
                </td>
              </tr>
              <tr>
                <td width="20%" className="align-middle p-3 border-left">
                  <p className="mdm-txt fw-600 text-dark mb-0">
                    {charityDetailsConstants.IRSDetails.title7}
                  </p>
                </td>
                <td width="75%" className="align-middle bg-white border-right">
                  <p className="mdm-txt text-muted mb-0">
                    {details.subsection}
                  </p>
                </td>
              </tr>
              <tr>
                <td width="20%" className="align-middle p-3 border-left">
                  <p className="mdm-txt fw-600 text-dark mb-0">
                    {charityDetailsConstants.IRSDetails.title8}
                  </p>
                </td>
                <td width="75%" className="align-middle bg-white border-right">
                  <p className="mdm-txt text-muted mb-0">
                    {details.filingRequirement}
                  </p>
                </td>
              </tr>
              <tr>
                <td width="20%" className="align-middle p-3 border-left">
                  <p className="mdm-txt fw-600 text-dark mb-0">
                    {charityDetailsConstants.IRSDetails.title9}
                  </p>
                </td>
                <td width="75%" className="align-middle bg-white border-right">
                  <p className="mdm-txt text-muted mb-0">
                    {details.foundationStatus}
                  </p>
                </td>
              </tr>
              <tr>
                <td width="20%" className="align-middle p-3 border-left">
                  <p className="mdm-txt fw-600 text-dark mb-0">
                    {charityDetailsConstants.IRSDetails.title10}
                  </p>
                </td>
                <td width="75%" className="align-middle bg-white border-right">
                  <p className="mdm-txt text-muted mb-0">
                    {details.deductibility}
                  </p>
                </td>
              </tr>
              <tr>
                <td width="20%" className="align-middle p-3 border-left">
                  <p className="mdm-txt fw-600 text-dark mb-0">
                    {charityDetailsConstants.IRSDetails.title11}
                  </p>
                </td>
                <td width="75%" className="align-middle bg-white border-right">
                  <p className="mdm-txt text-muted mb-0">
                    {details.affiliation}
                  </p>
                </td>
              </tr>
              <tr>
                <td width="20%" className="align-middle p-3 border-left">
                  <p className="mdm-txt fw-600 text-dark mb-0">
                    {charityDetailsConstants.IRSDetails.title12}
                  </p>
                </td>
                <td width="75%" className="align-middle bg-white border-right">
                  <p className="mdm-txt text-muted mb-0">
                    {details.groupName ? details.groupName : "[Not Applicable]"}
                  </p>
                </td>
              </tr>
              <tr>
                <td width="20%" className="align-middle p-3 border-left">
                  <p className="mdm-txt fw-600 text-dark mb-0">
                    {charityDetailsConstants.IRSDetails.title13}
                  </p>
                </td>
                <td width="75%" className="align-middle bg-white border-right">
                  <p className="mdm-txt text-muted mb-0">
                    {details.rulingDate}
                  </p>
                </td>
              </tr>
              <tr>
                <td width="20%" className="align-middle p-3 border-left">
                  <p className="mdm-txt fw-600 text-dark mb-0">
                    {charityDetailsConstants.IRSDetails.title14}
                  </p>
                </td>
                <td width="75%" className="align-middle bg-white border-right">
                  <p className="mdm-txt text-muted mb-0">
                    {details.filingRequirement}
                  </p>
                </td>
              </tr>
              <tr>
                <td width="20%" className="align-middle p-3 border-left">
                  <p className="mdm-txt fw-600 text-dark mb-0">
                    {charityDetailsConstants.IRSDetails.title15}
                  </p>
                </td>
                <td width="75%" className="align-middle bg-white border-right">
                  <p className="mdm-txt text-muted mb-0">
                    {details.accountingPeriod}
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  width="20%"
                  className="align-middle border-bottom p-3 border-left"
                >
                  <p className="mdm-txt fw-600 text-dark mb-0">
                    {charityDetailsConstants.IRSDetails.title16}
                  </p>
                </td>
                <td
                  width="75%"
                  className="align-middle border-bottom bg-white border-right"
                >
                  <p className="mdm-txt text-muted mb-0">{details.latest990}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

IRSDetails.defaultProps = {
  charityName: "",
  ein: "",
  details: {}
};

IRSDetails.propTypes = {
  charityName: PropTypes.string,
  ein: PropTypes.string,
  details: PropTypes.object
};

export default IRSDetails;
