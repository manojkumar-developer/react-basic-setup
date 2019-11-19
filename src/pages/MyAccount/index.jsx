/* 

Component : MyAccount

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";

/** ****************************** Import Components *************************** */
import SideMenu from "./SideMenu";

/** ****************************** Import Constants *************************** */
import myAccountTitleConstants from "../../constants/my-account-titles";

/** ****************************** Import MyAccount Pages *************************** */
import Dashboard from "./Dashboard";
import Referral from "./Referral";
import CashContributions from "./Cash-Contributions";
import NoncashContributions from "./Noncash-Contributions";
import Grants from "./Grants";
import CashGrants from "./Cash-Grants";
import NoncashGrants from "./Noncash-Grants";
import MyTime from "./My-Time";
import Credits from "./Credits";
import MyCharities from "./My-Charities";
import MyCharts from "./My-Charts";
import TaxReports from "./Reports/TaxReports";
import TaxForms from "./Reports/TaxForms";

/** ****************************** Import libraries **************************** */

import History from "../../utils/History";

class MyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentWillMount = () => {
  //   const currentUser = Session.get("currentUserId");
  //   if (!currentUser) {
  //     History.push("/login");
  //   }
  // };

  // componentWillReceiveProps = () => {
  //   const currentUser = Session.get("currentUserId");
  //   if (!currentUser) {
  //     History.push("/login");
  //   }
  // };

  renderPages = () => {
    const {
      match: { params }
    } = this.props;
    if (params.page === "dashboard") {
      return <Dashboard />;
    }
    if (params.page === "referral") {
      return <Referral />;
    }
    if (params.page === "cash-contributions") {
      return <CashContributions />;
    }
    if (params.page === "noncash-contributions") {
      return <NoncashContributions />;
    }
    if (params.page === "grants") {
      return <Grants />;
    }
    if (params.page === "direct-grants") {
      return <CashGrants />;
    }
    if (params.page === "direct-noncash-grants") {
      return <NoncashGrants />;
    }
    if (params.page === "my-time") {
      return <MyTime />;
    }
    if (params.page === "credits") {
      return <Credits />;
    }
    if (params.page === "tax-reports") {
      return <TaxReports />;
    }
    if (params.page === "tax-forms") {
      return <TaxForms />;
    }
    if (params.page === "my-charities") {
      return <MyCharities />;
    }
    if (params.page === "my-charts") {
      return <MyCharts />;
    }
  };

  render() {
    return (
      <div className="main-wrapper">
        <div className="myaccount dashboard text-left">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3">
                <div className="left-sidebar sticky-top mb-3">
                  <div className="quick-links my-account-sidebar">
                    <div className="card mb-3">
                      <div className="card-header">
                        <h5 className="mb-0">{myAccountTitleConstants.myAccountSideMenu.title}</h5>
                      </div>
                      <div id="quickLinksSidebar" className="card-body">
                        <SideMenu />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9">{this.renderPages()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MyAccount.propTypes = {
  match: PropTypes.object.isRequired
};

export default MyAccount;
