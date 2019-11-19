/*

Login

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/** ****************************** Import Components *************************** */
import LoginForm from "./LoginForm";
import Button from "@material-ui/core/Button";

/* ***************************** Import constants ************************* */
import { LoginConstants } from "../../constants/login";

/** ****************************** Import libraries **************************** */
import History from "../../utils/History";
import { saveLocalUser } from "../../utils/auth";

class Login extends Component {
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

  // handleSubmit = loginData => {
  //   const self = this;
  //   this.setState({ submitting: true });
  //   Meteor.call("loginUser", loginData, function(err, result) {
  //     if (err) {
  //       toast.error(err.reason);
  //     } else {
  //       toast.success(LoginConstants.successMsg.text);
  //       Meteor.setTimeout(function() {
  //         // session variable set
  //         saveLocalUser(result);
  //         self.form.clear();
  //         History.push("/account/dashboard");
  //       }, 3000);
  //     }
  //   });
  // };

  gotoRegistration = () => {
    History.push("/registration");
  };

  render() {
    const { submitting } = this.state;
    return (
      <section className="login-page login-page-inner">
        <div className="container">
          {/** ******************************Login container starts*************************************** */}
          <div className="login">
            <div className="row">
              <div className="col-xl-6 offset-xl-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
                <div className="login-box mb-4">
                  <h2 className="text-center">
                    {LoginConstants.signInTitle.title}
                  </h2>
                  <p className="text-center fw-300 p-3 mb-3">
                    {LoginConstants.subText.text}
                  </p>
                  <LoginForm
                    {...this.props}
                    submitting={submitting}
                    onInitialize={this.handleInitialize}
                    onValidSubmit={this.handleSubmit}
                    onReset={this.handleSubmit}
                  />
                </div>
                <div className="user-registration justify-content-center">
                  <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    type="button"
                    className="red-bg box-content-center text-inherit"
                    onClick={this.gotoRegistration}
                  >                    
                    {LoginConstants.signup.text}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/** ******************************Login container ends*************************************** */}
        </div>
        {/* Msg Notification Box */}
        <ToastContainer autoClose={2500}  />
      </section>
    );
  }
}

export default Login;
