/* 

Component : TaxForm - SectionFive

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";

/** ****************************** Import commonfunctions *************************** */
import { displayName } from "../../../../utils/common";

class SectionFive extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { userData } = this.props;
    return (
      <div className="page-1-header-details">
        <table className="table table-header mb-0 mb-0">
          <tbody>
            {/* Page 2  */}
            <tr className="d-flex">
              <td className="pt-0 col-9 pb-0 border-top-0 border-bottom">
                <p className="mdm-txt mb-0 text-left fw-500">
                  {"Form 8283 (Rev. 12-2014)"}
                </p>
              </td>
              <td className="pt-0 col-3 pb-0 border-top-0 border-bottom">
                <p className="mdm-txt mb-0 text-right">Page 2</p>
              </td>
            </tr>
            {/* Name */}
            <tr className="d-flex">
              <td className="align-middle col-10 pt-0 pb-0 border-right">
                <p className="mdm-txt mb-0 text-left fw-400">
                  {"Name(s) shown on your income tax return"}
                </p>
                <p className="mdm-txt mb-0 text-left ">
                  {userData
                    ? displayName(userData.firstName, userData.lastName)
                    : null}
                </p>
              </td>
              <td className="align-middle col-2 pt-0 pb-0">
                <p className="mdm-txt mb-0 pl-3 pr-2 text-left">
                  {"Identifying number"}
                </p>
                <p className="mdm-txt mb-0 pl-2 pr-2 text-left ">
                  {/* {formData[0] ? formData[0].transactionId : "\u00A0"} */}
                </p>
              </td>
            </tr>
            {/* Section B */}
            <tr>
              <td className="align-middle">
                <p className="mb-0 text-left d-flex section-part-page-2-title">
                  <b className="pr-2">
                    <span>Section<span className="ml-1">B.</span></span>
                  </b>
                  <span>
                    <span className="fw-500">
                      {"Donated Property Over $5,000 (Except Publicly Traded Securities) — "}
                    </span>
                    <span className="fw-400">
                      {
                      " Complete this section for one item (or one group of similar items) for which you claimed a"
                      }
                      {
                        " deduction of more than $5,000 per item or group (except contributions of publicly traded"
                      }
                      {
                        " securities reported in Section A). Provide a separate form for each property donated unless"
                      }
                      {
                        " it is part of a group of similar items. An appraisal is generally required for property"
                      }
                      {" listed in Section B. See instructions."}
                    </span>
                  </span>
                </p>    
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

SectionFive.defaultProps = {
  formData: [],
  userData: []
};

SectionFive.propTypes = {
  formData: PropTypes.array,
  userData: PropTypes.object
};

export default SectionFive;
