/* 

Component : Referral 

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";

/** ****************************** Import components *************************** */
import ApprovalList from "./ApprovalList";
import ReferralList from "./ReferralList";
import ShareDetails from "./ShareDetails";

/** ******************* Import Constants and Common Functions **************** */
import { referralConstants } from "../../../constants/my-account-constants";

class Referral extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: []
    };
  }

  // componentWillMount() {
  //   const userData = Session.get("currentUser");
  //   // get data from APIs
  //   if (userData) {
  //     this.setState({ userData });
  //   }
  // }

  render() {
    const { userData } = this.state;
    const referralCode = userData.referralCode || null;
    return (
      <div className="right-content table-right-content">
        <div className="dashboard donation-details border-0">
          {/* Dashboard Box */}
          <div className="dashboard-box">
            {/* Dashboard Header */}
            <div className="dashboard-header pb-2">
              <div className="row">
                <div className="col-xl-12 col-md-12 col-sm-12 mb-3">
                  <div className="border-bottom">
                    <h3 className="fw-500 referral-main-title">
                      {referralConstants.referralTitle.title}
                    </h3>
                    <p>{referralConstants.referralTitle.text1}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* {Current & Graph Details} */}
            <ShareDetails referralCode={referralCode} />
            {/* Verification */}
            <div className="dashboard-friend-verification">
              <div className="row">
                {/* ApprovalList */}
                <ApprovalList />
                {/* ReferralList */}
                <ReferralList />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Referral;
