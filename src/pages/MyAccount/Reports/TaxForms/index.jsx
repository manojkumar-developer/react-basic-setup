/* 

Component : TaxForm - Index

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { dripForm } from "react-drip-form";

/** ****************************** Import FormElements *************************** */
import SelectField from "../../../../components/FormElements/SelectField";
import CheckBox from "../../../../components/FormElements/CheckBox";

/** ****************************** Import APIS *************************** */
// import { getTaxFormByYear } from "/imports/api/grants";

/** ****************************** Import Constants and Common Functions *************************** */
import { yearList } from "../../../../constants/lists";
import myAccountTitleConstants from "../../../../constants/my-account-titles";
import { taxFormConstants } from "../../../../constants/my-account-constants";
import noRecordsFoundConstants from "../../../../constants/no-records-found";

class TaxForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalRecords: null,
      userId: null,
      currentYear: new Date().getFullYear(),
      taxFormAccept: false
    };
  }

  // _loadData = () => {
  //   const userId = Session.get("currentUserId");
  //   const { currentYear } = this.state;
  //   if (userId) {
  //     getTaxFormByYear(userId, currentYear).then(taxFormData => {
  //       this.setState({
  //         userId,
  //         totalRecords: taxFormData[0].totalRecords
  //       });
  //     });
  //   }
  // };

  _displayItem = () => {
    const { disable } = this.state;
    const isVisible = !disable;
    this.setState({ disable: isVisible });
  };

  _changeYear = event => {
    const currentYear = event.target.value;
    const { oldYear } = this.state;
    if (oldYear !== currentYear) {
      this.setState({ currentYear });
      this._loadData();
    }
  };

  _isTaxAccept = () => {
    const isChecked = document.getElementById("isTaxFormAccept").checked;
    if (isChecked) {
      this.setState({
        taxFormAccept: true
      });
      // this._loadData();
    } else {
      this.setState({
        taxFormAccept: false
      });
    }
  };

  render() {
    const { userId, currentYear } = this.state;
    const { totalRecords, taxFormAccept } = this.state;
    return (
      <div className="right-content table-right-content">
        {/* <!-- Recent Activities --> */}
        <table className="table table-header mb-4 table-responsive-sm">
          <tbody>
            <tr className="d-flex">
              <td className="align-middle pt-0 pb-0 col-12 border-0">
                <h3 className="fw-500 border-bottom pb-3 mb-3">
                  {myAccountTitleConstants.taxForms.title}
                </h3>
                <span className="d-flex mt-4 pl-3 tax-forms">
                  <CheckBox
                    className="pl-0 p-0 pr-0 blue"
                    id="isTaxFormAccept"
                    name="isTaxFormAccept"
                    color="primary"
                    onClick={() => this._isTaxAccept()}
                  />
                  <p className="col-12 pl-0">
                    {taxFormConstants.taxForm.text}                    
                  </p>
                </span>
                <span className={taxFormAccept ? `row mt-3 ml-sm-4 ml-auto` : `d-none`}>
                  <span className="col-sm-5">
                    <SelectField
                      className="select-input-fields width-100"
                      id="selectContributionYear"
                      name="selectContributionYear"
                      labeltext="Select Contribution Year"
                      source={yearList}
                      onClick={() => this._displayItem()}
                      onChange={data => this._changeYear(data)}
                      value={currentYear}
                    />
                  </span>
                  <span className="col-sm-7 pt-4 text-left align-middle">
                    {totalRecords > 0 ? (
                      <NavLink
                        target="_blank"
                        to={`/tax-form/${userId}/${currentYear}`}
                        className="btn btn-custom btn-border"
                      >
                        <i className="fa fa-file mr-2" aria-hidden="true" />
                        <span className="btn-text">{taxFormConstants.taxForm.btnText}  </span>
                      </NavLink>
                    ) : null}
                  </span>                  
                </span>
                <span className="row ml-auto">
                  <span className="col-md-5">
                  {totalRecords === 0 ? (                    
                      <div className="ml-sm-4 no-records-tax-forms p-3">                      
                        <h6 className="text-danger mb-0">{noRecordsFoundConstants.noRecordsFound.title}</h6>
                      </div>
                    ) : null}
                  </span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default dripForm({})(TaxForms);
