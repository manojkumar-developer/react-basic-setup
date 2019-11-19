/* 

Component : TaxForm - SectionOne

*/

/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";

import { AlphabhetList } from "../../../../constants/lists";

class SectionOne extends Component {
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
      return (
        <tr className="d-flex text-center alphabet-index p-l-height" key={index}>
          <td className="align-middle col-4 border-right text-center d-flex">
            <p className="text-bold mb-0 col-1 pr-4">{AlphabhetList[index].value}</p>
            <p className="mdm-txt mb-0 col-11 border-left pl-2 pr-2 text-left">
              {data.organization ? `${data.organization} ` : null}
              {data.organizationAddress
                ? `${data.organizationAddress}, `
                : null}
              {data.organizationCity ? `${data.organizationCity}, ` : null}
              {data.organizationState ? `${data.organizationState} - ` : null}
              {data.organizationZipCode ? `${data.organizationZipCode}` : null}
              {!data.organization && data.transactionId ? `TrueKarma` : null}
            </p>
          </td>
          <td className="align-middle col border-right text-center d-flex">
            <span className="text-right col pr-0">
              <input
                type="checkbox"
                className="checkbox mt-1 mb-1"
                name={`nccheck${index}`}
                defaultChecked={data.vehicleId}
              />
            </span>
            <span className="text-left col pl-0">
              <p className="mdm-txt mb-0 pl-0 pr-2 text-left">
                {data.vehicleId}
              </p>
            </span>
          </td>
          <td className="align-middle col-4">
            <p className="mdm-txt mb-0 pl-2 pr-2 text-left ">
              {data.description}
            </p>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <table className="table table-header section-a-part-1 mb-0 pb-3 mb-0">
        <tbody>
          {/* Part 1 Information */}
          <tr>
            <td className="align-middle pt-0 pb-0">
              <p className="mb-0 text-left d-flex">
                <span>        
                  <b className="bg-dark text-white pt-1 lh-25 pl-2 pr-2 pb-1">
                    {"Part I"}
                  </b>
                </span>
                <span className="pl-5 section-part-title">
                  <span className="fw-500">
                    {"Information on Donated Property — "}
                  </span>
                  <span className="fw-400">
                    {"If you need more space, attach a statement."}
                  </span>
                </span>  
              </p>
            </td>
          </tr>
          {/* Part 1 Table Heading */}
          <tr className="d-flex text-center border-bottom">            
            <th className="align-middle border-top-0 col-4 border-right">
              <p className="mdm-text fw-400 pl-0 mb-0 d-flex">
                <b className="col-1">1</b>
                <span className="col-11 text-left">
                  <b className="mr-1">(a)</b>
                  <span>{"Name and address of the donee"}</span><br/>
                  <span>{"organization"}</span>
                </span>
              </p>
            </th>
            <th className="align-middle border-top-0 col-4 border-right text-center">
              <p className="mdm-text fw-400 mb-0">
                <b className="mr-1">(b)</b>
                <span>{"If donated property is a vehicle (see instructions), check the box. Also enter the vehicle identification number (unless Form 1098-C is attached)."}</span>
              </p>
            </th>
            <th className="align-middle border-top-0 col-4">
              <p className="mdm-text fw-400 mb-0">
                <b className="mr-1">(c)</b>
                <span>{"Description of donated property(For a vehicle, enter the year, make, model, and mileage. For securities, enter the company name and the number of shares.)"}</span>
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

SectionOne.defaultProps = {
  formData: []
};

SectionOne.propTypes = {
  formData: PropTypes.array
};

export default SectionOne;
