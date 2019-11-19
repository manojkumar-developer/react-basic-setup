/* 

Component : TaxForm - SectionThree

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";

/** ****************************** Import APIS *************************** */
import { displayAmount } from "../../../../utils/common";

class SectionThree extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _renderCharitiyAddess = () => {
    const data = `\u00A0`;
    return (
      <div>
        <p className="mb-0 fw-400 text-justify">
          {
            "Name and address of each organization to which any such contribution was made in a prior year"
          }
          {"(complete only if different from the donee organization above):"}
        </p>
        <p className="mb-0 mdm-text">Name of charitable organization (donee)</p>
        <p className="mb-0 pl-2 pr-2 text-left border-bottom">
          {data}
        </p>
        <p className="mb-0 mdm-text">
          {"Address (number, street, and room or suite no.)"}
        </p>
        <p className="mb-0 pl-2 pr-2 text-left border-bottom">
          {data}
        </p>
        <p className="mb-0 mdm-text">City or town, state, and ZIP code</p>
        <p className="mb-0 pl-2 pr-2 text-left border-bottom">
          {data}
        </p>
      </div>
    );
  };

  render() {
    const { formData } = this.props;
    const dataList = formData.filter(function(data) {
      return data.propertyType === "less_5000";
    });
    return (
      <div className="section-a-part-II border-bottom">
        <div className="section-a-part-2-title border-bottom">
          <p className="mb-0 d-flex">    
            <span className="pl-0 col-cust-width-part-2">        
              <b className="bg-dark text-white pt-1 lh-25 pb-1 pl-2 pr-2">
                {"Part II"} 
              </b>
            </span>
            <span className="col section-part-title pl-5 pr-0">
              <b className="pl-0 fw-700">
                {"Partial Interests and Restricted Use Property — "}
              </b>
              <span className="fw-400">
                {"Complete lines 2a through 2e if you gave less than an entire interest in a property listed in Part I. Complete lines 3a through 3c if conditions were placed on a contribution listed in Part I; also attach the required statement (see instructions)."}
              </span>
            </span>
          </p>
        </div>
        {/* Section A Part 2 */}
        <div className="section-a-part-2">
          {/* Section A Part 2 A */}
          <div className="section-a-part-2-a mb-1">
            <div className="d-flex"> 
              <p className="col-cust-width-part-2-child mb-0 text-center mb-0 text-center">2a</p>
              <p className="col mb-0 pl-0 fw-400">
                {
                  "Enter the letter from Part I that identifies the property for which you gave less than an entire interest"
                }
                <span className="float-right">▶</span>
              </p>
              <p className="col-2 mdm-txt mb-0 pl-2 pr-2 text-left border-bottom" />
            </div>
            <div className="d-flex">
              <p className="col-cust-width-part-2-child mb-0 text-center" />
              <p className="col mb-0 pl-0 fw-400">
                {
                  "If Part II applies to more than one property,attach a separate statement."
                }
              </p>
            </div>
          </div>
          {/* Section A Part 2 B */}
          <div className="section-a-part-2-b mb-1">
            <div className="d-flex">
              <p className="col-cust-width-part-2-child mb-0 text-center">b</p>
              <p className="col mb-0 pr-0 pl-0 fw-400">
                {
                  "Total amount claimed as a deduction for the property listed in Part I:"
                }
              </p>
              <p className="col-3 mb-0 text-left pl-0">
                <b className="mr-2">(1)</b>
                <span className="fw-400">{"For this tax year"}</span>
                <span className="float-right">▶</span>
              </p>
              <p className="col-2 mb-0 text-right pl-2 pr-2 border-bottom">
                {dataList[0] ? displayAmount(dataList[0].amountClaimed) : null}
              </p>
            </div>
            <div className="d-flex">
              <p className="col mb-0 text-center" />
              <p className="col-3 mb-0 pl-0">
                <b className="mr-2">(2)</b>
                <span className="fw-400">{"For any prior tax years"}</span>
                <span className="float-right ml-4">▶</span>
              </p>
              <p className="col-2 mb-0 text-right pl-2 pr-2 border-bottom">
                {dataList[0]
                  ? displayAmount(dataList[0].amountNextPrior)
                  : null}
              </p>
            </div>
          </div>
          {/* Section A Part 2 C */}
          <div className="section-a-part-2-c d-flex mb-0">
            <p className="col-cust-width-part-2-child mb-0 text-center">c</p>
            <div className="col text-left pl-0 pr-0">
              {this._renderCharitiyAddess(dataList)}
            </div>
          </div>
          {/* Section A Part 2 D */}
          <div className="section-a-part-2-d d-flex mb-0">
            <p className="col-cust-width-part-2-child mb-0 text-center">d</p>
            <p className="col mb-0 pl-0 fw-400">
              {
                "For tangible property, enter the place where the property is located or kept"
              }
              <span className="float-right">▶</span>
            </p>
            <p className="col-4 mdm-txt mb-0 pl-2 pr-2 text-left border-bottom">
              {dataList[0] ? dataList[0].propertyLocation : null}
            </p>
          </div>
          {/* Section A Part 2 E */}
          <div className="section-a-part-2-e mb-0">
            <div className="d-flex">
              <p className="col-cust-width-part-2-child mb-0 text-center">e</p>
              <div className="col pl-0 pr-0">
                <div className="d-flex">
                  <p className="col pl-0 mb-0 fw-400">
                    {
                      "Name of any person, other than the donee organization, having actual possession of the property"
                    }
                    <span className="float-right">▶</span>
                  </p>
                  <p className="col-2 mdm-txt mb-0 pl-2 pr-2 text-left border-bottom">
                    {dataList[0] ? dataList[0].actualPossession : null}
                  </p>
                </div>
                <div className="d-flex">
                  <p className="col-12 pl-0 mdm-txt mb-0 text-left border-bottom">&nbsp;</p>
                </div>
              </div>
            </div>
          </div>
          {/* Section A Part 2 - 3A */}
          <div className="section-a-part-2-3-a mb-0">
            <div className="d-flex">
              {/* Left Part  */}
              <div className="left-part col-11 pl-0">
                {/* Section A Part 2 3A */}
                <div className="section-a-part-3-a d-flex mt-1 mb-0">
                  <p className="col-cust-width-part-2-child mb-0 text-center pt-1">3a</p>
                  <div className="col pl-0 pr-0">
                    <p className="pl-0 mb-0 fw-400 pt-1 text-justify">
                      {"Is there a restriction, either temporary or permanent, on the donee’s right to use or dispose of the donated property?............................................................................................................................................................................."}
                    </p>
                  </div>
                </div>
                {/* Section A Part 2 3B */}
                <div className="section-a-part-3-b d-flex mt-1 mb-0">
                  <p className="col-cust-width-part-2-child mb-0 text-center">b</p>
                  <div className="col pl-0 pr-0">
                    <p className="pl-0 mb-0 fw-400 text-justify">
                      {"Did you give to anyone (other than the donee  organization or another organization participating with the donee organization in cooperative fundraising) the right to the income from the donated property or to the possession of the property, including the right to vote donated securities, to acquire the property by purchase or otherwise, or to designate the person having such income, possession, or right to acquire?........................................................"}
                    </p>
                  </div>
                </div>
                {/* Section A Part 2 3B */}
                <div className="section-a-part-3-c d-flex">
                  <p className="col-cust-width-part-2-child mb-0 text-center">c</p>
                  <div className="col pl-0 pr-0">
                    <p className="pl-0 mb-0 fw-400 text-justify">
                      {"Is there a restriction limiting the donated property for a particular use?......................................................................."}
                    </p>
                  </div>
                </div>
              </div>
              {/* Right Part Yes or No Table  */}
              <div className="right-part col-1 pl-0 pr-0 yes-no-table">
                <table className="table mb-0 text-center"> 
                  <tbody>
                    <tr>
                      <th className="pt-0 pb-0 border-top-0">Yes</th>
                      <th className="pt-0 pb-0 border-top-0">No</th>
                    </tr>
                    <tr>
                      <td className="pt-0 pb-0 border-bottom">
                        <input
                          type="checkbox"
                          className="checkbox mt-1 mb-2"
                        />
                      </td>
                      <td className="pt-0 pb-0 border-bottom">
                        <input
                          type="checkbox"
                          className="checkbox mt-1 mb-2"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="pt-0 pb-0 border-bottom bg-grey">
                        <p className="mdm-txt pb-3 mb-0 text-left bg-grey">&nbsp;</p>
                        <p className="mdm-txt pb-4 mb-0 text-left bg-grey">&nbsp;</p>
                      </td>
                      <td className="pt-0 pb-0 border-bottom bg-grey">
                        <p className="mdm-txt pb-3 mb-0 text-left bg-grey">&nbsp;</p>
                        <p className="mdm-txt pb-4 mb-0 text-left bg-grey">&nbsp;</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="pt-0 pb-0 border-bottom">
                        <input
                          type="checkbox"
                          className="checkbox mt-1 mb-2"
                        />
                      </td>
                      <td className="pt-0 pb-0 border-bottom">
                        <input
                          type="checkbox"
                          className="checkbox mt-1 mb-2"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="pt-0 pb-0 border-bottom-0">
                        <input
                          type="checkbox"
                          className="checkbox mt-1 mb-1"
                        />
                      </td>
                      <td className="pt-0 pb-1 border-bottom-0">
                        <input
                          type="checkbox"
                          className="checkbox mt-1 mb-1"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>        
      </div>
    );
  }
}

SectionThree.defaultProps = {
  formData: []
};

SectionThree.propTypes = {
  formData: PropTypes.array
};

export default SectionThree;
