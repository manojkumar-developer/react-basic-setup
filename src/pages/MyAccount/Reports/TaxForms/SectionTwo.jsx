/* 

Component : TaxForm - SectionTwo

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";

import { AlphabhetList } from "../../../../constants/lists";

/** ****************************** Import APIS *************************** */
import { displayDate, displayAmount } from "../../../../utils/common";

class SectionTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _renderRowItems = () => {
    const { formData } = this.props;
    if (!formData) return false;
    const dataList = formData.filter(function(data) {
      return data.propertyType === "less_5000";
    });
    const count = dataList.length;
    for (let i = count; i < 5; i++) {
      dataList.push({});
    }
    return dataList.map(function(data, i) {
      const index = i + 1;
      let propertyValue = null;
      if (data.donorCost) {
        propertyValue = data.donorCost;
      } else if (data.propertyValue) {
        propertyValue = data.propertyValue;
      }
      return (
        <tr className="d-flex text-center" key={index}>
          {/* Display Date */}
          <td className="align-middle col-2 border-right text-left d-flex">
            <p className="text-bold mb-0 col-1 pr-4">
              {AlphabhetList[index].value}
            </p>
            <p className="mdm-txt mb-0 col-11 pl-2 border-left-dark pr-2 text-left lh-27">
              {data.date ? displayDate(data.date) : null}
            </p>
          </td>
          {/* Date Acquired */}
          <td className="align-middle col border-right text-left">
            <p className="mdm-txt mb-0 pl-2 pr-2 text-left lh-27">
              {data.dateAcquired ? displayDate(data.dateAcquired) : null}
            </p>
          </td>
          {/* Acquired Details */}
          <td className="align-middle col border-right text-center">
            <p className="mdm-txt mb-0 pl-2 pr-2 text-left lh-27">
              {data.howAcquired}
            </p>
          </td>
          {/* Property Value */}
          <td className="align-middle col border-right text-center">
            <table className="table table-header mb-0 mb-0">
              <tbody>
                <tr className="d-flex">
                  <td className="align-middle border-bottom-0 col-9 border-right text-center">
                    {propertyValue ? (
                      <p className="mdm-txt mb-0 pl-2 pr-2 text-right lh-27">
                        {displayAmount(propertyValue)}
                      </p>
                    ) : (
                      <span className="lh-27">{"\u00A0"}</span>
                    )}
                  </td>
                  <td className="align-middle col-3 border-right-0 border-bottom-0 text-center">
                    <p className="mdm-txt mb-0 text-right lh-27 pr-1">
                      {propertyValue ? `.00` : null}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          {/* Market Value */}
          <td className="align-middle col border-right text-center">
            <table className="table table-header mb-0 mb-0">
              <tbody>
                <tr className="d-flex">
                  <td className="align-middle border-bottom-0 col-9 border-right text-center">
                    {data.marketValue ? (
                      <p className="mdm-txt mb-0 pl-2 pr-2 text-right lh-27">
                        {displayAmount(data.marketValue)}
                      </p>
                    ) : (
                      <span className="lh-27">{"\u00A0"}</span>
                    )}
                  </td>
                  <td className="align-middle col-3 border-right-0 border-bottom-0 text-center">
                    <p className="mdm-txt mb-0 text-right lh-27 pr-1">
                      {data.marketValue ? `.00` : null}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          {/* Market Value Method */}
          <td className="align-middle col-3">
            <p className="mdm-txt mb-0 pl-2 pr-2 text-left lh-27">
              {data.fairMarketValueMethod}
            </p>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <table className="table table-header mb-0 pb-3 mb-0">
        <tbody>
          {/* Note */}
          <tr>
            <td className="align-middle">
              <p className="mb-0 text-left">
                <span className="fw-500">Note.</span>
                <span className="fw-400 pl-1">
                  {
                    "If the amount you claimed as a deduction for an item is $500 or less, you do not have to complete columns (e), (f), and (g)."
                  }
                </span>
              </p>
            </td>
          </tr>
          {/* Part 1 Table Heading */}
          <tr className="d-flex text-center border-bottom">
            <th className="align-middle border-top-0 col-2 border-right important-p-0">
              <p className="mdm-text fw-400 mb-0 d-flex pl-0">
                <b className="col-1 pl-3 pr-4 bg-grey" />
                <span className="col-10 pl-2 pt-1 pb-1 border-left-dark">
                  <b className="mr-1">(d)</b>
                  <span>Date of the contribution</span>
                </span>
              </p>
            </th>
            <th className="align-middle border-top-0 col border-right text-center">
              <p className="mdm-text fw-400 mb-0">
                <b className="mr-1">(e)</b>
                {"Date acquired"}
                <br />
                {"by donor (mo., yr.)"}
              </p>
            </th>
            <th className="align-middle border-top-0 col border-right">
              <p className="mdm-text fw-400 mb-0">
                <b className="mr-1">(f)</b>
                {"How acquired"}
                <br />
                {"by donor"}
              </p>
            </th>
            <th className="align-middle border-top-0 col border-right">
              <p className="mdm-text fw-400 mb-0">
                <b className="mr-1">(g)</b>
                {"Donor's cost"}
                <br />
                {"or adjusted basis"}
              </p>
            </th>
            <th className="align-middle border-top-0 col border-right">
              <p className="mdm-text fw-400 mb-0">
                <b className="mr-1">(h)</b>
                {"Fair market value (see instruction)"}
              </p>
            </th>
            <th className="align-middle border-top-0 col-3">
              <p className="mdm-text fw-400 mb-0">
                <b className="mr-1">(i)</b>
                {"Method used to determine "}
                {"the fair market value"}
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

SectionTwo.defaultProps = {
  formData: []
};

SectionTwo.propTypes = {
  formData: PropTypes.array
};

export default SectionTwo;
