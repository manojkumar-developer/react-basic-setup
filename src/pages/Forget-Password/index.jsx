/*
   
ForgetPassword

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/** ****************************** Import Components *************************** */
import ForgetPasswordForm from "./ForgetPasswordForm";

/* ***************************** Import constants ************************* */
import { ForgetPasswordContants } from "../../constants/login";
import myAccountFormConstants from "../../constants/my-account-forms";

/** ****************************** Import libraries **************************** */
import History from "../../utils/History";
//import { recoverPasswordByEmail } from "/imports/api/users";

class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitting: false,
      loading: false
    };
  }

  handleInitialize = form => {
    this.form = form;
  };

  // handleSubmit = userData => {
  //   const self = this;
  //   this.setState({ submitting: true});
  //   recoverPasswordByEmail(userData.email)
  //     .then(result => {
  //       if (result) {          
  //         toast.success(myAccountFormConstants.changePasswordSucessMsg.text);
  //         Meteor.setTimeout(function() {
  //           self.setState({
  //             submitting: false             
  //           });
  //           self.form.clear();
  //           History.push("/login");
  //         }, 3000);       
  //       }
  //     })
  //     .catch(error => {
  //       if (error) {          
  //         toast.success(myAccountFormConstants.changePasswordErrorMsg.text);   
  //       }
  //     });      
  // };

  gotoForgetPassword = () => {
    History.push("/forget-password");
  };

  render() {
    const { submitting } = this.state;
    return (
      <section className="login-page forget-password-page login-page-inner">
        <div className="container">
          {/** ******************************Login container starts*************************************** */}
          <div className="login forget-password">
            <div className="row">
              <div className="col-xl-6 offset-xl-3 col-md-8 offset-md-2">
                <div className="login-box">
                  <h2 className="text-center">
                    {ForgetPasswordContants.recoveryTitle.title}
                  </h2>
                  <p className="text-center fw-500 pt-0 pl-3 pr-3 pb-3 mb-3">
                    {ForgetPasswordContants.subText.text}
                  </p>
                  <ForgetPasswordForm
                    {...this.props}
                    submitting={submitting}
                    onInitialize={this.handleInitialize}
                    onValidSubmit={this.handleSubmit}
                    onReset={this.handleSubmit}
                  />
                  {/* Msg Notification Box */}
                  <ToastContainer autoClose={2500}/>                  
                </div>
              </div>
            </div>
          </div>
          {/** ******************************Login container ends*************************************** */}          
        </div>
      </section>
    );
  }
}

export default ForgetPassword;
