/*

Component : ContributionsInfo

 */

/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

/** ****************************** Import components *************************** */
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

/* ***************************** Import constants ************************* */
import myAccountTitleConstants from "../../constants/my-account-titles";
import { CashContributionInfo } from "../../constants/my-account-constants";

class ContributionsInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleClose, openModal } = this.props;
    return (
      <Dialog
        fullWidth
        className="custom-dialog cash-contribution-info"
        scroll="paper"
        open={openModal}
        maxWidth="md"
      >
        <DialogTitle style={{ background: "#d9e8f4" }}>
          {myAccountTitleConstants.cashContributions.title}
        </DialogTitle>
        <DialogContent>
          <NavLink to="#" className="dialog-close" onClick={handleClose()}>
            <i className="fa fa-close" />
          </NavLink>
          <ul className="list-style pl-4 mt-3 mb-0">
            <li>
              <p className="text-justify">{CashContributionInfo.info1.text}</p>
            </li>
          </ul>
        </DialogContent>
      </Dialog>
    );
  }
}

ContributionsInfo.propTypes = {
  handleClose: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired
};

export default ContributionsInfo;
