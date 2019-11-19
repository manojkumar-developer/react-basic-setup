/*
   
Component : Settings

*/
/** ****************************** Import packages *************************** */
//import { Session } from "meteor/session";
import React, { Component } from "react";
//import { createContainer } from "meteor/react-meteor-data";
import PropTypes from "prop-types";

/** ****************************** Import SubClasses *************************** */
import SideMenu from "../../pages/Settings/SideMenu";
import Profile from "../../pages/Settings/Profile";
import ChangePassword from "../../pages/Settings/ChangePassword";
import Stellar from "../../pages/Settings/Stellar";

/** ****************************** Import APIS *************************** */
//import { getUserById } from "/imports/api/users";

/** ****************************** Import libraries **************************** */
import History from "../../utils/History";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentWillMount = () => {
  //   const currentUser = Session.get("currentUserId");
  //   if (!currentUser) {
  //     History.push("/");
  //   }
  // };

  renderPage () {
    const {
      match: { params },
      userData
    } = this.props;
    if (params.page === "profile") {
      return <Profile />;
    }
    if (params.page === "change-password") {
      return <ChangePassword />;
    }
    if (params.page === "stellar") {
      return <Stellar userData={userData} />;
    }
  };

  render() {
    return (
      <div className="main-wrapper">
        <div className="myaccount">
          <div className="container">
            <div className="row">
              {/** Left Sidebar * */}
              <SideMenu />
              {/** Right Content * */}
              <div className="col-xl-9 col-lg-9">
                <div className="right-content table-right-content pt-4">
                  <div className="edit-profile">
                    {/* <!-- Details --> */}
                    {this.renderPage()}
                  </div>
                </div>
              </div>
              {/** Right Content Ends * */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Settings.propTypes = {
  match: PropTypes.object.isRequired,
  userData: PropTypes.object.isRequired
};

export default Settings;

// export default createContainer(() => {
//   const currentUser = Session.get("currentUserId");
//   const handle = Meteor.subscribe("collect_user_by_id", currentUser);
//   const userData = getUserById(currentUser);
//   const loading = !handle.ready();
//   return {
//     userData,
//     loading
//   };
// }, Settings);
