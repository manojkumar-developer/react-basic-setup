/*
   
Contact Us

*/
/** ****************************** Import packages *************************** */
import React, { Component } from "react";

/** ****************************** Import Components *************************** */
import ContactForm from "./ContactForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/** ****************************** Import Constants *************************** */
import contactConstants from "../../constants/contact-lists";
//import myAccountFormConstants from "../../constants/my-account-forms";
/** ****************************** Import libraries **************************** */
//import { sendEnquiry } from "/imports/api/lists";

class ContactUs extends Component {
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
  //   this.setState({ submitting: true });
  //   sendEnquiry(userData)
  //     .then(result => {
  //       if (result) {
  //         toast.success(myAccountFormConstants.contactEmailMsg.text);          
  //         Meteor.setTimeout(function() {
  //           self.form.clear();
  //         }, 3000);
  //       }
  //     })
  //     .catch(error => {
  //       if (error) {
  //         toast.error(myAccountFormConstants.errorMsg.text);
  //       }
  //     });
  // };

  render() {
    const { submitting } = this.state;
    return (
      <div className="contact-us pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 offset-xl-1">
              <div className="contact-us-content text-center mb-5">
                <h3 className="mb-3">{contactConstants.pageHeader.title}</h3>
                <p>{contactConstants.pageHeader.subTitle}</p>
              </div>
              <ContactForm
                submitting={submitting}
                onInitialize={this.handleInitialize}
                onValidSubmit={this.handleSubmit}
                {...this.props}
              />
              {/* Msg Notification Box */}
              <ToastContainer autoClose={2500} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
