/*

Component : Registration

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
//import { createContainer } from "meteor/react-meteor-data";
import "react-toastify/dist/ReactToastify.css";

import RegistrationForm from "./RegistrationForm";
import Payment from "./Payment";

/** ****************************** Import components *************************** */
import InfoWalletModal from "../../components/Modals/InfoWalletModal";
import TermsModal from "../../components/Modals/TermsModal";
import ShowKeyModal from "../../components/Modals/ShowKeyModal";

/* ***************************** Import constants ************************* */
import { regConstants } from "../../constants/registration";
import { saveLocalUser } from "../../utils/auth";

/** ****************************** Import APIS *************************** */
// import { insertUser, checkUserExist } from "/imports/api/users";
// import { getConfiguration } from "/imports/api/lists";

/** ****************************** Import libraries **************************** */
import History from "../../utils/History";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoModal: false,
      termsModal: false,
      keyModal: false,
      userData: {},
      submitting: false,
      configuration: {}
    };
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps = nextprops => {
    if (nextprops && nextprops.configuration) {
      const configuration = nextprops.configuration;
      this.setState({ configuration });
    }
  };

  handleInitialize = form => {
    this.form = form;
  };

  openInfoModal = () => {
    this.setState({
      infoModal: true
    });
  };

  openTermsModal = () => {
    this.setState({
      termsModal: true
    });
  };

  openPayModal = () => {
    document.getElementById("openStripe").click();
  };

  openKeyModal = () => {
    this.setState({
      keyModal: true
    });
  };

  closeModal = () => {
    // $("body").css("overflow", "visible");
    this.setState({
      infoModal: false,
      termsModal: false,
      keyModal: false
    });
  };

  // insertData = inputData => {
  //   const self = this;
  //   this.setState({ submitting: true });
  //   insertUser(inputData)
  //     .then(result => {
  //       if (result) {
  //         toast.success(regConstants.successMsg.text);
  //         Meteor.setTimeout(function() {
  //           self.setState({
  //             submitting: false
  //           });
  //           saveLocalUser(result);
  //           self.form.clear();
  //           History.push("/account/dashboard");
  //         }, 3000);
  //       }
  //     })
  //     .catch(error => {
  //       toast.error(error.reason);
  //       Meteor.setTimeout(function() {
  //         self.setState({ errorMsg: null });
  //       }, 3000);
  //     });
  // };

  // handleSubmit = inputData => {
  //   const self = this;
  //   checkUserExist(inputData).then(result => {
  //     if (result) {
  //       Meteor.setTimeout(function() {
  //         self.setState({
  //           errorMsg: toast.error(regConstants.errorMsg.text)
  //         });
  //       }, 2000);
  //     } else if (inputData.isWalletCreate) {
  //       self.setState({
  //         userData: inputData,
  //         errorMsg: null
  //       });
  //       self.openPayModal();
  //     } else {
  //       self.insertData(inputData);
  //     }
  //   });
  // };

  handleToken = token => {
    if (token) {
      this.closeModal();
      this.openKeyModal();
    }
  };

  handleKey = secretKey => {
    const { userData } = this.state;
    if (secretKey) {
      this.closeModal();
      const inputData = userData;
      inputData.walletAddress = secretKey.publicKey;
      inputData.secretKey = secretKey.secretKey;
      inputData.stellarPayment = true;
      this.insertData(inputData);
    }
  };

  render() {
    const { submitting, userData, configuration } = this.state;
    const { infoModal, termsModal, keyModal } = this.state;
    return (
      <section className="login-page reg-page-inner custom-load-height">
        <div className="container">
          <div className="login">
            <div className="row">
              <div className="col-xl-6 offset-xl-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
                <div className="login-box registration">
                  <h2 className="text-center mb-5">
                    {regConstants.regTitle.title}
                  </h2>
                  <div className="d-flex flex-column input-fields" />
                  {/** ********************************* Modals ********************************************** */}
                  <InfoWalletModal
                    openModal={infoModal}
                    closeModal={() => this.closeModal()}
                  />
                  <TermsModal
                    openModal={termsModal}
                    closeModal={() => this.closeModal()}
                  />
                  <Payment
                    userEmail={userData.email}
                    handleToken={this.handleToken}
                    configuration={configuration}
                  />
                  <ShowKeyModal
                    openModal={keyModal}
                    handleKey={this.handleKey}
                    closeModal={() => this.closeModal()}
                  />
                  <RegistrationForm
                    {...this.props}
                    submitting={submitting}
                    onInitialize={this.handleInitialize}
                    onValidSubmit={this.handleSubmit}
                    openInfo={() => this.openInfoModal()}
                    openTerms={() => this.openTermsModal()}
                    configuration={configuration}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Msg Notification Box */}
          <ToastContainer autoClose={2500} />
        </div>
      </section>
    );
  }
}

export default Registration;
