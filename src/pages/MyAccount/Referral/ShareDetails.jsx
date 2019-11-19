/* 

Component : ShareDetails 

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
//import { createContainer } from "meteor/react-meteor-data";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { CopyToClipboard } from "react-copy-to-clipboard";

/** ****************************** Import Components *************************** */
import ProgressBar from "../../../components/ProgressBar";

/** ****************************** Import Constants *************************** */
import { referralLinkConstants } from "../../../constants/my-account-constants";
import { referralConstants } from "../../../constants/my-account-constants";
import myAccountFormConstants from "../../../constants/my-account-forms";
import { domainConfig } from "../../../config";

/** ****************************** Import API *************************** */
//import { getTotalReferrals } from "/imports/api/referrals";

class ShareDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCopied: false,
      referralCode: null,
      domianUrl: domainConfig.websiteUrl
    };
  }

  componentWillMount = () => {
    const { referralCode } = this.props;
    if (referralCode) {
      this.setState({
        referralCode
      });
    }
  };

  copyReferralCode = () => {
    this.setState({ isCopied: true });
  };

  doShareData = shareData => {
    const { domianUrl, referralCode } = this.state;
    const shareUrl = shareData.sharelink;
    const referralUrl = `${domianUrl}invite/${referralCode}`;
    let msgText = referralConstants.shareData.text;
    msgText += `%0A%0A`;
    msgText += referralConstants.shareData.linkText;
    msgText += referralUrl;
    msgText += `%0A%0A`;
    msgText += referralConstants.shareData.textEnd;
    window.open(
      `${shareUrl}${msgText}`,
      "popup",
      "width=1000,height=700,left=300,top=200"
    );
  };

  render() {
    const self = this;
    const { referralCode, isCopied, domianUrl } = this.state;
    const readings = [];
    const { referralCount } = this.props;
    let verifiedPercentage = 0;
    let unVerifiedPercentage = 0;
    // if (referralCount.total) {
    //   verifiedPercentage = (referralCount.verified / referralCount.total) * 100;
    //   unVerifiedPercentage =
    //     (referralCount.approval / referralCount.total) * 100;
    // }
    const totalPercentage = 100 - (verifiedPercentage + unVerifiedPercentage);
    if (referralCount) {
      // readings.push(
      //   {
      //     name: "Verified",
      //     value: verifiedPercentage.toFixed(2),
      //     color: "#2CC391"
      //   },
      //   {
      //     name: "Waiting for Approval",
      //     value: unVerifiedPercentage.toFixed(2),
      //     color: "#DCDCDC"
      //   },
      //   {
      //     name: "Total",
      //     value: totalPercentage.toFixed(2),
      //     color: "#DCDCDC"
      //   }
      // );
    }
    return (
      <div className="dashboard-graph text-center">
        <div className="row">
          {/* Left Section */}
          <div className="col-xl-12">
            {/* Current Task */}
            <div className="card current-task border-0 text-left">
              <div className="card-header border-bottom-0 bg-white">
                <div className="card-header-left float-left">
                  <div className="d-flex">
                    <i className="fa fa-briefcase blue mt-1 mr-3" />
                    <h5 className="mb-0 fw-600">{referralConstants.sharedDetails.title}</h5>
                  </div>
                  <p className="mt-3">{referralConstants.sharedDetails.text}</p>
                </div>
                <div className="card-header-right float-right">
                  <div className="current-social float-right">
                    <p className="fw-500 text-right mb-1">{referralConstants.sharedDetails.shareLinkText}</p>
                    <div className="d-flex">
                      {Object.keys(referralLinkConstants).map(function(key) {
                        return (
                          <div
                            key={key}
                            onClick={() =>
                              self.doShareData(referralLinkConstants[key])
                            }
                            role="presentation"
                          >
                            <Link to="#">
                              <i
                                className={`fa ${
                                  referralLinkConstants[key].class
                                } rounded-circle`}
                              />
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="referral-graph pl-3 pr-3 mt-2 mb-0">
                <ProgressBar readings={readings} />
              </div>
              <div className="card-body">
                <div className="row mt-2 mb-1">
                  <div className="col-sm-10 pt-2">
                    <input
                      className="form-control width-100"
                      placeholder={`${domianUrl}invite/${referralCode}`}
                      defaultValue={`${domianUrl}invite/${referralCode}`}
                      type="text"
                    />
                  </div>
                  <div className="col-sm-2 pt-2">
                    <CopyToClipboard
                      text={`${domianUrl}invite/${referralCode}`}
                      onCopy={() => this.copyReferralCode()}
                    >
                      <Button
                        color="primary"
                        variant="contained"
                        size="medium"
                        className="blue-bg text-capitalize width-100"
                      >
                        {referralConstants.sharedDetails.btnText}
                        <i className="fa fa-copy ml-1" />
                      </Button>
                    </CopyToClipboard>
                  </div>
                </div>
                <div className="copy-referral-link-box box-content-center">
                  {isCopied ? (
                    <span style={{ color: "green" }}>
                      {myAccountFormConstants.copySuccessMsg.text}
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ShareDetails.defaultProps = {
  referralCode: ""
};

ShareDetails.propTypes = {
  referralCode: PropTypes.string,
  referralCount: PropTypes.object.isRequired
};

export default ShareDetails;

// export default createContainer(() => {
//   const currentUser = Session.get("currentUser");
//   const handle = Meteor.subscribe(
//     "collect_total_referral_by_code",
//     currentUser.referralCode
//   );
//   const referralCount = getTotalReferrals(currentUser.referralCode);
//   const loading = !handle.ready();
//   return {
//     referralCount,
//     loading
//   };
// }, ShareDetails);
