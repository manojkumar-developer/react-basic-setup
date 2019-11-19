/* 

Component : TaxForm - SectionSix

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";

import { AlphabhetList } from "../../../../constants/lists";

/** ****************************** Import APIS *************************** */
import { displayAmount } from "../../../../utils/common";

class SectionSix extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _renderRowItems = () => {
    const { formData } = this.props;
    if (!formData) return false;
    const dataList = formData.filter(function(data) {
      return data.propertyType !== "less_5000";
    });
    const count = dataList.length;
    for (let i = count; i < 5; i++) {
      dataList.push({});
    }
    return dataList.map(function(data, i) {
      const index = i + 1;
      return (
        <tr className="d-flex text-center alphabet-index" key={index}>
          <td className="align-middle col-5 border-right text-center d-flex">
            <p className="text-bold mb-0 col-1 pr-4">{AlphabhetList[index].value}</p>
            <p className="mdm-txt mb-0 col-11 border-left pl-2 pr-2 text-left">
              {data.description}
            </p>
          </td>
          <td className="align-middle col border-right text-center">
            <p className="mdm-txt mb-0 pl-2 pr-2 text-left ">
              {data.propertySummary || "\u00A0"}
            </p>
          </td>
          <td className="align-middle col-2">
            <table className="table table-header mb-0 mb-0">
              <tbody>
                <tr className="d-flex">
                  <td className="align-middle border-bottom-0 col-9 border-right text-center">
                    {data.marketValue ? (
                      <p className="mdm-txt mb-0 pl-2 pr-2 text-right ">
                        {displayAmount(data.marketValue)}
                      </p>
                    ) : (
                      "\u00A0"
                    )}
                  </td>
                  <td className="align-middle col-3 border-right-0 border-bottom-0 text-center">
                    <p className="mdm-txt mb-0 pr-2 text-right ">
                      {data.marketValue ? `.00` : null}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      );
    });
  };

  render() {
    const { formData } = this.props;
    const category = formData[0] ? formData[0].propertyCategory : null;
    return (
      <table className="table table-header mb-0 pb-3 mb-0">
        <tbody>
          <tr>
            <td className="align-middle pt-0 pb-0">
              <p className="mb-0 text-left d-flex">
                <span>        
                  <b className="bg-dark text-white pt-1 lh-25 pb-1 pl-2 pr-2">
                    {"Part I"}
                  </b>
                </span>
                <span className="pl-5 section-part-page-2-title">
                  <span className="fw-500">
                    {"Information on Donated Property — "}
                  </span>
                  <span className="fw-400">
                    {"To be completed by the taxpayer and/or the appraiser."}
                  </span>
                </span>  
              </p>                           
            </td>
          </tr>
          {/* 4 */}
          <tr>
            <td className="align-middle text-center pt-0 pb-0 border-bottom-0">
              <p className="fw-400 pl-0 mb-0 d-flex mb-1">
                <b className="pl-3 pr-3">4</b>
                <span className="col-11 text-left">
                  {"Check the box that describes the type of  property donated"}
                </span>
              </p>
            </td>
          </tr>
          {/* Checkbox List */}
          <tr>
            <td className="border-bottom-0">
              <table className="table mb-1">
                <tbody>
                  <tr>
                    <td className="align-middle text-right pt-0 pb-0 pr-0 pl-2 border-bottom-0">
                      <p className="mdm-txt mb-0 pl-2 pr-2 text-left" />
                    </td>
                    <td className="align-middle text-right pt-0 pb-0 pl-0 pl-2 pr-2 border-bottom-0">
                      <table className="table border-bottom-0 mb-0">
                        <tbody>
                          <tr className="d-flex">
                            <td className="align-middle text-right pt-0 pb-0 pr-1 border-bottom-0">
                              <p className="mdm-text text-bold mb-0">
                                <b>a </b>
                              </p>
                            </td>
                            <td className="align-middle text-left border-bottom-0 mr-1">
                              <input
                                type="checkbox"
                                className="checkbox"
                                value="art_1"
                                checked={category === "art_1" || false}
                              />
                            </td>
                            <td className="align-middle text-left border-bottom-0">
                              <p className="mdm-text mb-0 text-left">
                                {"Art* (contribution of $20,000 or more)"}
                              </p>
                            </td>
                          </tr>
                          <tr className="d-flex">
                            <td className="align-middle text-right pt-0 pb-0 pr-1 border-bottom-0">
                              <p className="mdm-text text-bold mb-0">
                                <b>b </b>
                              </p>
                            </td>
                            <td className="align-middle text-left border-bottom-0 mr-1">
                              <input
                                type="checkbox"
                                className="checkbox"
                                value="qcc"
                                checked={category === "qcc" || false}
                              />
                            </td>
                            <td className="align-middle text-left border-bottom-0">
                              <p className="mdm-text mb-0 text-left">
                                {"Qualified Conservation Contribution"}
                              </p>
                            </td>
                          </tr>
                          <tr className="d-flex">
                            <td className="align-middle text-right pt-0 pb-0 pr-1 border-bottom-0">
                              <p className="mdm-text text-bold mb-0">
                                <b>c </b>
                              </p>
                            </td>
                            <td className="align-middle text-left border-bottom-0 mr-1 pl-02">
                              <input
                                type="checkbox"
                                className="checkbox"
                                value="equipment"
                                checked={category === "equipment" || false}
                              />
                            </td>
                            <td className="align-middle text-left border-bottom-0">
                              <p className="mdm-text mb-0 text-left">
                                {"Equipment"}
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    {/* d */}
                    <td className="align-middle text-right pt-0 pb-0 pl-2 pr-2 border-bottom-0">
                      <table className="table border-bottom-0 mb-0">
                        <tbody>
                          <tr className="d-flex">
                            <td className="align-middle text-right pt-0 pb-0 pr-1 border-bottom-0">
                              <p className="mdm-text text-bold mb-0">
                                <b>d </b>
                              </p>
                            </td>
                            <td className="align-middle text-left border-bottom-0 mr-1">
                              <input
                                type="checkbox"
                                className="checkbox"
                                value="art_2"
                                checked={category === "art_2" || false}
                              />
                            </td>
                            <td className="align-middle text-left border-bottom-0">
                              <p className="mdm-text mb-0 text-left">
                                {"Art* (contribution of less than $20,000)"}
                              </p>
                            </td>
                          </tr>
                          <tr className="d-flex">
                            <td className="align-middle text-right pt-0 pb-0 pr-1 border-bottom-0">
                              <p className="mdm-text text-bold mb-0">
                                <b>e </b>
                              </p>
                            </td>
                            <td className="align-middle text-left border-bottom-0 mr-1">
                              <input
                                type="checkbox"
                                className="checkbox"
                                value="real_estate"
                                checked={category === "real_estate" || false}
                              />
                            </td>
                            <td className="align-middle text-left border-bottom-0">
                              <p className="mdm-text mb-0 text-left">
                                {"Other Real Estate"}
                              </p>
                            </td>
                          </tr>
                          <tr className="d-flex">
                            <td className="align-middle text-right pt-0 pb-0 pr-1 border-bottom-0">
                              <p className="mdm-text text-bold mb-0">
                                <b>f </b>
                              </p>
                            </td>
                            <td className="align-middle text-left border-bottom-0 mr-1 pl-1">
                              <input
                                type="checkbox"
                                className="checkbox"
                                value="securities"
                                checked={category === "securities" || false}
                              />
                            </td>
                            <td className="align-middle text-left border-bottom-0">
                              <p className="mdm-text mb-0 text-left">
                                {"Securities"}
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    {/* g */}
                    <td className="align-middle text-right pt-0 pb-0 pl-2 pr-2 border-bottom-0">
                      <table className="table border-bottom- mb-0">
                        <tbody>
                          <tr className="d-flex">
                            <td className="align-middle text-right pt-0 pb-0 pr-1 border-bottom-0">
                              <p className="mdm-text text-bold mb-0">
                                <b>g </b>
                              </p>
                            </td>
                            <td className="align-middle text-left border-bottom-0 mr-1">
                              <input
                                type="checkbox"
                                className="checkbox"
                                value="collectibles"
                                checked={category === "collectibles" || false}
                              />
                            </td>
                            <td className="align-middle text-left border-bottom-0">
                              <p className="mdm-text mb-0 text-left">
                                {"Collectibles**"}
                              </p>
                            </td>
                          </tr>
                          <tr className="d-flex">
                            <td className="align-middle text-right pt-0 pb-0 pr-1 border-bottom-0">
                              <p className="mdm-text text-bold mb-0">
                                <b>h </b>
                              </p>
                            </td>
                            <td className="align-middle text-left border-bottom-0 mr-1">
                              <input
                                type="checkbox"
                                className="checkbox"
                                value="intellectual"
                                checked={category === "intellectual" || false}
                              />
                            </td>
                            <td className="align-middle text-left border-bottom-0">
                              <p className="mdm-text mb-0 text-left">
                                {"Intellectual Property"}
                              </p>
                            </td>
                          </tr>
                          <tr className="d-flex">
                            <td className="align-middle text-right pt-0 pb-0 pr-1 border-bottom-0">
                              <p className="mdm-text text-bold mb-0">
                                <b>i </b>
                              </p>
                            </td>
                            <td className="align-middle text-left border-bottom-0 mr-1 ml-1">
                              <input
                                type="checkbox"
                                className="checkbox"
                                value="vehicles"
                                checked={category === "vehicles" || false}
                              />
                            </td>
                            <td className="align-middle text-left border-bottom-0">
                              <p className="mdm-text mb-0 text-left">
                                {"Vehicles"}
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td className="text-right pt-0 pb-0 pl-2 pr-2 border-bottom-0">
                      <table className="table border-bottom-0 mb-0">
                        <tbody>
                          <tr className="d-flex">
                            <td className="align-middle text-right pt-0 pb-0 pr-1 border-bottom-0">
                              <p className="mdm-text text-bold mb-0">
                                <b>j </b>
                              </p>
                            </td>
                            <td className="align-middle text-left border-bottom-0">
                              <input
                                type="checkbox"
                                className="checkbox"
                                value="other"
                                checked={category === "other" || false}
                              />
                            </td>
                            <td className="align-middle text-left border-bottom-0">
                              <p className="mdm-text mb-0 text-left">
                                {"Other"}
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          {/* Checkbox List Texts */}
          <tr>
            <td className="align-middle text-left border-bottom-0">
              <p className="mdm-text mb-0">
                {
                  "*Art includes paintings, sculptures, watercolors, prints, drawings, ceramics, antiques, decorative arts, textiles, carpets,  silver, rare manuscripts, historical memorabilia, and other similar objects."
                }
              </p>
            </td>
          </tr>
          <tr>
            <td className="align-middle text-left border-bottom-0">
              <p className="mdm-text mb-0">
                {
                  "**Collectibles include coins, stamps, books, gems, jewelry, sports memorabilia, dolls, etc., but not art as defined above."
                }
              </p>
            </td>
          </tr>
          {/* Note */}
          <tr>
            <td className="align-middle">
              <p className="mb-0 text-left fw-400">
                <span className="fw-500">Note.</span>
                {
                  "In certain cases, you must attach a qualified appraisal of the property. See instructions."
                }
              </p>
            </td>
          </tr>
          {/* Part 1 Table Heading */}
          <tr className="d-flex text-center border-bottom">
            <th className="align-middle border-top-0 col-5 border-right">
              <p className="mdm-text fw-400 pl-0 mb-0 d-flex">
                <b className="col-1">5</b>
                <span className="col-11 text-left">
                  <b className="mr-1">(a)</b>
                  <span>{"Description of donated property (if you need more space,attach a separate statement)"}</span>
                </span>
              </p>              
            </th>
            <th className="align-middle border-top-0 col border-right text-center">
              <p className="mdm-text fw-400 letter-space-0-5 mb-0">
                <b className="mr-1">(b)</b>
                {
                  "If tangible property was donated, give a brief summary of the overall physical condition of the property at the time of the gift"
                }
              </p>
            </th>
            <th className="align-middle border-top-0 col-2">
              <p className="mdm-text fw-400 mb-0">
                <b className="mr-1">(c)</b>
                {"Appraised fair"}
                <br />
                {"market value"}
              </p>
            </th>
          </tr>
          {/* Part 1 Table Data */}
          {this._renderRowItems()}
        </tbody>
      </table>
    );
  }
}

SectionSix.defaultProps = {
  formData: []
};

SectionSix.propTypes = {
  formData: PropTypes.array
};

export default SectionSix;
