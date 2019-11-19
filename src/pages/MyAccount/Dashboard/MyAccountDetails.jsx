/* 

Component : MyAccountDetails

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

/** ******************* Import Constants and Common Functions **************** */
import myAccountTitleConstants from "../../../constants/my-account-titles";
import { displayAmount } from "../../../utils/common";

class MyAccountDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { dashBoardData } = this.props;

    return (
      <div className="row">
        {/* Cash Contributions */}
        <div className="col-xl-4 col-lg-6 col-md-6 mb-4">
          <NavLink to="/account/cash-contributions" className="text-dark">
            <div className="dashboard-cash-contributions hover-box-shadow border rounded bg-white d-flex height-100 pt-3 pb-3">
              <span className="pl-3 pr-3 text-left">
                <img
                  src="/image/icons/blue/addmoney-blue.svg"
                  width="40"
                  height="40"
                  className="dashboard-icon-cash"
                  alt=""
                />
              </span>
              <h6 className="fw-500 col-4 mb-0 pl-0 pr-0">
                {myAccountTitleConstants.cashContributions.title}
              </h6>
              <h4 className="fw-300 blue col mb-0 text-right pl-0">
                {/* {displayAmount(dashBoardData.cash_contributions)} */}
              </h4>
            </div>
          </NavLink>
        </div>
        {/* Non Cash Contributions */}
        <div className="col-xl-4 col-lg-6 col-md-6 mb-4">
          <NavLink to="/account/noncash-contributions" className="text-dark">
            <div className="dashboard-noncash-contributions hover-box-shadow border rounded bg-white d-flex height-100 pt-3 pb-3">
              <span className="pl-3 pr-3 text-left">
                <img
                  src="/image/icons/blue/love-blue.svg"
                  width="40"
                  height="40"
                  className="dashboard-icon-cash"
                  alt=""
                />
              </span>
              <h6 className="fw-500 col-5 mb-0 pl-0 pr-0">
                {myAccountTitleConstants.noncashContributions.title}
              </h6>
              <h4 className="fw-300 blue col mb-0 text-right pl-0">
                {/* {displayAmount(dashBoardData.non_cash_contributions)} */}
              </h4>
            </div>
          </NavLink>
        </div>
        {/* Unallocated Funds */}
        <div className="col-xl-4 col-lg-6 col-md-6 mb-4">
          <NavLink to="#" className="text-dark">
            <div className="unallocated-funds border hover-box-shadow rounded bg-white d-flex height-100 pt-3 pb-3">
              <span className="pl-3 pr-3 text-left">
                <img
                  src="/image/icons/myunallocatedfunds.svg"
                  width="40"
                  height="40"
                  className="dashboard-icon-cash"
                  alt=""
                />
              </span>
              <h6 className="fw-500 col-4 mb-0 pl-0 pr-0">
                {myAccountTitleConstants.myUnallocatedFunds.title}
              </h6>
              <h4 className="fw-300 blue col mb-0 text-right pl-0">
                {/* {displayAmount(dashBoardData.unallocated_funds)} */}
              </h4>
            </div>
          </NavLink>
        </div>
        {/* My Grants */}
        <div className="col-xl-4 col-lg-6 col-md-6 mb-4">
          <NavLink to="/account/grants" className="text-dark">
            <div className="dashboard-noncash-grants hover-box-shadow rounded border bg-white d-flex height-100 pt-3 pb-3">
              <span className="pl-3 pr-3 text-left">
                <img
                  src="/image/icons/mygrants.svg"
                  width="40"
                  height="40"
                  className="dashboard-icon-cash my-time"
                  alt=""
                />
              </span>
              <h6 className="fw-500 col-4 mb-0 pl-0 pr-0">
                {myAccountTitleConstants.myGrants.title}
              </h6>
              <h4 className="fw-300 blue col mb-0 text-right pl-0">
                {/* {displayAmount(dashBoardData.grants)} */}
              </h4>
            </div>
          </NavLink>
        </div>
        {/* Cash Grants */}
        <div className="col-xl-4 col-lg-6 col-md-6 mb-4">
          <NavLink to="/account/direct-grants" className="text-dark">
            <div className="dashboard-cash-grants border hover-box-shadow rounded bg-white d-flex height-100 pt-3 pb-3">
              <span className="pl-3 pr-3 text-left">
                <img
                  src="/image/icons/directcashgrants.svg"
                  width="40"
                  height="40"
                  className="dashboard-icon-cash"
                  alt=""
                />
              </span>
              <h6 className="fw-500 col-5 mb-0 pl-0 pr-0">
                {myAccountTitleConstants.cashGrants.title}
              </h6>
              <h4 className="fw-300 blue col mb-0 text-right pl-0">
                {/* {displayAmount(dashBoardData.cash_grants)} */}
              </h4>
            </div>
          </NavLink>
        </div>
        {/* Non Cash Grants */}
        <div className="col-xl-4 col-lg-6 col-md-6 mb-4">
          <NavLink to="/account/direct-noncash-grants" className="text-dark">
            <div className="dashboard-noncash-grants hover-box-shadow rounded border bg-white d-flex height-100 pt-3 pb-3">
              <span className="pl-3 pr-3 text-left">
                <img
                  src="/image/icons/directnoncashgrants.svg"
                  width="40"
                  height="40"
                  className="dashboard-icon-cash"
                  alt=""
                />
              </span>
              <h6 className="fw-500 col-5 mb-0 pl-0 pr-0">
                {myAccountTitleConstants.noncashGrants.title}
              </h6>
              <h4 className="fw-300 blue col mb-0 text-right pl-0">
                {/* {displayAmount(dashBoardData.non_cash_grants)} */}
              </h4>
            </div>
          </NavLink>
        </div>
      </div>
    );
  }
}

MyAccountDetails.propTypes = {
  dashBoardData: PropTypes.object.isRequired
};

export default MyAccountDetails;
