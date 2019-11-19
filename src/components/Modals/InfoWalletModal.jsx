/*

Component : InfoWalletModal

 */
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

/** ****************************** Import components ************************** */
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

/** ****************************** Import sub-components ************************** */
import WalletDetails from "./WalletDetails";

class InfoWalletModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { openModal, closeModal } = this.props;
    return (
      <Dialog
        className="custom-dialog info-sign-in-modal"
        scroll="paper"
        open={openModal}
        maxWidth="md"
      >
        <NavLink to="#" className="dialog-close" onClick={() => closeModal()}>
          <i className="fa fa-close" />
        </NavLink>
        <DialogContent>
          <WalletDetails />
        </DialogContent>
      </Dialog>
    );
  }
}

InfoWalletModal.propTypes = {
  openModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default InfoWalletModal;
