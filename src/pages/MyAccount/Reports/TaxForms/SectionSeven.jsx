/* 

Component : TaxForm - SectionSeven

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";

import { AlphabhetList } from "../../../../constants/lists";

/** ****************************** Import APIS *************************** */
import { displayDate, displayAmount } from "../../../../utils/common";

class SectionSeven extends Component {
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
        <tr className="d-flex text-center" key={index}>
          <td className="align-middle col-2 border-right text-center d-flex">
            <p className="text-bold mb-0 col-1 pr-4 lh-25">{AlphabhetList[index].value}</p>
            <p className="mdm-txt col-11 border-left-dark mb-0 pl-2 pr-2 text-left lh-25">
              {data.dateAcquired ? displayDate(data.dateAcquired) : null}
            </p>
          </td>
          <td className="align-middle col border-right text-center">
            <p className="mdm-txt mb-0 pl-2 pr-2 text-left lh-25">
              {data.howAcquired}
            </p>
          </td>
          <td className="align-middle col-2 border-right text-center">
            <table className="table table-header mb-0 mb-0">
              <tbody>
                <tr className="d-flex">
                  <td className="align-middle border-bottom-0 col-10 border-right text-center">
                    {data.donorCost ? (
                      <p className="mdm-txt mb-0 pl-2 pr-2 text-right lh-25">
                        {displayAmount(data.donorCost)}
                      </p>
                    ) : (
                      <span className="lh-25">{"\u00A0"}</span>
                    )}
                  </td>
                  <td className="align-middle col-2 border-right-0 border-bottom-0 text-center">
                    <p className="mdm-txt mb-0 text-center lh-25">
                      {data.donorCost ? `.00` : null}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td className="align-middle col border-right text-center">
            <table className="table table-header mb-0 mb-0">
              <tbody>
                <tr className="d-flex">
                  <td className="align-middle border-bottom-0 col-10 border-right text-center">
                    {data.amountBargain ? (
                      <p className="mdm-txt mb-0 pl-2 pr-2 text-right lh-25">
                        {displayAmount(data.amountBargain)}
                      </p>
                    ) : (
                      <span className="lh-25">{"\u00A0"}</span>
                    )}
                  </td>
                  <td className="align-middle col-2 border-right-0 border-bottom-0 text-center">
                    <p className="mdm-txt mb-0 text-center lh-25">
                      {data.amountBargain ? `.00` : null}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td className="align-middle col-3 text-center">
            <table className="table table-header mb-0 mb-0">
              <tbody>
                <tr className="d-flex">
                  <td className="align-middle border-0 col-7 border-right text-center">
                    <table className="table table-header mb-0 mb-0">
                      <tbody>
                        <tr className="d-flex">
                          <td className="align-middle border-bottom-0 col-9 border-right text-center">
                            {data.amountClaimed ? (
                              <p className="mdm-txt mb-0 pl-2 pr-2 text-right lh-25">
                                {displayAmount(data.amountClaimed)}
                              </p>
                            ) : (
                              <span className="lh-25">{"\u00A0"}</span>
                            )}
                          </td>
                          <td className="align-middle col-3 border-right-0 border-bottom-0 text-center">
                            <p className="mdm-txt mb-0 text-center lh-25">
                              {data.amountClaimed ? `.00` : null}
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="align-middle border-bottom-0 col-5 text-center">
                    {data.date ? (
                      <p className="mdm-txt mb-0 pl-2 pr-2 text-left lh-25">
                        {displayDate(data.date)}
                      </p>
                    ) : (
                      "\u00A0"
                    )}
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
    return (
      <table className="table table-header mb-0 pb-3 mb-0">
        <tbody>
          {/* Part 1 Table Heading */}
          <tr className="d-flex text-center border-bottom">
            <th className="align-middle border-top-0 col-2 border-right important-p-0">
              <p className="mdm-text fw-400 mb-0 d-flex pl-0">
                <b className="col-1 pl-3 pr-4 bg-grey"></b>
                <span className="col-10 pl-2 border-left-dark pt-1 pb-3">
                  <b className="mr-1">(d)</b>
                  <span>
                    {"Date acquired"}<br/>
                    {"by donor (mo., yr.)"}
                  </span>
                </span>
              </p>              
            </th>            
            <th className="align-middle border-top-0 col border-right text-center">
              <p className="mdm-text fw-400 mb-0 pt-1">
                <b className="mr-1">(e)</b>
                {"How acquired by donor"}
              </p>
            </th>
            <th className="align-middle border-top-0 col-2 border-right">
              <p className="mdm-text fw-400 mb-0 pt-1">
                <b className="mr-1">(f)</b>
                {"Donor’s cost or"}<br/>
                {"adjusted basis"}
              </p>
            </th>
            <th className="align-middle border-top-0 col border-right">
              <p className="mdm-text fw-400 mb-0 pt-1">
                <b className="mr-1">(g)</b>
                {"For bargain sales, enter amount received"}
              </p>
            </th>
            <th className="align-middle border-top-0 col-3 section-b-see-inst pl-0 pr-0 pb-0">
              <p className="mdm-text mb-0 fw-400 text-center">See instructions</p>
              <table className="table table-header mb-0 mb-0 section-b-see-instructions">
                <tbody>
                  <tr className="d-flex">
                    <td className="align-middle col border-right border-top border-bottom-0 text-center">
                      <p className="small pt-1 fw-400 pb-1 fs-12 mb-0">
                        <b className="mr-1">(h)</b>
                        {"Amount claimed as"}<br/>
                        {"a deduction"}
                      </p>
                    </td>
                    <td className="align-middle col border-top border-bottom-0 text-center col-5">
                      <p className="small fw-400 pt-1 pb-1 fs-12 mb-0">
                        <b>(i) </b>
                        {"Date of contribution"}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </th>
          </tr>
          {/* Table Data */}
          {this._renderRowItems()}
        </tbody>
      </table>
    );
  }
}

SectionSeven.defaultProps = {
  formData: []
};

SectionSeven.propTypes = {
  formData: PropTypes.array
};

export default SectionSeven;
