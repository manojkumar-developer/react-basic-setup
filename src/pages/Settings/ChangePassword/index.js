/*

Component : ChangePassword

*/

/** ****************************** Import packages *************************** */
import React, { Component } from "react";
//import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/** ****************************** Import subclass *************************** */
import ChangePasswordForm from "./ChangePasswordForm";

/** ****************************** Import Constants *************************** */
//import myAccountFormConstants from "../../../constants/my-account-forms";

/** ****************************** Import APIS *************************** */
//import { updatePasswordById } from "/imports/api/users";

class ChangePassword extends Component {
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

  // handleSubmit = inputData => {
  //   if (inputData.oldPassword === inputData.newPassword) {
  //     this.setState({ errorMsg: myAccountFormConstants.passwordErrorMsg.text }); 
  //     Meteor.setTimeout(function() {
  //       this.setState({ errorMsg: null });
  //     }, 3000);
  //     return false;
  //   }
  //   const userId = Session.get("currentUserId");
  //   const self = this;
  //   this.setState({ submitting: true });
  //   updatePasswordById(userId, inputData).then((result, err) => {
  //     if (err) {
  //       toast.error(myAccountFormConstants.errorMsg.text);
  //     } else {
  //       toast.success(myAccountFormConstants.passwordSucessMsg.text);
  //     }
  //   });
  //   Meteor.setTimeout(function() {
  //     self.setState({ submitting: false });
  //   }, 3000);
  // };

  render() {
    const { submitting } = this.state;

    return (
      <div className="profile-details">
        <ChangePasswordForm
          {...this.props}
          submitting={submitting}
          onInitialize={this.handleInitialize}
          onValidSubmit={this.handleSubmit}
        />
        {/* Msg Notication Box */}
        {/* <ToastContainer autoClose={3000}/>  */}
      </div>
    );
  }
}

export default ChangePassword;
