/* 

Component : Noncash-Grants 

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
//import { createContainer } from "meteor/react-meteor-data";
import { dripForm } from "react-drip-form";
import { NavLink } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { RadioButton } from "material-ui/RadioButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/** ****************************** Import Components *************************** */
import GrantFormA from "./GrantFormA";
import GrantFormB from "./GrantFormB";
import Detail from "./Detail";

/** ****************************** Import Constants and Common Functions *************************** */
import { propertyTypeList, various } from "../../../constants/lists";
import myAccountFormConstants from "../../../constants/my-account-forms";
import myAccountListConstants from "../../../constants/my-account-lists";
import myAccountTitleConstants from "../../../constants/my-account-titles";
import { displayDate, displayAmount } from "../../../utils/common";

/** ****************************** Import APIS *************************** */
// import { insertNoncashGrants } from "/imports/api/grants";
// import { getNCGrantsByUserId } from "/imports/api/grants";

class NoncashGrants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitting: false,
      loading: false,
      openNew: false,
      openDetail: false,
      method: "less_5000",
      currentData: null,
      visible: false,
      userId: null,
      currentYear: new Date().getFullYear()
    };
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentWillMount = () => {
  //   const userId = Session.get("currentUserId");
  //   this.setState({
  //     userId
  //   });
  // };

  handleOpen = () => {
    this.setState({ openNew: true, openDetail: false });
  };

  handleClose = () => {
    this.setState({ openNew: false, openDetail: false });
  };

  handleMethod = event => {
    const method = event.target.value;
    if (method) {
      this.setState({ method });
    }
  };

  _displayItem = () => {
    const { visible } = this.state;
    const isVisible = !visible;
    this.setState({ visible: isVisible });
  };

  // handleSubmit = inputData => {
  //   const self = this;
  //   const { method } = this.state;
  //   const userId = Session.get("currentUserId");
  //   const submitData = inputData;
  //   submitData.propertyType = method;
  //   this.setState({ submitting: true, openNew: true, loading: true });
  //   insertNoncashGrants(userId, submitData).then((result, err) => {
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
  //   }, 100);
  // };

  showDetails = currentData => {
    this.setState({
      openDetail: true,
      currentData
    });
  };

  changeYear = event => {
    const oldYear = event.target.value;
    const { currentYear } = this.state;
    if (oldYear !== currentYear) {
      this.setState({
        currentYear: oldYear
      });
    }
  };

  _renderRows = dataList => {
    const self = this;
    if (!dataList) return null;
    return dataList.map(function(data) {
      const dateVarious = data.dateVarious;
      return (
        <tr
          className="hover-popup"
          onClick={() => self.showDetails(data)}
          key={data.transactionId}
        >
          <td className="align-middle">
            <p className="donated-date mdm-txt text-muted mb-0">
              {dateVarious ? various : displayDate(data.date)}
            </p>
          </td>
          <td className="align-middle">
            <p className="reference-no mdm-txt text-muted mb-0">
              {data.transactionId}
            </p>
          </td>
          <td className="align-middle">
            <p className="reference-no mdm-txt text-muted mb-0">
              {data.charityName}
            </p>
          </td>
          <td className="align-middle">
            <p className="reference-no mdm-txt text-muted mb-0">
              {data.propertyName}
            </p>
          </td>
          <td className="align-middle relative">
            <h4 className="amount-donated fw-300 blue mb-0">
              {displayAmount(data.marketValue)}
            </h4>
          </td>
        </tr>
      );
    });
  };

  _renderLess = () => {
    const { submitting } = this.state;
    return (
      <GrantFormA
        {...this.props}
        submitting={submitting}
        onValidSubmit={this.handleSubmit}
        handleClose={this.handleClose}
      />
    );
  };

  _renderMore = () => {
    const { submitting } = this.state;
    return (
      <GrantFormB
        {...this.props}
        submitting={submitting}
        onValidSubmit={this.handleSubmit}
        handleClose={this.handleClose}
      />
    );
  };

  render() {
    const { openNew, currentData, openDetail, method } = this.state;
    const { dataList } = this.props;
    const self = this;
    return (
      <div className="right-content table-right-content">
        {/* <!-- Recent Activities --> */}
        <table className="table table-header mb-4 table-responsive-sm">
          <tbody>
            <tr className="d-flex">
              <td className="align-middle pt-0 pb-0 col-8">
                <h3 className="fw-500 mb-0">
                  {myAccountTitleConstants.noncashGrants.title}
                </h3>
              </td>
              <td className="align-middle border-left text-center pt-0 pb-4 col-4">
                <button
                  className="btn btn-custom btn-border"
                  onClick={this.handleOpen}
                >
                  <img
                    src="/image/icons/directnoncashgrants.svg"
                    width="20"
                    height="20"
                    alt=""
                  />
                  <span className="btn-text">
                    {myAccountTitleConstants.noncashGrants.buttonTitle}
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
                    {myAccountTitleConstants.noncashGrants.title}
                  </DialogTitle>

                  <DialogContent>
                    <NavLink
                      to="#"
                      className="dialog-close mobile-close-icons"
                      onClick={this.handleClose}
                    >
                      <i className="fa fa-close" />
                    </NavLink>
                    <div className="donated-property-form">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="donated-property pl-3 pt-3">
                            <form>
                              <div className="row">
                                {Object.keys(propertyTypeList).map(function(
                                  key
                                ) {
                                  const dataValue = propertyTypeList[key].id;
                                  return (
                                    <div className="col-md-6" key={dataValue}>
                                      <RadioButton
                                        value={dataValue}
                                        label={propertyTypeList[key].value}
                                        style={{ display: "inline-block" }}
                                        onClick={self.handleMethod}
                                        checked={method === dataValue}
                                      />
                                    </div>
                                  );
                                })}
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="render-methods">
                        {method === "less_5000"
                          ? this._renderLess()
                          : this._renderMore()}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                {/* Grants Details */}
                <Dialog
                  fullWidth
                  className="custom-dialog"
                  scroll="paper"
                  open={openDetail}
                  maxWidth="md"
                >
                  <DialogTitle style={{ background: "#d9e8f4" }}>
                    {myAccountTitleConstants.noncashGrants.title}
                  </DialogTitle>
                  <DialogContent>
                    <NavLink
                      className="dialog-close"
                      to="#"
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
        {/* <!-- Noncash Grants Details --> */}
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
                    {myAccountListConstants.propertyName.text}
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
        {/* Msg Notification Box */}
        <ToastContainer autoClose={3000} />
        {/* <!-- Noncash Contribution Details Ends --> */}
      </div>
    );
  }
}

export default NoncashGrants;

// export default createContainer(() => {
//   const currentUser = Session.get("currentUserId");
//   const handle = Meteor.subscribe("collect_ncgrants_by_userid", currentUser);
//   const dataArray = getNCGrantsByUserId(currentUser);
//   const loading = !handle.ready();
//   const dataList = dataArray ? dataArray[0].data : [];
//   return {
//     dataList,
//     loading
//   };
// }, dripForm({})(NoncashGrants));
