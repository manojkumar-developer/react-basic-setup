/* 

Component : Credits 

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
//import { createContainer } from "meteor/react-meteor-data";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

/** ****************************** Import Components *************************** */
import CreditsDetail from "./CreditsDetail";
import PaymentModal from "../../../components/Modals/PaymentModal";
import ShowKeyModal from "../../../components/Modals/ShowKeyModal";

/** ****************************** Import Constants and Common Functions *************************** */
import myAccountListConstants from "../../../constants/my-account-lists";
import myAccountTitleConstants from "../../../constants/my-account-titles";
import myAccountFormConstants from "../../../constants/my-account-forms";
import { tkCreditsConstants } from "../../../constants/my-account-constants";
import { tkConstants } from "../../../config";
import { displayAmountWithComma } from "../../../utils/common";
import { displayDate } from "../../../utils/common";

/** ****************************** Import APIS *************************** */
//import { getCreditLogsByUser } from "/imports/api/logs";
//import { getUserById, updateUserById } from "/imports/api/users";
//import { getConfiguration } from "/imports/api/lists";


class Credits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payModal: false,
      keyModal: false,
      openDetail: false,
      currentData: null,
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
    this.setState({ openDetail: true });
  };

  handleClose = () => {
    this.setState({ openDetail: false });
  };

  showDetails = currentData => {
    this.setState({
      openDetail: true,
      currentData
    });
  };

  openPayModal = () => {
    this.setState({
      payModal: true
    });
  };

  openKeyModal = () => {
    this.setState({
      keyModal: true
    });
  };

  closeModal = () => {
    this.setState({
      payModal: false,
      keyModal: false
    });
  };

  handleToken = token => {
    if (token) {
      this.closeModal();
      this.openKeyModal();
    }
  };

  handleKey = secretKey => {
    const { userData } = this.props;
    if (secretKey) {
      this.closeModal();
      const inputData = userData;
      inputData.walletAddress = secretKey.publicKey;
      inputData.secretKey = secretKey.secretKey;
      inputData.stellarPayment = true;
      this.updateData(inputData);
    }
  };

  // updateData = inputData => {
  //   const userId = Session.get("currentUserId");
  //   updateUserById(userId, inputData).then((result, err) => {
  //     if (err) {
  //       toast.error(myAccountFormConstants.errorMsg.text);
  //     } else {
  //       toast.success(myAccountFormConstants.stellerSuccessMsg.text);
  //     }
  //   });
  // };

  _renderRows = dataList => {
    const self = this;
    const { configuration } = this.state;
    const { userData } = this.props;
    if (!dataList || Object.keys(configuration).length === 0) return null;
    return dataList.map(function(data) {
      const type = data ? data.type : null;
      const creditType = type ? tkConstants[type] : null;
      return (
        <tr className="hover-popup" key={data._id}>
          <td
            className="align-middle"
            role="presentation"
            onClick={() => self.showDetails(data)}
          >
            <p className="date mdm-txt text-muted mb-0">
              {displayDate(data.date)}
            </p>
          </td>
          <td
            className="align-middle"
            role="presentation"
            onClick={() => self.showDetails(data)}
          >
            <p className="charity-name mdm-txt text-muted mb-0">{creditType}</p>
          </td>
          <td
            className="align-middle"
            role="presentation"
            onClick={() => self.showDetails(data)}
          >
            <p className="time mdm-txt text-muted mb-0">
              {displayAmountWithComma(data.credits)}
            </p>
          </td>
          <td className="align-middle">
            {!userData.walletAddress ? (
              <a href="#" onClick={() => self.openPayModal()}>
                {tkCreditsConstants.linkTitle.text}
              </a>
            ) : null}

            {data.blockAffected ? (
              <a
                href={`${configuration.stellar.stellarUrl}tx/${data.hash}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {tkCreditsConstants.linkTitle.text}
              </a>
            ) : null}

            {data.blockAffected ? (
              <i className="fa fa-check pale-green font-weight-normal fs-20 ml-2 mt-1" />
            ) : null}
          </td>
        </tr>
      );
    });
  };

  render() {
    const { openDetail, currentData } = this.state;
    const { payModal, keyModal, configuration } = this.state;
    const { dataList, userData, loading } = this.props;
    if (loading) return null;
    return (
      <div className="right-content table-right-content">
        {/* <!-- Recent Activities --> */}
        <table className="table table-header mb-4 table-responsive-sm">
          <tbody>
            <tr className="d-flex">
              <td className="align-middle pt-0 pb-4 col-8">
                <h3 className="fw-500">
                  {myAccountTitleConstants.Credits.title}
                </h3>
              </td>
              <td className="align-middle text-center pt-0 pb-4 col-4">
                {/* Credits Details */}
                <Dialog
                  fullWidth
                  className="custom-dialog myaccount-formdetails"
                  scroll="paper"
                  open={openDetail}
                  maxWidth="sm"
                >
                  <DialogTitle style={{ background: "#d9e8f4" }}>
                    {myAccountTitleConstants.Credits.title}
                  </DialogTitle>
                  <DialogContent>
                    <NavLink
                      to="#"
                      className="dialog-close"
                      onClick={this.handleClose}
                    >
                      <i className="fa fa-close" />
                    </NavLink>
                    <CreditsDetail detail={currentData} />
                  </DialogContent>
                </Dialog>
              </td>
            </tr>
          </tbody>
        </table>
        {/* <!-- Credits Detail --> */}
        <div className="donation-details mb-5">
          <table className="table myaccount-dashboard-table my-donations mb-0 table-responsive-sm">
            <tbody>
              <tr className="table-heading">
                <th className="align-middle p-3 border-top-0 ">
                  <h6 className="th-date mb-0">
                    {myAccountListConstants.date.text}
                  </h6>
                </th>
                <th className="align-middle p-3 border-top-0">
                  <h6 className="th-method mb-0">
                    {myAccountListConstants.reason.text}
                  </h6>
                </th>
                <th className="align-middle p-3 border-top-0">
                  <h6 className="th-time mb-0">
                    {myAccountListConstants.credits.text}
                  </h6>
                </th>
                <th className="align-middle p-3 border-top-0">
                  <h6 className="th-time mb-0">
                    {myAccountListConstants.moreDetails.text}
                  </h6>
                </th>
              </tr>
              {this._renderRows(dataList)}
            </tbody>
          </table>
        </div>
        {/* <!-- Credits Detail --> */}
        {/** ********************************* Modals ********************************************** */}
        <PaymentModal
          openModal={payModal}
          // userEmail={userData.email}
          handleToken={this.handleToken}
          closeModal={() => this.closeModal()}
          configuration={configuration}
        />
        <ShowKeyModal
          openModal={keyModal}
          handleKey={this.handleKey}
          closeModal={() => this.closeModal()}
        />
      </div>
    );
  }
}

Credits.propTypes = {
  dataList: PropTypes.array.isRequired,
  userData: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Credits;

// export default createContainer(() => {
//   const currentUser = Session.get("currentUserId");
//   const handle = Meteor.subscribe("collect_credits_log_by_userid", currentUser);
//   const dataArray = getCreditLogsByUser(currentUser);
//   Meteor.subscribe("collect_user_by_id", currentUser);
//   Meteor.subscribe("collect_configuration");
//   const userData = getUserById(currentUser);
//   const configuration = getConfiguration();
//   const loading = !handle.ready();
//   const dataList = dataArray ? dataArray[0].data : [];
//   return {
//     userData,
//     dataList,
//     loading,
//     configuration
//   };
// }, Credits);
