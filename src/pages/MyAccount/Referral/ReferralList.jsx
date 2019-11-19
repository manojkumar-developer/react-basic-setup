/* 

Component : ReferralList 

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Scrollbars } from "react-custom-scrollbars";
//import { createContainer } from "meteor/react-meteor-data";

/** ******************* Import Constants **************** */
import { referralConstants } from "../../../constants/my-account-constants";

/** ****************************** Import commonfunctions *************************** */
import { displayNameLetters } from "../../../utils/common";
import { displayName } from "../../../utils/common";

/** ****************************** Import API *************************** */
// import { getVerifiedReferrals } from "/imports/api/referrals";

class ReferralList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _renderList = () => {
    const { referralList } = this.props;
    if (!referralList) return null;
    return referralList.map(function(item) {
      return (
        <div
          key={item._id}
          className="d-flex friends-verify-list align-middle mb-3 mt-3"
        >
          <div className="col-11 pl-0">
            <div className="d-flex">
              <span className="verifee-profile p-2 text-white mr-3 pale-green-bg rounded-circle">
                {displayNameLetters(item.firstName, item.lastName)}
              </span>
              <h6 className="verifee-name mt-2">
                {item ? displayName(item.firstName, item.lastName) : null}
              </h6>
            </div>
          </div>
          <div className="col-1 pr-0">
            <i className="fa fa-check pale-green mt-1 mr-3" />
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="col-xl-6 col-md-6">
        <div className="card verify-invitee mb-4 border-0 text-left">
          {/* Header */}
          <div className="card-header box-shadow pt-3 pb-3 border-bottom-0 bg-white">
            <div className="d-flex">
              <i className="fa fa-check-circle pale-green mt-1 mr-3" />
              <h6 className="mb-0 fw-600 mt-1">
                {referralConstants.referralList.title}
              </h6>
            </div>
          </div>
          {/* Body */}
          <Scrollbars autoHeight autoHeightMax={150}>
            <div className="card-body pt-0 pb-0">{this._renderList()}</div>
          </Scrollbars>
        </div>
      </div>
    );
  }
}

ReferralList.propTypes = {
  referralList: PropTypes.array.isRequired
};

export default ReferralList;

// export default createContainer(() => {
//   const currentUser = Session.get("currentUser");
//   const handle = Meteor.subscribe(
//     "collect_referrals_by_code",
//     currentUser.referralCode
//   );
//   const dataArray = getVerifiedReferrals(currentUser.referralCode);
//   const loading = !handle.ready();
//   const referralList = dataArray || [];
//   return {
//     referralList,
//     loading
//   };
// }, ReferralList);
