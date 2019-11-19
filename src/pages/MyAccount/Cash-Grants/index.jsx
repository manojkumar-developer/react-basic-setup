/* 

Component : CashGrants 

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
//import { createContainer } from "meteor/react-meteor-data";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/** ****************************** Import Components *************************** */
import CashGrantsForm from "./CashGrantsForm";
import CashGrantsDetail from "./CashGrantsDetail";

/** ****************************** Import Constants and Common Functions *************************** */
import myAccountFormConstants from "../../../constants/my-account-forms";
import myAccountListConstants from "../../../constants/my-account-lists";
import myAccountTitleConstants from "../../../constants/my-account-titles";
import { paymentMethodList } from "../../../constants/lists";
import { displayDate, displayAmount } from "../../../utils/common";


/** ****************************** Import APIS *************************** */
// import { insertCashGrants, getCGrantsByUserId } from "/imports/api/grants";

class CashGrants extends Component {
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
  //   insertCashGrants(userId, inputData).then((result, err) => {
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
      const method = data.method;
      const dateVarious = data.dateVarious;
      return (
        <tr
          className="hover-popup"
          key={data.transactionId}
          onClick={() => self.showDetails(data)}
          role="presentation"
        >
          <td className="align-middle">
            <p className="date mdm-txt text-muted mb-0">
              {dateVarious ? "Various" : displayDate(data.date)}
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
            <p className="method mdm-txt text-muted mb-0">
              {paymentMethodList[method].value}
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
    const { dataList } = this.props;
    const { submitting, openNew, openDetail, currentData } = this.state;

    return (
      <div className="right-content table-right-content">
        {/* <!-- Recent Activities --> */}
        <table className="table table-header mb-4 table-responsive-sm">
          <tbody>
            <tr className="d-flex">
              <td className="align-middle pt-0 pb-4 col-8">
                <h3 className="fw-500">
                  {myAccountTitleConstants.cashGrants.title}
                </h3>
              </td>
              <td className="align-middle border-left text-center pt-0 pb-4 col-4">
                <button
                  className="btn btn-custom btn-border"
                  onClick={this.handleOpen}
                >
                  <img
                    src="/image/icons/directcashgrants.svg"
                    width="20"
                    height="20"
                    alt=""
                  />
                  <span className="btn-text">
                    {myAccountTitleConstants.cashGrants.buttonTitle}
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
                    {myAccountTitleConstants.cashGrants.title}
                  </DialogTitle>
                  <DialogContent>
                    <NavLink
                      to="#"
                      className="dialog-close mobile-close-icons"
                      onClick={this.handleClose}
                    >
                      <i className="fa fa-close" />
                    </NavLink>
                    <CashGrantsForm
                      {...this.props}
                      submitting={submitting}
                      onInitialize={this.handleInitialize}
                      onValidSubmit={this.handleSubmit}
                      handleClose={this.handleClose}
                      handleSubmit={this.handleSubmit}
                    />
                  </DialogContent>
                </Dialog>
                {/* Cash Grants Details */}
                <Dialog
                  fullWidth
                  className="custom-dialog myaccount-formdetails"
                  scroll="paper"
                  open={openDetail}
                  maxWidth="md"
                >
                  <DialogTitle style={{ background: "#d9e8f4" }}>
                    {myAccountTitleConstants.cashGrants.title}
                  </DialogTitle>
                  <DialogContent>
                    <NavLink
                      to="#"
                      className="dialog-close"
                      onClick={this.handleClose}
                    >
                      <i className="fa fa-close" />
                    </NavLink>
                    <CashGrantsDetail detail={currentData} />
                  </DialogContent>
                </Dialog>
              </td>
            </tr>
          </tbody>
        </table>
        {/* <!-- Direct Cash Grants Details --> */}
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
                  <h6 className="th-charities mb-0">
                    {myAccountListConstants.charityName.text}
                  </h6>
                </th>
                <th className="align-middle p-3 border-top-0">
                  <h6 className="th-hours mb-0">
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
          <ToastContainer autoClose={3000} />
        </div>
        {/* <!-- Direct Cash Grants Details Ends --> */}
      </div>
    );
  }
}

export default CashGrants;

// export default createContainer(() => {
//   const currentUser = Session.get("currentUserId");
//   const handle = Meteor.subscribe("collect_cgrants_by_userid", currentUser);
//   const dataArray = getCGrantsByUserId(currentUser);
//   const loading = !handle.ready();
//   const dataList = dataArray ? dataArray[0].data : [];
//   return {
//     dataList,
//     loading
//   };
// }, CashGrants);
