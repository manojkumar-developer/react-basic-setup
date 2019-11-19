/* 

Component : MyTime 

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
import MyTimeForm from "./MyTimeForm";
import MyTimeDetail from "./MyTimeDetail";

/** ****************************** Import Constants and Common Functions *************************** */
import { timeList } from "../../../constants/lists";
import myAccountFormConstants from "../../../constants/my-account-forms";
import myAccountListConstants from "../../../constants/my-account-lists";
import myAccountTitleConstants from "../../../constants/my-account-titles";
import { displayDate } from "../../../utils/common";

/** ****************************** Import APIS *************************** */
// import { insertMyTime, getMyTimeByUserId } from "/imports/api/my-time";

class MyTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openNew: false,
      openDetail: false,
      currentData: null,
      submitting: false
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

  // handleSubmit = data => {
  //   const inputData = data;
  //   inputData.verified = true;
  //   const self = this;
  //   const userId = Session.get("currentUserId");
  //   inputData.pocketExpenses = inputData.pocketExpenses
  //     ? Object.assign({}, inputData.pocketExpenses)
  //     : {};
  //   inputData.expensesType = inputData.expensesType
  //     ? Object.assign({}, inputData.expensesType)
  //     : {};
  //   inputData.miles = inputData.miles ? Object.assign({}, inputData.miles) : {};
  //   this.setState({ submitting: true, openNew: true });
  //   insertMyTime(userId, inputData).then((result, err) => {
  //     if (err) {
  //       toast.error(myAccountFormConstants.errorMsg.text);
  //     } else if (result) {
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
      const duration = data.duration || 0;
      return (
        <tr
          className="hover-popup"
          key={data._id}
          onClick={() => self.showDetails(data)}
          role="presentation"
        >
          <td className="align-middle">
            <p className="date mdm-txt text-muted mb-0">
              {displayDate(data.date)}
            </p>
          </td>
          <td className="align-middle">
            <p className="charity-name mdm-txt text-muted mb-0">
              {data.charityName}
            </p>
          </td>
          <td className="align-middle">
            <p className="activity mdm-txt text-muted mb-0">{data.activity}</p>
          </td>
          <td className="align-middle">
            <p className="time mdm-txt text-muted mb-0">
              {timeList[duration].value}
            </p>
          </td>
        </tr>
      );
    });
  };

  render() {
    const { submitting, openNew, openDetail, currentData } = this.state;

    const { dataList } = this.props;
    return (
      <div className="right-content table-right-content">
        {/* <!-- Recent Activities --> */}
        <table className="table table-header mb-4 table-responsive-sm">
          <tbody>
            <tr className="d-flex">
              <td className="align-middle pt-0 pb-4 col-8">
                <h3 className="fw-500">
                  {myAccountTitleConstants.myTime.title}
                </h3>
              </td>
              <td className="align-middle border-left text-center pt-0 pb-4 col-4">
                <button
                  className="btn btn-custom btn-border"
                  onClick={this.handleOpen}
                >
                  <img
                    src="/image/icons/blue/volunteer-blue.svg"
                    width="20"
                    height="20"
                    alt=""
                  />
                  <span className="btn-text">
                    {myAccountTitleConstants.myTime.buttonTitle}
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
                    {myAccountTitleConstants.myTime.title}
                  </DialogTitle>
                  <DialogContent>
                    <NavLink
                      to="#"
                      className="dialog-close mobile-close-icons"
                      onClick={this.handleClose}
                    >
                      <i className="fa fa-close" />
                    </NavLink>
                    <MyTimeForm
                      {...this.props}
                      submitting={submitting}
                      onInitialize={this.handleInitialize}
                      onValidSubmit={this.handleSubmit}
                      handleClose={this.handleClose}
                    />
                  </DialogContent>
                </Dialog>
                {/* Data Details */}
                <Dialog
                  fullWidth
                  className="custom-dialog"
                  scroll="paper"
                  open={openDetail}
                  maxWidth="md"
                >
                  <DialogTitle style={{ background: "#d9e8f4" }}>
                    {myAccountTitleConstants.myTime.title}
                  </DialogTitle>
                  <DialogContent>
                    <NavLink
                      to="#"
                      className="dialog-close"
                      onClick={this.handleClose}
                    >
                      <i className="fa fa-close" />
                    </NavLink>
                    <MyTimeDetail detail={currentData} />
                  </DialogContent>
                </Dialog>
              </td>
            </tr>
          </tbody>
        </table>
        {/* <!-- My Time Details --> */}
        <div className="donation-details mb-5">
          {/* Table */}
          <table className="table myaccount-dashboard-table my-donations mb-0 table-responsive-sm">
            <tbody>
              <tr className="table-heading">
                <th className="align-middle p-3 border-top-0 ">
                  <h6 className="th-date mb-0">
                    {myAccountListConstants.date.text}
                  </h6>
                </th>
                <th className="align-middle p-3 border-top-0">
                  <h6 className="th-charities mb-0">
                    {myAccountListConstants.charityName.text}
                  </h6>
                </th>
                <th className="align-middle p-3 border-top-0">
                  <h6 className="th-method mb-0">
                    {myAccountListConstants.activity.text}
                  </h6>
                </th>
                <th className="align-middle p-3 border-top-0">
                  <h6 className="th-time mb-0">
                    {myAccountListConstants.duration.text}
                  </h6>
                </th>
              </tr>
              {this._renderRows(dataList)}
            </tbody>
          </table>
        </div>
        {/* Msg Notification Box */}
        <ToastContainer autoClose={3000} />
        {/* <!-- My Time Details Ends --> */}
      </div>
    );
  }
}

export default MyTime;

// export default createContainer(() => {
//   const currentUser = Session.get("currentUserId");
//   const handle = Meteor.subscribe("collect_mytime_by_userid", currentUser);
//   const dataArray = getMyTimeByUserId(currentUser);
//   const loading = !handle.ready();
//   const dataList = dataArray ? dataArray[0].data : [];
//   return {
//     dataList,
//     loading
//   };
// }, MyTime);
