/* 

Component : MyCharities

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { BeatLoader } from "react-spinners";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/** ****************************** Import Components *************************** */
import MyCharitiesDetail from "./MyCharitiesDetail";
import ConfirmRemove from "../../../components/Modals/ConfirmRemove";

/** ****************************** Import Constants and Common Functions *************************** */
import myAccountTitleConstants from "../../../constants/my-account-titles";
import myAccountListConstants from "../../../constants/my-account-lists";
import myAccountFormConstants from "../../../constants/my-account-forms";
import noRecordsFoundConstants from "../../../constants/no-records-found";
import { displayEin } from "../../../utils/common";

/** ****************************** Import APIS *************************** */
// import { getCharityByUserId } from "/imports/api/charities";
// import { removeFavCharity } from "/imports/api/users";
// import { saveLocalUser } from "/imports/utils/auth";

class MyCharities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charityList: [],
      userData: {},
      favouriteCharity: [],
      selectedCharity: null,
      openConfirm: false,
      totalRecords: 0,
      openDetail: false,
      loading: true
    };
  }

  // componentWillMount = () => {
  //   const userData = Session.get("currentUser");
  //   if (userData) {
  //     this.setState({
  //       userData,
  //       favouriteCharity: userData.favouriteCharity
  //     });
  //   }
  //   this.handleReload();
  // };

  // handleReload = () => {
  //   const userId = Session.get("currentUserId");
  //   const self = this;
  //   if (userId) {
  //     getCharityByUserId(userId)
  //       .then(result => {
  //         if (result) {
  //           this.setState({
  //             charityList: result
  //           });  
  //           Meteor.setTimeout(function() {
  //             self.setState({ loading: false });
  //           }, 500);          
  //         }
  //       })
  //       .catch(error => {
  //         if (error) {
  //           console.log(error);     
  //           this.setState({
  //             loading: false
  //           });       
  //         }
  //       });
  //   }
  // };

  handleClose = () => {
    this.setState({ openDetail: false });
  };

  confirmRemove = charityId => {
    this.setState({
      selectedCharity: charityId,
      openDetail: false,
      openConfirm: true
    });
  };

  closeConfirm = () => {
    this.setState({
      openConfirm: false
    });
  };

  // removeFavCharity = () => {
  //   const self = this;
  //   const { userData, selectedCharity, favouriteCharity } = this.state;
  //   const index = favouriteCharity.indexOf(selectedCharity);
  //   removeFavCharity(userData._id, index)
  //     .then(result => {
  //       if (result) {
  //         favouriteCharity.splice(index, 1);
  //         userData.favouriteCharity = favouriteCharity;
  //         saveLocalUser(userData);
  //         self.handleReload();
  //         Meteor.setTimeout(function() {
  //           self.closeConfirm();
  //         }, 500);
  //         toast.success(myAccountFormConstants.removeSuccessMsg.text);
  //       }
  //     })
  //     .catch(error => {
  //       if (error) {
  //         console.log(error);
  //       }
  //     });
  // };

  showDetails = currentData => {
    this.setState({
      openDetail: true,
      currentData
    });
  };

  renderRows = charityList => {    
    const self = this;
    if (!charityList) return null;
    return charityList.map(function(data) {
      return (
        <tr className="hover-popup" key={data._id}>
          <td
            className="align-middle"
            role="presentation"
            onClick={() => self.showDetails(data)}
          >
            <p className="charity-name mdm-txt text-muted mb-0">
              {data.charityName}
            </p>
          </td>
          <td
            className="align-middle"
            role="presentation"
            onClick={() => self.showDetails(data)}
          >
            <p className="charity-name mdm-txt text-muted mb-0">
              {displayEin(data.ein)}
            </p>
          </td>
          <td className="align-middle hover-none">
            <p className="time mdm-txt text-muted mb-0">
              <button
                className="btn btn-custom btn-border"
                onClick={() => self.confirmRemove(data.charityId)}
              >
                <span className="btn-text">{`Remove`}</span>
              </button>
            </p>
          </td>
        </tr>
      );
    });
  };

  renderLoader = () => {
    const { loading } = this.state;
    return (
      <div className="card-deck text-dark loader-box justify-content-center">
        <div className="row">
          <div className="col-xs-12">
            <div className="jumbotron justify-content-center">              
              <BeatLoader color="#57B1FB" loading={loading} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { charityList, openDetail, openConfirm, currentData, loading } = this.state;
    return (
      <div className="right-content table-right-content">
        {/* <!-- Recent Activities --> */}
        <table className="table table-header mb-4 table-responsive-sm">
          <tbody>
            <tr className="d-flex">
              <td className="align-middle pt-0 pb-4 col-8">
                <h3 className="fw-500">
                  {myAccountTitleConstants.myCharities.title}
                </h3>
              </td>
            </tr>
          </tbody>
        </table>
        <ConfirmRemove
          openModal={openConfirm}
          doProcess={() => this.removeFavCharity()}
          closeModal={() => this.closeConfirm()}
        />
        <Dialog
          fullWidth
          className="custom-dialog"
          scroll="paper"
          open={openDetail}
          maxWidth="sm"
        >
          <DialogTitle style={{ background: "#d9e8f4" }}>
            {myAccountTitleConstants.myCharities.title}
          </DialogTitle>
          <DialogContent>
            <NavLink to="#" className="dialog-close" onClick={this.handleClose}>
              <i className="fa fa-close" />
            </NavLink>
            <MyCharitiesDetail detail={currentData} />
          </DialogContent>
        </Dialog>
        {/* <!-- Credits Detail --> */}
        <div className="my-truekarma-details mb-5">
          <table className="table myaccount-dashboard-table mb-0 table-responsive-sm">
            <tbody>
              <tr className="table-heading">
                <th className="align-middle p-3 border-top-0">
                  <h6 className="th-method mb-0">{myAccountListConstants.charityName.text}</h6>
                </th>
                <th className="align-middle p-3 border-top-0">
                  <h6 className="th-method mb-0">{myAccountListConstants.ein.text}</h6>
                </th>
                <th className="align-middle p-3 border-top-0">
                  <h6 className="th-method mb-0">{myAccountListConstants.actions.text}</h6>
                </th>
              </tr>   
              {/* {this.renderRows(charityList)} */}
              {/* {loading ? this.renderLoader() : this.renderRows(charityList)} */}
              {this.renderRows(charityList)}
            </tbody>
          </table>          
          {/* Msg Notification Box */}
          <ToastContainer autoClose={3000} />
        </div>
        {/* <!-- Credits Detail --> */}
      </div>
    );
  }
}

export default MyCharities;
