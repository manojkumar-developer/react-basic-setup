/*

Component : Donate Details 

*/
/* ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import LinesEllipsis from "react-lines-ellipsis";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/** ****************************** Import Subclass *************************** */
import DonateForm from "./DonateForm";

/** ****************************** Import Functions *************************** */
import { displayDescription, displayDate } from "../../utils/common";
import History from "../../utils/History";

/** ****************************** Import Constants *************************** */
import { DonateAdConstants } from "../../constants/common-constants";

/* ****************************** Import APIS *************************** */
//import { addEventContribution } from "/imports/api/contributions";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitting: false,
      date: new Date()
    };
  }

  _renderDonate = () => {
    const { list } = this.props;
    return Object.keys(list).map(function(index) {
      const data = list[index];
      return (
        <div>
          <div
            className="event-item-box pt-3"
            role="presentation"
            key={`add${data._id}`}
            onClick={() => {
              History.push(`/donate-event/${data._id}`);
            }}
          >
            <div className="row mb-3">
              <div className="col-xl-4 col-md-3 col-sm-2 col-4 pr-0">
                <img
                  src={`/event-ad/${data._id}/view`}
                  className="sidebar-img img-fluid"
                  alt=""
                />
              </div>
              <div className="col-xl-8 col-md-9 col-sm-10 col-8">
                <h6 className="mb-1 text-dark">
                  <LinesEllipsis
                    className="card-title fw-500 mb-1 text-dark"
                    text={data.title}
                    maxLine="2"
                    ellipsis="..."
                    trimRight
                    basedOn="letters"
                  />
                </h6>
                <span className="donate-event-details blue mdm-txt">
                  {displayDate(data.createdAt)}
                </span>
              </div>
            </div>
          </div>
          <hr />
        </div>
      );
    });
  };

  handleInitialize = form => {
    this.form = form;
  };

  // handleSubmit = data => {
  //   const self = this;
  //   const { date } = this.state;
  //   const { details } = this.props;
  //   const userId = Session.get("currentUserId");
  //   const _inputData = data;
  //   _inputData.method = "card";
  //   _inputData.date = date;
  //   _inputData.verified = true;
  //   _inputData.adId = details.adId;
  //   _inputData.type = "event_contributions";
  //   if (data) {
  //     addEventContribution(userId, _inputData).then((result, err) => {
  //       if (result) {
  //         toast.success(DonateAdConstants.donateAdForm.successMsg);
  //         Meteor.setTimeout(function() {
  //           self.form.clear();
  //         }, 500);
  //       } else if (err) {
  //         toast.error(DonateAdConstants.donateAdForm.errorMsg);
  //       }
  //     });
  //   }
  // };

  render() {
    const { configuration, details } = this.props;
    const { submitting } = this.state;

    return (
      <div className="row">
        <div className="col-xl-9 col-lg-8 col-md-7 mb-4 mb-md-0">
          <div className="bg-white border p-3 text-dark">
            <div className="row">
              <div className="col-xl-12">
                <h4 className="card-title mt-0 mb-3">{details.title}</h4>
              </div>
            </div>
            <div className="row">
              {/* Left Section */}
              <div className="col-xl-6">
                <div className="card-body p-0 relative">
                  <img
                    src={`/event-ad/${details._id}/view`}
                    className="banner-ad-event-img img-fluid mb-3 w-100"
                    alt=""
                  />
                </div>
              </div>
              {/* Right Section */}
              <div className="col-xl-6">
                <DonateForm
                  {...this.props}
                  submitting={submitting}
                  onInitialize={this.handleInitialize}
                  onValidSubmit={this.handleSubmit}
                  handleClose={this._handleClose}
                  configuration={configuration}
                  details={details}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <p className="card-text text-justify">
                  {displayDescription(details.description)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-5">
          <div className="right-sidebar">
            <div className="banner-ad-sidebar">
              <div className="card">
                <div className="card-body">
                  <div className="banner-ad-donate-events">
                    <h5 className="border-bottom pb-3 mb-0">
                      {DonateAdConstants.sidebarEvents.title}
                    </h5>
                    {this._renderDonate()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Msg Notification Box */}
        <ToastContainer autoClose={2500} />
      </div>
    );
  }
}

Details.propTypes = {
  details: PropTypes.object.isRequired,
  list: PropTypes.array.isRequired,
  configuration: PropTypes.object.isRequired
};

export default Details;
