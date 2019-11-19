/* 

Component : Grants 

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
//import { createContainer } from "meteor/react-meteor-data";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/** ****************************** Import Components *************************** */
import GrantsForm from "./GrantsForm";
import GrantsDetail from "./GrantsDetail";

/** ****************************** Import Constants and Common Functions *************************** */
import myAccountFormConstants from "../../../constants/my-account-forms";
import myAccountListConstants from "../../../constants/my-account-lists";
import myAccountTitleConstants from "../../../constants/my-account-titles";
import { displayDate, displayAmount } from "../../../utils/common";

/** ****************************** Import APIS *************************** */
// import { insertGrants, getGrantsByUserId } from "/imports/api/grants";
// import { getDashboardByUserId } from "/imports/api/users";

class Grants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitting: false,
      openNew: false,
      openDetail: false,
      currentData: null
    };
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOpen = () => {
    this.setState({ openNew: true, openDetail: false });
  };

  handleClose = () => {
    this.setState({ openNew: false, openDetail: false });
  };

  handleInitialize = form => {
    this.form = form;
  };

  // handleSubmit = inputData => {
  //   const self = this;
  //   const userId = Session.get("currentUserId");
  //   this.setState({ submitting: true, openNew: true });
  //   insertGrants(userId, inputData).then((result, err) => {
  //     if (err) {
  //       toast.error(myAccountFormConstants.errorMsg.text);
  //     } else {
  //       toast.success(myAccountFormConstants.successMsg.text);
  //     }
  //   });
  //   setTimeout(function() {
  //     self.setState({
  //       submitting: false,
  //       openNew: false
  //     });
  //     self.handleClose();
  //     self.form.clear();
  //   }, 100);
  // };

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
      return (
        <tr
          className="hover-popup"
          key={data.transactionId}
          onClick={() => self.showDetails(data)}
        >
          <td className="align-middle">
            <p className="date mdm-txt text-muted mb-0">
              {displayDate(data.date)}
            </p>
          </td>
          <td className="align-middle">
            <p className="reference-no mdm-txt text-muted mb-0">
              {data.transactionId}
            </p>
          </td>
          <td className="align-middle">
            <p className="charity-name mdm-txt text-muted mb-0">
              {data.charityName}
            </p>
          </td>
          <td className="align-middle">
            <h4 className="amount-granted fw-300 blue mb-0">
              {displayAmount(data.amount)}
            </h4>
          </td>
        </tr>
      );
    });
  };

  render() {
    const { submitting, openNew, openDetail, currentData } = this.state;
    const { dataList, dashBoardData } = this.props;

    return (
      <div className="right-content table-right-content">
        {/* <!-- Recent Activities --> */}
        <table className="table table-header mb-4 table-responsive-sm">
          <tbody>
            <tr className="d-flex">
              <td className="align-middle pt-0 pb-4 col-8">
                <h3 className="fw-500">
                  {myAccountTitleConstants.myGrants.title}
                </h3>
              </td>
              <td className="align-middle border-left text-center pt-0 pb-4 col-4">
                <button
                  className="btn btn-custom btn-border"
                  onClick={this.handleOpen}
                >
                  <img
                    src="/image/icons/mygrants.svg"
                    width="20"
                    height="20"
                    alt=""
                  />
                  <span className="btn-text">
                    {myAccountTitleConstants.myGrants.buttonTitle}
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
                    {myAccountTitleConstants.myGrants.title}
                  </DialogTitle>
                  <DialogContent>
                    <NavLink
                      to="#"
                      className="dialog-close mobile-close-icons"
                      onClick={this.handleClose}
                    >
                      <i className="fa fa-close" />
                    </NavLink>
                    <GrantsForm
                      {...this.props}
                      submitting={submitting}
                      onInitialize={this.handleInitialize}
                      onValidSubmit={this.handleSubmit}
                      handleClose={this.handleClose}
                      dashBoardData={dashBoardData}
                    />
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
                    {myAccountTitleConstants.myGrants.title}
                  </DialogTitle>
                  <DialogContent>
                    <NavLink
                      to="#"
                      className="dialog-close"
                      onClick={this.handleClose}
                    >
                      <i className="fa fa-close" />
                    </NavLink>
                    <GrantsDetail detail={currentData} />
                  </DialogContent>
                </Dialog>
              </td>
            </tr>
          </tbody>
        </table>
        {/* <!-- Noncash Contributions Details --> */}
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
                  <h6 className="th-amount mb-0">
                    {myAccountListConstants.charityName.text}
                  </h6>
                </th>
                <th className="align-middle p-3 border-top-0">
                  <h6 className="th-amount mb-0">
                    {myAccountListConstants.grantValue.text}
                  </h6>
                </th>
              </tr>
              {this._renderRows(dataList)}
            </tbody>
          </table>
          {/* Msg Notification Box */}
          <ToastContainer autoClose={3000} />
        </div>
        {/* <!-- Noncash Contribution Details Ends --> */}
      </div>
    );
  }
}

export default Grants;

// export default createContainer(() => {
//   const currentUser = Session.get("currentUserId");
//   const handle = Meteor.subscribe("collect_grants_by_userid", currentUser);
//   Meteor.subscribe("collect_dashboard_by_userid", currentUser);
//   const dashBoardData = getDashboardByUserId(currentUser);
//   const dataArray = getGrantsByUserId(currentUser);
//   const loading = !handle.ready();
//   const dataList = dataArray ? dataArray[0].data : [];
//   return {
//     dashBoardData,
//     dataList,
//     loading
//   };
// }, Grants);
