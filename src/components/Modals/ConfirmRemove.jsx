/*

Component : ConfirmRemove

 */

/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

/** ****************************** Import components *************************** */
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

/** ****************************** Import constants *************************** */
import { removeFavMyCharities } from "../../constants/my-account-constants";

class ConfirmDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { openModal, doProcess, closeModal } = this.props;
    return (
      <Dialog
        className="custom-dialog terms-conditions"
        scroll="paper"
        open={openModal}
        maxWidth="md"
      >
        <DialogTitle style={{ background: "#d9e8f4" }}>          
          {removeFavMyCharities.modalTitle.title}
        </DialogTitle>
        <NavLink to="#" className="dialog-close" onClick={() => closeModal()}>
          <i className="fa fa-close" />
        </NavLink>
        <DialogContent>
          <div className="remove-my-charity-content pt-4">
            <div className="align-middle">
              <p className="text-justify mb-3">
                {removeFavMyCharities.modalTitle.text}                
              </p>
            </div>
            <div className="align-middle">
              <Button
                color="secondary"
                variant="contained"
                size="medium"
                type="submit"
                className="blue-bg text-inherit pull-right"
                onClick={() => doProcess()}
              >
                {removeFavMyCharities.modalTitle.btnText}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
}

ConfirmDelete.propTypes = {
  doProcess: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default ConfirmDelete;
