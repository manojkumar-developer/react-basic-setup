/* 

Component : ApprovalList 

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
//import { createContainer } from "meteor/react-meteor-data";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { Scrollbars } from "react-custom-scrollbars";

/** ****************************** Import Constants *************************** */
import { referralConstants } from "../../../constants/my-account-constants";

/** ****************************** Import common functions *************************** */
import { displayNameLetters } from "../../../utils/common";
import { displayName } from "../../../utils/common";

/** ****************************** Import API *************************** */
// import { getUnverifiedReferrals } from "/imports/api/referrals";
// import { referalVerifyById } from "/imports/api/referrals";

class ApprovalList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalData: [],
      modalOpen: false,
      verifyDone: false
    };
  }

  openApproval = userData => {
    if (userData) {
      this.setState({ modalOpen: true, modalData: userData });
    }
  };

  _closeVerify = () => {
    this.setState({
      modalOpen: false,
      modalData: [],
      verifyDone: false
    });
  };

  // _verifyUser = userId => {
  //   const referrerId = Session.get("currentUserId");
  //   referalVerifyById(userId, referrerId).then(result => {
  //     if (result) {
  //       this.setState({ verifyDone: true });
  //       this._closeVerify();
  //     }
  //   });
  // };

  _renderModalItems = () => {
    const { modalData, verifyDone } = this.state;
    if (!modalData) return null;
    return (
      <div>
        <div className="dialog-content pt-4 pb-4">
          <span className="mr-1">{referralConstants.approvalList.verifyRequestBy}</span>
          <span className="text-dark fw-600">
            {modalData
              ? displayName(modalData.firstName, modalData.lastName)
              : null}
          </span>
        </div>
        <div className="float-right">
          <Button
            variant="contained"
            size="small"
            className="red-bg text-white text-capitalize"
            onClick={() => this._closeVerify()}
          >
            {referralConstants.approvalList.cancelBtn}
          </Button>
          <Button
            variant="contained"
            size="small"
            className="blue-bg text-white ml-2 text-capitalize"
            onClick={() => this._verifyUser(modalData.userId)}
          >
            {referralConstants.approvalList.verifyBtn}
          </Button>
        </div>
        <span>{verifyDone ? referralConstants.approvalList.verifiedMsg : null}</span>
      </div>
    );
  };

  _renderList = () => {
    const self = this;
    const { approveList } = this.props;
    if (!approveList) return null;
    return approveList.map(function(item) {
      return (
        <div
          key={item._id}
          className="d-flex friends-verify-list align-middle mb-3 mt-3"
        >
          <div className="col-8 pl-0">
            <div className="d-flex">
              <p className="verifee-profile mb-0 mr-3">
                <span className="profile-short-details red-bg rounded-circle p-2 text-white">
                  {displayNameLetters(item.firstName, item.lastName)}
                </span>
              </p>
              <h6 className="verifee-name mt-2">
                {`${item.firstName} ${item.lastName}`}
              </h6>
            </div>
          </div>
          <div className="col-4 pr-0">
            <Button
              color="primary"
              variant="contained"
              size="medium"
              className="theme-bg-color3 verify-review-button text-dark float-right text-capitalize"
              onClick={() => self.openApproval(item)}
            >
              {referralConstants.approvalList.reviewBtn}
            </Button>
          </div>
        </div>
      );
    });
  };

  render() {
    const { totalRecords } = this.props;
    const { modalOpen } = this.state;
    return (
      <div className="col-xl-6 col-md-6">
        <div className="card verification-box mb-4 border-0 text-left">
          {/* Header */}
          <div className="card-header box-shadow pt-3 pb-3 border-bottom-0 bg-white">
            <div className="d-flex">
              <i className="fa fa-user-circle-o blue mt-1 mr-3" />
              <h6 className="mb-0 fw-600 mt-1">
                {referralConstants.approvalList.title1}
                <span className="red ml-1 mr-1 fw-600">{totalRecords}</span>
                {referralConstants.approvalList.title2}
              </h6>
            </div>
          </div>
          {/* Body */}
          <Scrollbars autoHeight autoHeightMax={150}>
            <div className="card-body pt-0 pb-0">{this._renderList()}</div>
            <Dialog
              className="custom-dialog"
              scroll="paper"
              open={modalOpen}
              maxWidth="sm"
            >
              <DialogTitle style={{ background: "#d9e8f4" }}>
                {"Confirm Verification"}
              </DialogTitle>
              <DialogContent>{this._renderModalItems()}</DialogContent>
            </Dialog>
          </Scrollbars>
        </div>
      </div>
    );
  }
}

ApprovalList.propTypes = {
  approveList: PropTypes.array.isRequired,
  totalRecords: PropTypes.number.isRequired
};

export default ApprovalList;

// export default createContainer(() => {
//   const currentUser = Session.get("currentUser");
//   const handle = Meteor.subscribe(
//     "collect_approvals_by_code",
//     currentUser.referralCode
//   );
//   const dataArray = getUnverifiedReferrals(currentUser.referralCode);
//   const loading = !handle.ready();
//   const approveList = dataArray || [];
//   const totalRecords = approveList ? approveList.length : 0;
//   return {
//     approveList,
//     totalRecords,
//     loading
//   };
// }, ApprovalList);
