/* 

Component : TaxForm - SectionNine

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";

/** ****************************** Import APIS *************************** */
import { displayDate } from "../../../../utils/common";

class SectionNine extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { formData } = this.props;
    return (
      <table className="table table-header mb-0 section-b-part-3">
        <tbody>
          {/* Part III Declaration */}
          <tr>
            <td className="align-middle pt-0 pb-0">
              <p className="mb-0 text-left d-flex">
                <span>        
                  <b className="bg-dark text-white pt-1 lh-25 pb-1 pl-2 pr-2">
                    {"Part III"}
                  </b>
                </span>
                <span className="pl-5 section-part-page-2-title">
                  <span className="fw-500">
                    {"Declaration of Appraiser"}
                  </span>                  
                </span>  
              </p>                       
            </td>
          </tr>
          <tr>
            <td className="align-middle pt-0 border-bottom-0 pb-0">
              <p className="mdm-text mb-0 fw-400 text-justify">
                {
                  "I declare that I am not the donor, the donee, a party to the transaction in which the donor "
                }
                {
                  "acquired the property, employed by, or related to any of the foregoing persons, or married to "
                }
                {
                  "any person who is related to any of the foregoing persons. And, if regularly used by the "
                }
                {
                  "donor, donee, or party to the transaction, I performed the majority of my appraisals during "
                }
                {"my tax year for other persons."}
              </p>
            </td>
          </tr>
          <tr>
            <td className="align-middle pt-0 border-bottom-0">
              <p className="mb-0 custom-font-size fw-400 text-justify">
                {
                  "Also, I declare that I perform appraisals on a regular basis; and that because of my "
                }
                {
                  "qualifications as described in the appraisal, I am qualified to make appraisals of the type of "
                }
                {
                  "property being valued. I certify that the appraisal fees were not based on a percentage of "
                }
                {
                  "the appraised property value. Furthermore, I understand that a false or fraudulent "
                }
                {
                  "overstatement of the property value as described in the qualified appraisal or this Form 8283 may "
                }
                {
                  "subject me to the penalty under section 6701(a) (aiding and abetting the understatement of tax "
                }
                {
                  "liability). In addition, I understand that I may be subject to a penalty under section 6695A if I "
                }
                {
                  "know, or reasonably should know, that my appraisal is to be used in connection with a "
                }
                {
                  "return or claim for refund and a substantial or gross valuation misstatement results from my "
                }
                {
                  "appraisal. I affirm that I have not been barred from presenting evidence or testimony by the "
                }
                {"Office of Professional Responsibility."}
              </p>
            </td>
          </tr>
          <tr className="d-flex">
            {/* Signature */}
            <td className="align-middle col pt-0 pb-0">
              <div className="d-flex">
                <p className="mb-0 col-2 pl-0 pr-2 fw-500 border-right">
                  {"Sign Here"}
                </p>
                <p className="mb-0 col-10 pt-4 fw-400">
                  {"Signature"}
                  <span className="right-arrow ml-1 mr-1">▶</span>
                </p>
              </div>
            </td>
            {/* Title */}
            <td className="align-middle col pt-0 pb-0">
              <div className="d-flex align-middle pt-4">
                <p className="mb-0 pl-0 col text-right fw-400">
                  {"Title"}
                  <span className="right-arrow ml-1 mr-1">▶</span>
                </p>
                <p className="mdm-txt mb-0 text-left col">
                  {"\u00A0"}
                </p>
              </div>
            </td>
            {/* Date */}
            <td className="align-middle col-4 pt-0 pb-0">
              <div className="d-flex align-middle pt-4 ml-4">
                <p className="mb-0 pl-0 pr-0 col text-right fw-400">
                  {"Date"}
                  <span className="right-arrow ml-1">▶</span>
                </p>
                <p className="mdm-txt mb-0 text-left pl-2 col">
                  {formData[0] ? displayDate(formData[0].date) : "\u00A0"}
                </p>
              </div>
            </td>
          </tr>
          {/* Name */}
          <tr className="d-flex">
            <td className="align-middle col-10 pt-0 pb-0 border-right">
              <p className="mdm-txt mb-0 text-left fw-400">
                {"Business address (including room or suite no.)"}
              </p>
              <p className="mdm-txt mb-0 text-left ">{"\u00A0"}</p>
            </td>
            <td className="align-middle col-2 pt-0 pb-0">
              <p className="mdm-txt fw-500 mb-0 pl-2 pr-2 text-left fw-400">
                {"Identifying number"}
              </p>
              <p className="mdm-txt mb-0 pl-2 pr-2 text-left ">
                {/* {formData[0] ? formData[0].transactionId : "\u00A0"} */}
                &nbsp;
              </p>
            </td>
          </tr>
          {/* Address */}
          <tr className="d-flex">
            <td className="align-middle col pt-0 pb-0">
              <p className="mdm-txt mb-0 text-left fw-400">
                {"City or town, state, and ZIP Code"}
              </p>
              <p className="mdm-txt mb-0 text-left ">
                <span className="mr-1">{formData[0] ? formData[0].organizationCity : null }</span>
                <span className="mr-1">{formData[0] ? formData[0].organizationState : null }</span>
                <span className="mr-1">{formData[0] ? formData[0].organizationZipCode : null}</span>
                {"\u00A0"}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

SectionNine.defaultProps = {
  formData: []
};

SectionNine.propTypes = {
  formData: PropTypes.array
};

export default SectionNine;
