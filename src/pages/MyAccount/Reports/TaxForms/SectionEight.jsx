/* 

Component : TaxForm - SectionEight

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";

/** ****************************** Import APIS *************************** */
import { displayDate } from "../../../../utils/common";

class SectionEight extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { formData } = this.props;
    return (
      <table className="table table-header mb-0">
        <tbody>
          <tr>
            {/* Section B Part II */}
            <td className="align-middle pt-0 pb-0">
              <p className="mb-0 text-left d-flex">
                <span>        
                  <b className="bg-dark text-white pt-1 lh-25 pb-1 pl-2 pr-2">
                    <span>Part<span class="ml-1">II</span></span>
                  </b>
                </span>
                <span className="pl-5 section-part-page-2-title">
                  <span className="fw-500">
                    {"Taxpayer (Donor) Statement — "}
                  </span>
                  <span className="fw-400">
                    {"List each item included in Part I above that the appraisal identifies as having a value of $500 or less. See instructions."}
                  </span>
                </span>  
              </p>                            
            </td>
          </tr>
          <tr className="mb-3">
            <td className="align-middle pt-0 border-bottom-0">
              <p className="mb-0 fw-400">
                <span className="text-justify">
                  {"I declare that the following item(s) included in Part I above has to the best of my knowledge and "}
                </span>
                <span className="text-justify">
                  {"belief an appraised value of not more than $500 (per item). Enter identifying letter from Part I "}
                </span>
                <span className="text-justify">
                  {"and describe the specific item. See instructions."}
                </span>                
                <span className="col-4 mdm-txt mb-0 float-right pl-2 pr-2 ml-3 text-left  border-bottom">
                  {"\u00A0"}
                </span>
                <span className="float-right">▶</span>
              </p>
            </td>
          </tr>
          <tr className="d-flex mt-1">
            <td className="align-middle col pt-0 pb-0">
              <div className="d-flex">
                <p className="mb-0 pl-0 col fw-400">
                  {"Signature of taxpayer(donor)"}
                  <span className="right-arrow ml-1 mr-1">▶</span>
                </p>
                <p className="mdm-txt mb-0 text-left col">{"\u00A0"}</p>
              </div>
            </td>
            <td className="align-middle col-4 pt-0 pb-0">
              <div className="d-flex">
                <p className="mb-0 pl-0 col text-right pr-0 ml-4 fw-400">
                  {"Date"}
                  <span className="right-arrow ml-1 mr-1">▶</span>
                </p>
                <p className="mdm-txt mb-0 text-left col pl-0">
                  {displayDate(formData.date)}
                  {"\u00A0"}
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

SectionEight.defaultProps = {
  formData: []
};

SectionEight.propTypes = {
  formData: PropTypes.array
};

export default SectionEight;
