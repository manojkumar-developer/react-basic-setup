/* 

Component : MyCharitiesDetail 

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";

/* ***************************** Import Constants & Common Functions ************************* */
import myAccountListConstants from "../../../constants/my-account-lists";
import { displayEin } from "../../../utils/common";

class MyCharitiesDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _renderAddress = address => {
    if (!address) return null;
    return (
      <span>
        {address.streetAddress1 ? address.streetAddress1 : null}
        {address.streetAddress1 ? <br /> : null}
        {address.streetAddress2 ? address.streetAddress2 : null}
        {address.streetAddress2 ? <br /> : null}
        {address.city ? `${address.city}, ` : null}
        {address.state ? `${address.state} ` : null}
        {address.zipcode ? `${address.zipcode}. ` : null}
      </span>
    );
  };

  render() {
    const { detail } = this.props;
    if (!detail) return null;
    return (
      <div className="myaccountforms-details">
        <table className="table myaccount-dashboard-table my-donations my-charities mb-0 table-responsive-sm">
          <tbody>
            <tr className="mt-2">
              <td width="27%" className="align-middle p-3 border-top-0">
                <p className="th-date text-dark mb-0">
                  {myAccountListConstants.charityName.text}
                </p>
              </td>
              <td width="73%" className="align-middle bg-white">
                <p className="date mdm-txt text-muted mb-0">
                  {detail.charityName}
                </p>
              </td>
            </tr>
            <tr>
              <td width="27%" className="align-middle p-3 border-top-0">
                <p className="th-charities text-dark mb-0">{myAccountListConstants.address.text}</p>
              </td>
              <td width="73%" className="align-middle bg-white">
                <p className="charity-name mdm-txt text-muted mb-0">
                  {this._renderAddress(detail.mailingAddress)}
                </p>
              </td>
            </tr>
            <tr>
              <td width="27%" className="align-middle p-3 border-top-0">
                <p className="th-charities text-dark mb-0">{myAccountListConstants.ein.text}</p>
              </td>
              <td width="73%" className="align-middle bg-white">
                <p className="charity-name mdm-txt text-muted mb-0">                  
                  {displayEin(detail.ein)}
                </p>
              </td>
            </tr>
            <tr>
              <td width="27%" className="align-middle p-3 border-top-0">
                <p className="th-charities text-dark mb-0">{myAccountListConstants.websiteURL.text}</p>
              </td>
              <td width="73%" className="align-middle bg-white">
                <p className="charity-name mdm-txt text-muted mb-0">
                  <a
                    href={detail.websiteURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {detail.websiteURL}
                  </a>
                </p>
              </td>
            </tr>
            <tr>
              <td width="27%" className="align-middle p-3 border-top-0">
                <p className="th-charities text-dark mb-0">{myAccountListConstants.email.text}</p>
              </td>
              <td width="73%" className="align-middle bg-white">
                <p className="charity-name mdm-txt text-muted mb-0">
                  <a
                    href="mailto:detail.generalEmail"
                    rel="noopener noreferrer"
                  >
                    {detail.generalEmail}
                  </a>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <a
          href={`/charity/${detail.charityId}`}
          className="blue-bg p-2 text-white my-charity-more text-inherit mt-3 pull-right"
          target="_blank"
          rel="noopener noreferrer"
        >          
          {myAccountListConstants.moreDetails.text}
        </a>
      </div>
    );
  }
}

MyCharitiesDetail.defaultProps = {
  detail: []
};

MyCharitiesDetail.propTypes = {
  detail: PropTypes.array
};

export default MyCharitiesDetail;
