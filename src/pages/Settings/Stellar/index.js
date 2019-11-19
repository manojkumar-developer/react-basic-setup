/*

Component : Stellar

*/

/** ****************************** Import packages *************************** */
import React, { Component } from "react";
//import { createContainer } from "meteor/react-meteor-data";
import { BeatLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import Button from "@material-ui/core/Button";
import "react-toastify/dist/ReactToastify.css";

/** ****************************** Import subclass *************************** */
import PaymentModal from "../../../components/Modals/PaymentModal";
import ShowKeyModal from "../../../components/Modals/ShowKeyModal";

/** ****************************** Import Constants *************************** */
import myAccountFormConstants from "../../../constants/my-account-forms";
import { stellerSettingsConstants } from "../../../constants/my-account-constants"
import { displayAmountWithComma } from "../../../utils/common";

/** ****************************** Import APIS *************************** */
// import { updateUserById, updateStellarByUserById } from "/imports/api/users";
// import { getUserById } from "/imports/api/users";
// import { getConfiguration } from "/imports/api/lists";

class Stellar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payModal: false,
      keyModal: false,
      userData: {},
      loading: false,
      stellar: {}
    };
  }

  // componentWillMount = () => {
  //   const userData = Session.get("currentUser");
  //   if (userData) {
  //     updateStellarByUserById(userData._id);
  //     this.setState({
  //       userData
  //     });
  //   }
  // };

  componentWillReceiveProps = nextprops => {
    if (nextprops && nextprops.configuration) {
      const stellar = nextprops.configuration.stellar;
      const userData = nextprops.userData;
      this.setState({ stellar, userData });
    }
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
    const { userData } = this.state;
    if (secretKey) {
      this.closeModal();
      const inputData = userData;
      inputData.walletAddress = secretKey.publicKey;
      inputData.secretKey = secretKey.secretKey;
      inputData.stellarPayment = true;
      this.updateData(inputData);
      this.setState({
        loading: true
      });
    }
  };

  // updateData = inputData => {
  //   const userId = Session.get("currentUserId");
  //   const self = this;
  //   updateUserById(userId, inputData).then((result, err) => {
  //     if (err) {
  //       toast.error(myAccountFormConstants.errorMsg.text);
  //     } else {
  //       toast.success(myAccountFormConstants.stellerSuccessMsg.text);
  //       self.setState({
  //         userData: inputData
  //       });
  //       Meteor.setTimeout(() => {
  //         toast.success(myAccountFormConstants.stellerSuccessMsg.waitingText);
  //         updateStellarByUserById(userId);
  //       }, 10000);
  //       Meteor.setTimeout(() => {
  //         self.setState({
  //           loading: false
  //         });
  //       }, 11000);
  //     }
  //   });
  // };

  renderWallet = details => {
    const { stellar } = this.state;
    const walletAddress = details ? details.account_id : null;
    return (
      <div className="accordion mb-4" id="accordionzero">
        <div
          className="wallet-address accordion-inner"
          data-toggle="collapse"
          data-target="#collapseZero"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <div className="row align-middle acc-heading relative ml-0 mr-0">
            <div className="col-12 p-3">
              <span className="accordion-title">{stellerSettingsConstants.walletAddress.title}</span>
              <span className="pt-2 text-right accordion-link">
                <button
                  className="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseZero"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <i className="fa fa-angle-right text-dark" />
                </button>
              </span>
            </div>
          </div>
          <div
            className="row align-middle ml-0 mr-0 border-bottom collapse show"
            id="collapseZero"
            aria-labelledby="headingOne"
            data-parent="#accordionzero"
          >
            <div className="col-xl-12 pt-3">
              <p className="text-truncate mdm-txt">
                {walletAddress ? (
                  <a
                    href={`${stellar.stellarUrl}address/${walletAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {walletAddress}
                  </a>
                ) : null}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  renderNativeAsset = stellarData => {
    const sBalance = stellarData ? stellarData.balances : null;
    if (sBalance && !sBalance[1]) return null;
    let nativeBalance = null;
    if (sBalance && sBalance[1].asset_type === "native") {
      nativeBalance = sBalance[1];
    }
    return (
      <div className="accordion mb-4" id="accordionExample">
        <div
          className="wallet-balance accordion-inner"
          data-toggle="collapse"
          data-target="#collapseOne"
          aria-expanded="false"
          aria-controls="collapseOne"
        >
          <div className="row align-middle acc-heading relative ml-0 mr-0">
            <div className="col-sm-12 p-3">
              <span className="accordion-title">
                {nativeBalance.balance}
                <span className="ml-1 text-muted">{stellerSettingsConstants.walletBalance.subTitle1}</span>
              </span>
              <span className="pt-2 text-right accordion-link">
                <button
                  className="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <i className="fa fa-angle-right text-dark" />
                </button>
              </span>
            </div>
          </div>
          <div
            className="row align-middle mb-4 pt-3 pb-3 ml-0 mr-0 border-bottom collapse show"
            id="collapseOne"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div className="col-xl-5">
              <table className="table mb-0 table-responsive-sm">
                <tbody>
                  <tr className="mt-2">
                    <td className="align-middle p-3 border-right">
                      <p className="th-date text-dark mb-0">
                        <span className="mr-1 text-muted mdm-txt">
                          {stellerSettingsConstants.XLMLists.title1}
                        </span>
                      </p>
                    </td>
                    <td className="align-middle bg-f7 border-right">
                      <p className="date mdm-txt text-muted mb-0">
                        {nativeBalance.buying_liabilities}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-middle p-3 border-bottom border-right">
                      <p className="th-charities text-dark mb-0">
                        <span className="mr-1 text-muted mdm-txt">
                          {stellerSettingsConstants.XLMLists.title2}
                        </span>
                      </p>
                    </td>
                    <td className="align-middle bg-f7 border-bottom border-right">
                      <p className="charity-name mdm-txt text-muted mb-0">
                        {nativeBalance.selling_liabilities}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };

  renderKarmaAsset = stellarData => {
    const { stellar } = this.state;
    const sBalance = stellarData ? stellarData.balances : null;
    if (sBalance && !sBalance[0]) return null;
    let karmaBalance = null;
    if (sBalance && sBalance[0].asset_type !== "native") {
      karmaBalance = sBalance[0];
    }
    if (!karmaBalance) return null;
    const balance = parseInt(karmaBalance.balance, 10);
    const limit = parseInt(karmaBalance.limit, 10);
    const buyingLiabilities = parseInt(karmaBalance.buying_liabilities, 10);
    const sellingLiabilities = parseInt(karmaBalance.selling_liabilities, 10);
    return (
      <div className="accordion" id="accordionExample1">
        <div
          className="custom-assests accordion-inner"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseOne"
        >
          <div className="row align-middle acc-heading relative ml-0 mr-0">
            <div className="col-sm-12 p-3">
              <span className="accordion-title">
                {displayAmountWithComma(balance) || 0}
                <span className="ml-1 text-muted">
                  {karmaBalance.asset_code}
                </span>
              </span>
              <span className="pt-2 text-right accordion-link">
                <button
                  className="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <i className="fa fa-angle-right text-dark" />
                </button>
              </span>
            </div>
          </div>
          <div
            className="row align-middle mb-4 pt-3 pb-3 ml-0 mr-0 border-bottom collapse show"
            id="collapseTwo"
            aria-labelledby="headingOne"
            data-parent="#accordionExample1"
          >
            <div className="col-xl-12">
              <table className="table mb-0 table-responsive-sm">
                <tbody>
                  <tr>
                    <td className="align-middle p-3 border-right">
                      <p className="th-charities text-dark mb-0">
                        <span className="mr-1 text-muted mdm-txt">
                          {stellerSettingsConstants.TKCoins.title1}
                        </span>
                      </p>
                    </td>
                    <td className="align-middle bg-f7 border-right">
                      <p className="charity-name mdm-txt text-muted mb-0">
                        <span className="text-truncate">
                          {karmaBalance.asset_issuer ? (
                            <a
                              href={`${stellar.stellarUrl}address/${
                                karmaBalance.asset_issuer
                              }`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {karmaBalance.asset_issuer}
                            </a>
                          ) : null}
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-middle p-3 border-right">
                      <p className="th-charities text-dark mb-0">
                        <span className="mr-1 text-muted mdm-txt">
                        {stellerSettingsConstants.TKCoins.title2}
                        </span>
                      </p>
                    </td>
                    <td className="align-middle bg-f7 border-right">
                      <p className="charity-name mdm-txt text-muted mb-0">
                        {displayAmountWithComma(buyingLiabilities) || 0}
                        <span className="ml-1 text-muted">
                          {karmaBalance.asset_code}
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-middle p-3 border-right">
                      <p className="th-charities text-dark mb-0">
                        <span className="mr-1 text-muted mdm-txt">
                          {stellerSettingsConstants.TKCoins.title3}
                        </span>
                      </p>
                    </td>
                    <td className="align-middle bg-f7 border-right">
                      <p className="charity-name mdm-txt text-muted mb-0">
                        {displayAmountWithComma(sellingLiabilities) || 0}
                        <span className="ml-1 text-muted">
                          {karmaBalance.asset_code}
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-middle p-3 border-bottom border-right">
                      <p className="th-charities text-dark mb-0">
                        <span className="mr-1 text-muted mdm-txt">{stellerSettingsConstants.TKCoins.title4}</span>
                      </p>
                    </td>
                    <td className="align-middle bg-f7 border-bottom border-right">
                      <p className="charity-name mdm-txt text-muted mb-0">
                        {displayAmountWithComma(limit) || 0}
                        <span className="ml-1 text-muted">
                          {karmaBalance.asset_code}
                        </span>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { payModal, keyModal, userData, loading } = this.state;
    const stellarData = userData.stellarDetails;
    let showData = false;
    if (stellarData && Object.keys(stellarData).length !== 0) {
      showData = true;
    }
    if (loading) {
      return (
        <div>
          <BeatLoader color="#57B1FB" loading={loading} />
          <ToastContainer autoClose={2500} />
        </div>
      );
    }
    return (
      <div className="profile-details">
        <div className="d-flex flex-column mb-0">
          <div className="row">
            <div className="col-xl-12">
              <div className="col-xl-6 col-sm-6 reg-stellar-button text-left">
                <Button
                  color="primary"
                  variant="contained"
                  size="medium"
                  className={showData ? `d-none` : `blue-bg text-inherit mb-2`}
                  onClick={() => this.openPayModal()}
                >
                  {"Create Stellar Wallet"}
                </Button>
              </div>
              {/* Stellar Details */}
              <div className={showData ? `stellar-details` : `d-none`}>
                {showData ? this.renderWallet(stellarData) : null}
                <p>{stellerSettingsConstants.walletBalance.title}</p>
                {showData ? this.renderNativeAsset(stellarData) : null}
                {showData ? this.renderKarmaAsset(stellarData) : null}
              </div>
            </div>
          </div>
        </div>
        {/** ********************************* Modals ********************************************** */}
        <PaymentModal
          openModal={payModal}
          userEmail={userData.email}
          handleToken={this.handleToken}
          closeModal={() => this.closeModal()}
        />
        <ShowKeyModal
          openModal={keyModal}
          handleKey={this.handleKey}
          closeModal={() => this.closeModal()}
        />
        {/* Msg Notification Box */}
        <ToastContainer autoClose={2500} />
      </div>
    );
  }
}

export default Stellar;

// export default createContainer(() => {
//   const currentUser = Session.get("currentUserId");
//   Meteor.subscribe("collect_configuration");
//   Meteor.subscribe("collect_user_by_id", currentUser);
//   const configuration = getConfiguration();
//   const userData = getUserById(currentUser);
//   return {
//     userData,
//     configuration
//   };
// }, Stellar);
