/* 

Component : TaxForm Header

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";

/** ****************************** Import commonfunctions *************************** */
import { displayName } from "../../../../utils/common";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { userData } = this.props;
    return (
      <table className="table table-header form-8283-box mb-0 pb-3 mb-0">
        <tbody>
          {/* Header Details */}
          <tr className="d-flex">
            <td className="align-middle col-2 border-right">
              <p className="mb-0">
                <sub className="mr-2">Form</sub>
                <span className="form-8283-font">8283</span>
              </p>
              <p className="small fw-400 mb-0">(Rev. December 2014)</p>
              <p className="small fw-400 mb-0">Department of the Treasury</p>
              <p className="small fw-400 mb-0">Internal Revenue Service</p>
            </td>
            {/* Main Title */}
            <td className="align-middle col-8 border-right text-center">
              <h4 className="fw-500 mb-1">Noncash Charitable Contributions</h4>
              <p className="mdm-txt mb-0 fw-500">
                {"▶ Attach to your tax return if you claimed a total deduction"}
                <br />
                {"of over $500 for all contributed property."}
              </p>
              <p className="mdm-txt mb-0 fw-500">
                {
                  "▶ Information about Form 8283 and its separate instructions is at"
                }
                <span className="font-italic ml-1">{"www.irs.gov/form8283."}</span>
              </p>
            </td>
            {/* Right Part */}
            <td className="align-middle col-2">
              <p className="mdm-txt fw-400 mb-0 text-left pl-3 pr-2 pt-2 pb-2 border-bottom">
                {"OMB No. 1545-0908"}
              </p>
              <p className="mdm-txt fw-400 mb-0 text-left pl-3 pr-2 pt-2">
                {"Attachment"}
                <br />
                {"Sequence No."}
                <sub className="seq-no">{"155"}</sub>
              </p>
            </td>
          </tr>
          {/* Name */}
          <tr className="d-flex">
            <td className="align-middle col-10 pt-0 pb-0 border-right">
              <p className="mdm-txt fw-400 mb-0 text-left">
                {"Name(s) shown on your income tax return"}
              </p>
              <p className="mdm-txt pt-1 pb-1 mb-0 text-left">
                {userData
                  ? displayName(userData.firstName, userData.lastName)
                  : null}
              </p>
            </td>
            <td className="align-middle col-2 pt-0 pb-0">
              <p className="mdm-txt mb-0 pl-2 pr-2 text-left">
                {"Identifying number"}
              </p>
              <p className="mdm-txt mb-0 pl-2 pr-2 text-left text-field">
                {/* {formData[0] ? formData[0].transactionId : "\u00A0"} */}
              </p>
            </td>
          </tr>
          {/* Note */}
          <tr>
            <td className="align-middle">
              <p className="mb-0 fw-400 text-left">
                <span className="fw-500 pr-1">Note.</span>
                {"Figure the amount of your contribution deduction before "}
                {"completing this form. See your tax return instructions."}
              </p>
            </td>
          </tr>
          {/* Section A */}
          <tr>
            <td className="align-middle">
              <p className="mb-0 text-left d-flex section-part-title">
                <span>
                  <b className="pr-2">
                    <span>Section<span className="ml-1">A.</span></span>
                  </b>
                </span>
                <span>
                  <span className="fw-500">
                    {"Donated Property of $5,000 or Less and Publicly Traded Securities — "}
                  </span>
                  <span className="fw-400">
                    <span>{"List in this section"}</span>
                    <b className="ml-1 mr-1">{"only"}</b>
                    <span>{"items (or groups of similar items) for which you claimed a deduction of $5,000 or less. Also list publicly traded securities even if the deduction is more than $5,000 (see instructions)."}</span>
                  </span>
                </span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

Header.defaultProps = {
  formData: [],
  userData: []
};

Header.propTypes = {
  formData: PropTypes.array,
  userData: PropTypes.object
};

export default Header;
