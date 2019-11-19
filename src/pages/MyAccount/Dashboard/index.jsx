/* 

Component : Dashboard

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
//import { createContainer } from "meteor/react-meteor-data";
import Button from "@material-ui/core/Button";
import { toast } from "react-toastify";

/** ****************************** Import components *************************** */
import TotalGranted from "./TotalGranted";
import MyAccountDetails from "./MyAccountDetails";

/** ******************* Import Constants and Common Functions **************** */
import myAccountTitleConstants from "../../../constants/my-account-titles";
import myAccountFormConstants from "../../../constants/my-account-forms";
import { displayName } from "../../../utils/common";

/** ****************************** Import libraries **************************** */
import { getLocalUser } from "../../../utils/auth";

/** ****************************** Import API *************************** */
// import { getDashboardByUserId } from "/imports/api/users";
// import { sendVerifiyCodeByUser } from "/imports/api/users";
// import { updateStellarByUserById } from "/imports/api/users";
// import { getUserById } from "/imports/api/users";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVerified: true
    };
  }

  // componentWillMount = () => {
  //   const userData = Session.get("currentUser");
  //   if (userData && userData._id) {
  //     updateStellarByUserById(userData._id);
  //   } else {
  //     window.location.href = "/login";
  //   }
  // };

  componentWillReceiveProps = nextProps => {
    const userData = nextProps.userData;
    if (userData.length !== 0) {
      this.setState({
        isVerified: userData.verified
      });
    }
  };

  // sendVerifyEmail = () => {
  //   const { userData } = this.props;
  //   sendVerifiyCodeByUser(userData)
  //     .then(result => {
  //       if (result) {
  //         toast.success(myAccountFormConstants.sendVerifyEmailMsg.text);
  //       }
  //     })
  //     .catch(error => {
  //       if (error) {
  //         toast.error(myAccountFormConstants.errorMsg.text);
  //       }
  //     });
  // };

  renderSendEmail = () => {
    const { isVerified } = this.state;
    return (
      <div>
        <div
          className={isVerified === true ? `d-none` : `mail-verify-error mb-3`}
        >
          <span className="mdm-text box-shadow pl-2 pt-2 pb-2 email-verify-alert text-danger">
            {myAccountTitleConstants.dashboard.verifyAlertText}
          </span>
          <span className="resend-btn">
            <Button
              color="primary"
              variant="contained"
              size="small"
              className="blue-bg ml-2 pl-3 pr-3 text-inherit"
              onClick={() => this.sendVerifyEmail()}
            >
              {myAccountTitleConstants.dashboard.verifyAlertButtonText}
            </Button>
          </span>
        </div>
      </div>
    );
  };

  render() {
    const { dashBoardData, userData } = this.props;
    //const firstName = userData.firstName || null;
    //const lastName = userData.lastName || null;
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
                    <h3 className="fw-500 dashboard-main-title mb-3">
                      <span className="mr-1">
                        {myAccountTitleConstants.dashboard.title}
                      </span>
                      <span className="mr-1 fw-600">
                        {/* {firstName ? displayName(firstName, lastName) : null}
                        {firstName ? `, ` : null} */}
                      </span>
                      <span className="mr-1">
                        {myAccountTitleConstants.dashboard.welcomeText}
                      </span>
                    </h3>
                    <div>{this.renderSendEmail()}</div>
                  </div>
                </div>
              </div>
            </div>
            {/* {Current & Graph Details} */}
            <div className="dashboard-graph text-center">
              <TotalGranted dashBoardData={dashBoardData} />
            </div>
            {/* Dashboard Details */}
            <div className="dashboard-details-inner border-0">
              {/* My Contributions */}
              <MyAccountDetails dashBoardData={dashBoardData} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  dashBoardData: PropTypes.object.isRequired,
  userData: PropTypes.object.isRequired
};

export default Dashboard;

// export default createContainer(() => {
//   const currentUser = getLocalUser();
//   if (currentUser) {
//     Session.set("currentUserId", currentUser._id);
//     Session.set("currentUser", currentUser);
//     const handle = Meteor.subscribe("collect_user_by_id", currentUser._id);
//     Meteor.subscribe("collect_dashboard_by_userid", currentUser._id);
//     const dataArray = getDashboardByUserId(currentUser._id);
//     const userData = getUserById(currentUser._id);
//     const loading = !handle.ready();
//     const dashBoardData = dataArray || [];
//     return {
//       dashBoardData,
//       userData,
//       loading
//     };
//   }
//   Session.set("currentUserId", null);
//   Session.set("currentUser", null);

//   const dashBoardData = {};
//   const userData = {};
//   const loading = false;
//   return {
//     dashBoardData,
//     userData,
//     loading
//   };
// }, Dashboard);
