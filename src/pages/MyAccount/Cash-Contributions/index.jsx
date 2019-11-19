/* 

Component : CashContributions 

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
//import { createContainer } from "meteor/react-meteor-data";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { NavLink, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/** ****************************** Import Components *************************** */
import CardForm from "./CardForm";
import CardConnectForm from "./CardConnectForm";
import AchForm from "./AchForm";
import CashDetail from "./CashDetail";

/** ****************************** Import Constants and Common Functions *************************** */
import myAccountListConstants from "../../../constants/my-account-lists";
import myAccountTitleConstants from "../../../constants/my-account-titles";
import { CashContributionInfo, cashContribByCheck } from "../../../constants/my-account-constants";
import { myAccountFormConstants } from "../../../constants/my-account-forms";
import { displayDate, displayAmount } from "../../../utils/common";

/** ****************************** Import APIS *************************** */
// import { getCContributeByUserId } from "/imports/api/contributions";
// import { connectCard, connectACH } from "/imports/api/contributions";
// import { getConfiguration } from "/imports/api/lists";

class CashContributions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitting: false,
      openNew: false,
      openDetail: false,
      openInfo: false,
      openCheck: false,
      method: "card",
      currentData: null,
      cardConnetMsg: null,
      achMsg: null,
      configuration: {}
    };
  }

  componentWillReceiveProps = nextprops => {
    if (nextprops && nextprops.configuration) {
      const configuration = nextprops.configuration;
      this.setState({ configuration });
    }
  };

  handleOpen = () => {
    this.setState({ openNew: true, openDetail: false });
  };

  handleClose = () => {
    this.setState({ openNew: false, openDetail: false });
  };

  handleOpenInfo = () => {
    this.setState({ openInfo: true });
  };

  handleCloseInfo = () => {
    this.setState({ openInfo: false });
  };

  handleOpenCheck = () => {
    this.setState({ openCheck: true });
  };

  handleCloseCheck = () => {
    this.setState({ openCheck: false });
  };

  handleInitialize = form => {
    this.form = form;
  };

  handleMethod = event => {
    const method = event.target.value;
    if (method) {
      this.setState({ method });
    }
  };

  _renderCardForm = () => {
    const { submitting, method, configuration } = this.state;
    return (
      <CardForm
        {...this.props}
        submitting={submitting}
        onValidSubmit={this.handleStripCard}
        handleClose={this.handleClose}
        method={method}
        configuration={configuration}
      />
    );
  };

  // handleCardConnect = data => {
  //   const self = this;
  //   const inuputData = data;
  //   inuputData.verified = true;
  //   const userId = Session.get("currentUserId");
  //   connectCard(userId, inuputData)
  //     .then(result => {
  //       if (result && result.respstat === "C") {
  //         toast.error(myAccountFormConstants.transactionErrorMsg.text);
  //       } else {
  //         toast.success(myAccountFormConstants.successMsg.text);
  //       }
  //       Meteor.setTimeout(function() {
  //         self.setState({
  //           openNew: false
  //         });
  //         self.handleCloseACH();
  //         self.form.clear();
  //       }, 9000);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       if (error) {
  //         self.setState({
  //           errorMsg: error.reason
  //         });
  //       }
  //       Meteor.setTimeout(function() {
  //         self.setState({
  //           openNew: false
  //         });
  //         self.handleCloseACH();
  //         self.form.clear();
  //       }, 3000);
  //     });
  // };

  // handleACH = data => {
  //   const self = this;
  //   const inuputData = data;
  //   inuputData.verified = true;
  //   const userId = Session.get("currentUserId");
  //   connectACH(userId, data)
  //     .then(result => {
  //       if (result && result.respstat === "C") {
  //         toast.error(myAccountFormConstants.transactionErrorMsg.text);
  //       } else {
  //         toast.success(myAccountFormConstants.successMsg.text);
  //       }
  //       Meteor.setTimeout(function() {
  //         self.setState({
  //           openNew: false
  //         });
  //         self.handleCloseACH();
  //         self.form.clear();
  //       }, 9000);
  //     })
  //     .catch(error => {
  //       if (error) {
  //         self.setState({
  //           errorMsg: error.reason
  //         });
  //       }
  //       Meteor.setTimeout(function() {
  //         self.setState({
  //           openNew: false
  //         });
  //         self.handleCloseACH();
  //         self.form.clear();
  //       }, 3000);
  //     });
  // };

  _renderCardConnectForm = () => {
    const { submitting, method, cardConnetMsg } = this.state;
    const data = cardConnetMsg ? JSON.stringify(cardConnetMsg.data) : null;
    return (
      <div>
        <CardConnectForm
          {...this.props}
          submitting={submitting}
          onValidSubmit={this.handleCardConnect}
          handleCloseACH={this.handleCloseACH}
          method={method}
        />
        <span className="text-success">{data || null}</span>
      </div>
    );
  };

  _renderAchForm = () => {
    const { submitting, method, achMsg } = this.state;
    const data = achMsg ? JSON.stringify(achMsg.data) : null;
    return (
      <div>
        <AchForm
          {...this.props}
          submitting={submitting}
          onValidSubmit={this.handleACH}
          handleCloseACH={this.handleCloseACH}
          method={method}
        />
        <span className="text-success">{data || null}</span>
      </div>
    );
  };

  showDetails = currentData => {
    this.setState({
      openDetail: true,
      currentData
    });
  };

  _renderRows = dataList => {
    const self = this;
    if (!dataList) return null;
    return dataList.map(function(data) {
      let methodName = "";
      if (data.method === "card" && data.stripeId) {
        methodName = "Credit card (Stripe)";
      } else if (data.method === "card" && !data.stripeId) {
        methodName = "Credit card (CardConnect)";
      } else if (data.method === "ach") {
        methodName = "ACH Payment";
      }
      return (
        <tr
          className="hover-popup"
          key={data.transactionId}
          onClick={() => self.showDetails(data)}
          role="presentation"
        >
          <td className="align-middle">
            <p className="donated-date mdm-txt text-muted mb-0">
              {displayDate(data.date)}
            </p>
          </td>
          <td className="align-middle">
            <p className="reference-no mdm-txt text-muted mb-0">
              {data.transactionId}
            </p>
          </td>
          <td className="align-middle">
            <p className="reference-no mdm-txt text-muted mb-0">{methodName}</p>
          </td>
          <td className="align-middle relative cash-contr">
            <h4 className="amount-donated fw-300 blue">
              {displayAmount(data.amount)}
              {data.verified ? (
                <i className="fa fa-check pale-green font-weight-normal fs-20 ml-2 mt-1" />
              ) : null}
            </h4>
          </td>
        </tr>
      );
    });
  };

  render() {
    const { openNew, openDetail, openInfo, openCheck } = this.state;
    const { method, currentData } = this.state;
    const { dataList } = this.props;
    return (
      <div className="right-content table-right-content">
        {/* <!-- Recent Activities --> */}
        <table className="table table-header mb-4 table-responsive-sm">
          <tbody>
            <tr className="d-flex">
              <td className="align-middle d-flex pt-0 pb-4 col-6">
                <h3 className="fw-500 mr-2">
                  {myAccountTitleConstants.cashContributions.title}
                </h3>
                <Link
                  to="#"
                  className="tk-contribution-content"
                  onClick={this.handleOpenInfo}
                >
                  <i className="fa fa-info-circle" aria-hidden="true" />
                </Link>
                <Dialog
                  fullWidth
                  className="custom-dialog cash-contribution-info"
                  scroll="paper"
                  open={openInfo}
                  maxWidth="md"
                >
                  <DialogTitle style={{ background: "#d9e8f4" }}>
                    {myAccountTitleConstants.cashContributions.title}
                  </DialogTitle>
                  <DialogContent>
                    <NavLink
                      to="#"
                      className="dialog-close"
                      onClick={this.handleCloseInfo}
                    >
                      <i className="fa fa-close" />
                    </NavLink>
                    <ul className="list-style pl-4 mt-3 mb-0">
                      <li>
                        <p className="text-justify">
                          {CashContributionInfo.info1.text}
                        </p>
                      </li>
                    </ul>
                  </DialogContent>
                </Dialog>
              </td>
              <td className="align-middle pt-2 pb-4 col-3">
                {/* Donate By Check */}
                <NavLink
                  to="#"
                  className="donate-by-check fw-600 pull-right justify-content-end"
                  onClick={this.handleOpenCheck}
                >
                  {"Donate by check?"}
                </NavLink>
                <Dialog
                  fullWidth
                  className="custom-dialog cash-contribution-check"
                  scroll="paper"
                  open={openCheck}
                  maxWidth="sm"
                >
                  <DialogTitle style={{ background: "#d9e8f4" }}>
                    {cashContribByCheck.donateByCheck.modalTitle}
                  </DialogTitle>
                  <DialogContent>
                    <NavLink
                      to="#"
                      className="dialog-close"
                      onClick={this.handleCloseCheck}
                    >
                      <i className="fa fa-close" />
                    </NavLink>
                    <div className="dialog-content-inner box-shadow border pl-4 pr-3 mt-4">
                      <p className="pt-3 mb-0 fw-600">
                        {cashContribByCheck.donateByCheck.modalInnerTitle1}
                      </p>
                      <ul className="list-style list-style-none pl-3 pt-3 mb-0">
                        <li>
                          <p className="text-justify mb-0">
                            {
                              cashContribByCheck.donateByCheck
                                .modalInnerAddress1
                            }
                          </p>
                        </li>
                      </ul>
                      <p className="pt-3 mb-0 fw-600">
                        {cashContribByCheck.donateByCheck.modalInnerTitle2}
                      </p>
                      <ul className="list-style list-style-none pl-3 pt-3 mb-0">
                        <li>
                          <p className="text-justify">
                            {
                              cashContribByCheck.donateByCheck
                                .modalInnerAddress1
                            }
                          </p>
                        </li>
                        <li>
                          <p className="text-justify">
                            {
                              cashContribByCheck.donateByCheck
                                .modalInnerAddress2
                            }
                          </p>
                        </li>
                        <li>
                          <p className="text-justify">
                            {
                              cashContribByCheck.donateByCheck
                                .modalInnerAddress3
                            }
                          </p>
                        </li>
                        <li>
                          <p className="text-justify">
                            {
                              cashContribByCheck.donateByCheck
                                .modalInnerAddress4
                            }
                          </p>
                        </li>
                      </ul>
                    </div>
                  </DialogContent>
                </Dialog>
              </td>
              {/* Credit Card */}
              <td className="align-middle border-left text-right pt-0 pb-4 col-3">
                <button
                  className="btn btn-custom btn-border white-space"
                  onClick={this.handleOpen}
                >
                  <img
                    src="/image/icons/blue/addmoney-blue.svg"
                    width="20"
                    height="20"
                    alt=""
                  />
                  <span className="btn-text">
                    {myAccountTitleConstants.cashContributions.buttonTitle}
                  </span>
                </button>
                <Dialog
                  fullWidth
                  className="custom-dialog"
                  scroll="paper"
                  open={openNew}
                  maxWidth="md"
                >
                  <DialogTitle style={{ background: "#d9e8f4" }}>
                    {myAccountTitleConstants.cashContributions.title}
                  </DialogTitle>
                  <DialogContent>
                    <NavLink
                      to="#"
                      className="dialog-close mobile-close-icons"
                      onClick={this.handleClose}
                    >
                      <i className="fa fa-close" />
                    </NavLink>
                    <div className="donated-property-form cash-form-index">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="donated-property pt-4">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="render-methods">
                                  {method === "card"
                                    ? this._renderCardForm()
                                    : null}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                <Dialog
                  fullWidth
                  className="custom-dialog"
                  scroll="paper"
                  open={openDetail}
                  maxWidth="md"
                >
                  <DialogTitle style={{ background: "#d9e8f4" }}>
                    {myAccountTitleConstants.cashContributions.title}
                  </DialogTitle>
                  <DialogContent>
                    <NavLink
                      to="#"
                      className="dialog-close"
                      onClick={this.handleClose}
                    >
                      <i className="fa fa-close" />
                    </NavLink>
                    <CashDetail detail={currentData} />
                  </DialogContent>
                </Dialog>
              </td>
            </tr>
          </tbody>
        </table>
        {/* <!-- Cash Contributions Details --> */}
        <div className="donation-details mb-5">
          <table className="table myaccount-dashboard-table my-donations mb-0 table-responsive-sm">
            <tbody>
              <tr className="table-heading">
                <th className="align-middle p-3 border-top-0">
                  <h6 className="th-date mb-0">
                    {myAccountListConstants.date.text}
                  </h6>
                </th>
                <th className="align-middle p-3 border-top-0">
                  <h6 className="th-reference-no mb-0">
                    {myAccountListConstants.reference.text}
                  </h6>
                </th>
                <th className="align-middle p-3 border-top-0">
                  <h6 className="th-reference-no mb-0">
                    {myAccountListConstants.method.text}
                  </h6>
                </th>
                <th className="align-middle p-3 border-top-0">
                  <h6 className="th-amount mb-0">
                    {myAccountListConstants.amount.text}
                  </h6>
                </th>
              </tr>
              {this._renderRows(dataList)}
            </tbody>
          </table>
          {/* Msg Notification Box */}
          <ToastContainer autoClose={2500} />
        </div>
        {/* <!-- Cash Contribution Details Ends --> */}
      </div>
    );
  }
}

export default CashContributions;

// export default createContainer(() => {
//   const currentUser = Session.get("currentUserId");
//   const handle = Meteor.subscribe("collect_ccontribute_by_userid", currentUser);
//   Meteor.subscribe("collect_configuration");
//   const dataArray = getCContributeByUserId(currentUser);
//   const configuration = getConfiguration();
//   const loading = !handle.ready();
//   const dataList = dataArray ? dataArray[0].data : [];
//   return {
//     dataList,
//     configuration,
//     loading
//   };
// }, CashContributions);
