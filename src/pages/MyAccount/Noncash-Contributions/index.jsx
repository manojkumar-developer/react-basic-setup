/* 

Component : NoncashContributions

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
import ContributionForm from "./ContributionForm";
import Detail from "./Detail";

/** ****************************** Import Constants and Common Functions *************************** */
import { contributionCategoryList } from "../../../constants/lists";
import myAccountFormConstants from "../../../constants/my-account-forms";
import myAccountListConstants from "../../../constants/my-account-lists";
import myAccountTitleConstants from "../../../constants/my-account-titles";
import { NoncashContributionInfo } from "../../../constants/my-account-constants";
import { displayDate, displayAmount } from "../../../utils/common";

/** ****************************** Import API *************************** */
// import { insertNoncashContributions } from "/imports/api/contributions";
// import { getNCContributeByUserId } from "/imports/api/contributions";

class NoncashContributions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitting: false,
      openNew: false,
      openDetail: false,
      openInfo: false,
      currentData: null
    };
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen = () => {
    this.setState({ openNew: true, openDetail: false });
  };

  handleOpenInfo = () => {
    this.setState({ openInfo: true });
  };

  handleClose = () => {
    this.setState({ openNew: false, openDetail: false });
  };

  handleCloseInfo = () => {
    this.setState({ openInfo: false });
  };

  handleInitialize = form => {
    this.form = form;
  };

  // handleSubmit = inputData => {
  //   const self = this;
  //   const insertData = inputData;
  //   insertData.verified = true;
  //   const userId = Session.get("currentUserId");
  //   this.setState({ submitting: true, openNew: true, loading: true });
  //   insertNoncashContributions(userId, insertData).then((result, err) => {
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
            <p className="mdm-txt text-muted mb-0">{data.propertyName}</p>
          </td>
          <td className="align-middle">
            <p className="property-type mdm-txt text-muted mb-0">
              {contributionCategoryList[data.propertyCategory].value}
            </p>
          </td>
          <td className="align-middle">
            <h4 className="property-value fw-300 blue mb-0">
              {displayAmount(data.marketValue)}
            </h4>
          </td>
        </tr>
      );
    });
  };

  render() {
    const { submitting, openNew, openInfo } = this.state;
    const { openDetail, currentData } = this.state;
    const { dataList } = this.props;

    return (
      <div className="right-content table-right-content">
        {/* <!-- Recent Activities --> */}
        <table className="table table-header mb-4 table-responsive-sm">
          <tbody>
            <tr className="d-flex">
              <td className="align-middle d-flex pt-0 pb-4 col-8">
                <h3 className="fw-500 mr-2">
                  {myAccountTitleConstants.noncashContributions.title}
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
                    {myAccountTitleConstants.noncashContributions.title}
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
                          {NoncashContributionInfo.info1.text}
                        </p>
                      </li>
                      <li>
                        <p className="text-justify mb-0">
                          {NoncashContributionInfo.info2.text}
                        </p>
                      </li>
                    </ul>
                  </DialogContent>
                </Dialog>
              </td>
              <td className="align-middle border-left text-center pt-0 pb-4 col-4">
                <button
                  className="btn btn-custom btn-border"
                  onClick={this.handleOpen}
                >
                  <img
                    src="/image/icons/blue/love-blue.svg"
                    width="20"
                    height="20"
                    alt=""
                  />
                  <span className="btn-text">
                    {myAccountTitleConstants.noncashContributions.buttonTitle}
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
                    {myAccountTitleConstants.noncashContributions.title}
                  </DialogTitle>
                  <DialogContent>
                    <NavLink
                      to="#"
                      className="dialog-close mobile-close-icons"
                      onClick={this.handleClose}
                    >
                      <i className="fa fa-close" />
                    </NavLink>
                    <ContributionForm
                      {...this.props}
                      submitting={submitting}
                      onInitialize={this.handleInitialize}
                      onValidSubmit={this.handleSubmit}
                      handleClose={this.handleClose}
                    />
                  </DialogContent>
                </Dialog>
                {/* Non Cash Contributions Details */}
                <Dialog
                  fullWidth
                  className="custom-dialog"
                  scroll="paper"
                  open={openDetail}
                  maxWidth="md"
                >
                  <DialogTitle style={{ background: "#d9e8f4" }}>
                    {myAccountTitleConstants.noncashContributions.title}
                  </DialogTitle>
                  <DialogContent>
                    <NavLink
                      to="#"
                      className="dialog-close"
                      onClick={this.handleClose}
                    >
                      <i className="fa fa-close" />
                    </NavLink>
                    <Detail detail={currentData} />
                  </DialogContent>
                </Dialog>
              </td>
            </tr>
          </tbody>
        </table>
        {/* <!-- Direct Noncash Contributions Details --> */}
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
                    {myAccountListConstants.propertyName.text}
                  </h6>
                </th>
                <th className="align-middle p-3 border-top-0">
                  <h6 className="th-amount mb-0">
                    {myAccountListConstants.propertyType.text}
                  </h6>
                </th>
                <th className="align-middle p-3 border-top-0">
                  <h6 className="th-amount mb-0">
                    {myAccountListConstants.marketValue.text}
                  </h6>
                </th>
              </tr>
              {this._renderRows(dataList)}
            </tbody>
          </table>
        </div>
        <ToastContainer autoClose={3000} />
        {/* <!-- Direct Noncash Contributions Details Ends --> */}
      </div>
    );
  }
}

export default NoncashContributions;

// export default createContainer(() => {
//   const currentUser = Session.get("currentUserId");
//   const handle = Meteor.subscribe(
//     "collect_nccontribute_by_userid",
//     currentUser
//   );
//   const dataArray = getNCContributeByUserId(currentUser);
//   const loading = !handle.ready();
//   const dataList = dataArray ? dataArray[0].data : [];
//   return {
//     dataList,
//     loading
//   };
// }, NoncashContributions);
