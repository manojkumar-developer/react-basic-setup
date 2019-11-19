/*

Component : Profile

*/
/** ****************************** Import packages *************************** */
import React, { Component } from "react";
//import { createContainer } from "meteor/react-meteor-data";
//import { Session } from "meteor/session";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/** ****************************** Import subclass *************************** */
import ProfileForm from "./ProfileForm";
import Header from "../Header";

/** ****************************** Import Constants *************************** */
import myAccountFormConstants from "../../../constants/my-account-forms";

/** ****************************** Import APIS *************************** */
//import { getUserById, updateUserById } from "../../api/users";

/** ****************************** Import libraries **************************** */
import History from "../../../utils/History";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitting: false
    };
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInitialize = form => {
    this.form = form;
  };

  // handleSubmit = userData => {
  //   const userId = Session.get("currentUserId");
  //   const self = this;
  //   this.setState({ submitting: true });
  //   updateUserById(userId, userData).then((result, err) => {
  //     if (err) {
  //       toast.error(myAccountFormConstants.errorMsg.text);
  //     } else {
  //       toast.success(myAccountFormConstants.userDetailsSuccessMsg.text);
  //     }
  //   });
  //   Meteor.setTimeout(function() {
  //     self.setState({ submitting: false });
  //     History.push("/settings/profile");
  //   }, 3000);
  // };

  render() {
    const { userData } = this.props;
    const { submitting } = this.state;
    return (
      <div>
        <Header userDetails={userData} />
        <div className="profile-details pt-3">
          <ProfileForm
            submitting={submitting}
            onInitialize={this.handleInitialize}
            onValidSubmit={this.handleSubmit}
            userData={userData}
            {...this.props}
          />
          {/* Msg Notication Box */}
          <ToastContainer autoClose={3000} />
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  userData: PropTypes.object.isRequired
};

export default Profile;

// export default createContainer(() => {
//   const currentUser = Session.get("currentUserId");
//   const handle = Meteor.subscribe("collect_user_by_id", currentUser);
//   const userData = getUserById(currentUser);
//   const loading = !handle.ready();
//   return {
//     userData,
//     loading
//   };
// }, Profile);
