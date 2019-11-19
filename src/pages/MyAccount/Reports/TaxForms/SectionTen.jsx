/* 

Component : TaxForm - SectionTen

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";

/** ****************************** Import APIS *************************** */
import { displayDate } from "../../../../utils/common";

/** ****************************** Import APIS *************************** */
import { getCharityById } from "../../../../api/charities";

class SectionTen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charityData: []
    };
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.formData[0]) {
      const id = nextProps.formData[0].charityId;
      // get data from APIs
      getCharityById(id).then(charityData => {
        this.setState({ charityData });
      });
    }
  };

  render() {
    const { formData } = this.props;
    const { charityData } = this.state;

    const addressDetails = charityData.mailingAddress
      ? charityData.mailingAddress
      : [];
    return (
      <div>
        <table className="table table-header mb-0">
          <tbody>
            <tr>
              <td className="align-middle pt-0 pb-0">
                <p className="mb-0 text-left d-flex">
                  <span>
                    <b className="bg-dark text-white pt-1 lh-25 pb-1 pl-2 pr-2">
                      <span className="pt-1">Part IV</span>
                    </b>
                  </span>
                  <span className="pl-5 section-part-page-2-title">
                    <span className="fw-500">Donee Acknowledgment - </span>
                    <span className="fw-400">
                      {"To be completed by the charitable organization."}
                    </span>
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td className="align-middle pt-0 border-bottom-0 mb-2">
                <p className="mb-0 fw-400">
                  <span>{
                    "This charitable organization acknowledges that it is a qualified organization under section 170(c) and that it received the donated property as described in Section B, Part I, above on the following date"
                  }</span>
                  <span className="ml-1 mr-1">▶</span>
                  <span className="mdm-txt mb-0 text-left fw-500 border-bottom">
                    {displayDate(formData.date)}
                    {"\u00A0"}
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td className="align-middle pt-0 border-bottom-0">
                <p className="mb-0 fw-400">
                  {"Furthermore, this organization affirms that in "}
                  {"the event it sells, exchanges, or otherwise "}
                  {"disposes of the property described in Section B, "}
                  {"Part I (or any portion thereof) within 3 years "}
                  {"after the date of receipt, it will file"}
                  <span className="fw-500"> Form 8282</span>
                  {", Donee Information Return, with the IRS and give the "}
                  {"donor a copy of that form. This acknowledgment "}
                  {"does not represent agreement with the claimed "}
                  {"fair market value."}
                </p>
              </td>
            </tr>
            <tr>
              <td className="align-middle pt-0">
                <p className="mb-0 fw-400">
                  {
                    "Does the organization intend to use the property for an unrelated use? .........................................................................................................."
                  }
                  <span className="float-right">
                    <span>▶</span>
                    <span>
                      <input type="checkbox" className="checkbox" />
                    </span>
                    <span className="mb-0">Yes</span>
                    <span>
                      <input type="checkbox" className="checkbox" />
                    </span>
                    <span>No</span>
                  </span>
                </p>
              </td>
            </tr>
            {/* Name */}
            <tr className="d-flex">
              <td className="align-middle col-6 pt-0 pb-0 border-right">
                <p className="mdm-txt mb-0 text-left fw-400">
                  {"Name of charitable organization (donee)"}
                </p>
                <p className="mdm-txt mb-0 text-left ">
                  {charityData.charityName ? charityData.charityName : "\u00A0"}
                </p>
              </td>
              <td className="align-middle col-6 pt-0 pb-0">
                <p className="mdm-txt mb-0 fw-500 pl-2 pr-2 text-left">
                  {"Employer identification number"}
                </p>
                <p className="mdm-txt mb-0 pl-2 pr-2 text-left ">
                  {charityData.ein ? charityData.ein : "\u00A0"}
                </p>
              </td>
            </tr>
            {/* Address */}
            <tr className="d-flex">
              <td className="align-middle col-6 pt-0 pb-0 border-right">
                <p className="mdm-txt mb-0 text-left fw-400">
                  {"Address (number, street, and room or suite no.)"}
                </p>
                <p className="mdm-txt mb-0 text-left ">
                  {addressDetails.streetAddress1
                    ? `${charityData.mailingAddress.streetAddress1}, `
                    : null}
                  {addressDetails.streetAddress2
                    ? `${charityData.mailingAddress.streetAddress2}`
                    : null}
                </p>
              </td>
              <td className="align-middle col-6 pt-0 pb-0">
                <p className="mdm-txt mb-0 pl-2 pr-2 text-left fw-400">
                  {"City or town, state, and ZIP code"}
                </p>
                <p className="mdm-txt mb-0 pl-2 pr-2 text-left ">
                  {addressDetails.city
                    ? `${charityData.mailingAddress.city}, `
                    : null}
                  {addressDetails.state
                    ? `${charityData.mailingAddress.state} - `
                    : null}
                  {addressDetails.zipcode
                    ? `${charityData.mailingAddress.zipcode}.`
                    : null}
                </p>
              </td>
            </tr>
            {/* Sign */}
            <tr className="d-flex">
              <td className="align-middle col-6 pt-0 pb-0 border-right">
                <p className="mdm-txt mb-0 text-left fw-400">
                  {"Authorized signature"}
                </p>
                <p className="mdm-txt mb-0 text-left">{"\u00A0"}</p>
              </td>
              <td className="align-middle col-3 pt-0 pb-0 border-right">
                <p className="mdm-txt mb-0 pl-2 pr-2 fw-400 text-left">
                  {"Title"}
                </p>
                <p className="mdm-txt mb-0 text-left ">{"\u00A0"}</p>
              </td>
              <td className="align-middle col-3 pt-0 pb-0">
                <p className="mdm-txt mb-0 pl-2 pr-2 fw-400 text-left">Date</p>
                <p className="mdm-txt mb-0 pl-2 text-left">
                  {displayDate(formData.date)}
                  {"\u00A0"}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="page-2-footer-details">
          <table className="table table-header mb-0">
            <tbody>
              {/* Form */}
              <tr>
                <td className="pt-0 pb-0 border-bottom-0">
                  <p className="mdm-txt mb-0 text-right">
                    <sub>Form</sub>
                    <span className="form-8283-font-footer ml-1 mr-1">
                      {"8283"}
                    </span>
                    <sub>(Rev. 12-2014)</sub>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

SectionTen.defaultProps = {
  formData: []
};

SectionTen.propTypes = {
  formData: PropTypes.array
};

export default SectionTen;
