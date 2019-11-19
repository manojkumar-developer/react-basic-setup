/*

Component : ShowKeyModal

 */
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

/** ****************************** Import components *************************** */
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";

/* ***************************** Import constants ************************* */
import { regConstants } from "../../constants/registration";
import { walletAddressConstants } from "../../constants/wallet-info-constants";

/** ****************************** Import commonfunctions *************************** */
//import { generateStellarKey } from "/imports/api/stellar";

class ShowKeyModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stellar: {},
      isCopyAddress: false,
      isCopyKey: false
    };
  }

  // componentDidMount = () => {
  //   const stellar = generateStellarKey();
  //   if (stellar) {
  //     this.setState({ stellar });
  //   }
  // };

  copyPublicKey = () => {
    this.setState({ isCopyAddress: true });
  };

  copySecretKey = () => {
    this.setState({ isCopyKey: true });
  };

  _confirmWallet = () => {
    const { handleKey } = this.props;
    const { stellar } = this.state;
    handleKey(stellar);
  };

  render() {
    const { openModal, closeModal } = this.props;
    const { stellar, isCopyAddress, isCopyKey } = this.state;
    return (
      <Dialog
        className="custom-dialog"
        scroll="paper"
        open={openModal}
        maxWidth="lg"
      >
        <DialogTitle
          style={{
            background: "#d9e8f4",
            width: "900px",
            maxWidth: "100%"
          }}
        >
          {walletAddressConstants.walletAddress.title}
        </DialogTitle>
        <DialogContent>
          <div className="dialog-content-box pl-0 pt-3 pr-0 mb-4">
            {/* Public Key */}
            <div className="public-key-box">
              <p className="mdm-text mt-3 mb-3 fw-600">{walletAddressConstants.walletAddress.publicKeyText}</p>
              <div className="row">
                <div className="col-xl-10 col-sm-8 pb-3">
                  <input
                    className="form-control width-100"
                    placeholder={stellar ? stellar.publicKey : null}
                    defaultValue={stellar ? stellar.publicKey : null}
                    type="text"
                  />
                </div>
                <div className="col-xl-2 col-sm-4 pb-3">
                  <CopyToClipboard
                    text={stellar ? stellar.publicKey : null}
                    onCopy={() => this.copyPublicKey()}
                  >
                    <Button
                      color="primary"
                      variant="contained"
                      size="medium"
                      className="blue-bg text-capitalize width-100"
                    >
                      {walletAddressConstants.walletAddress.copyBtnText}
                      <i className="fa fa-copy ml-1" />
                    </Button>
                  </CopyToClipboard>
                </div>
              </div>
              <div className="copy-referral-link-box box-content-center">
                {isCopyAddress ? (
                  <span style={{ color: "green" }}>
                    {walletAddressConstants.walletAddress.copiedSucessMsg}
                  </span>
                ) : null}
              </div>
            </div>
            {/* Secret Key */}
            <div className="secret-key-box">
              <p className="mdm-text mt-3 mb-3 fw-600">{walletAddressConstants.walletAddress.secretKeyText}</p>
              <div className="row pb-0 mb-0">
                <div className="col-xl-10 col-sm-8 pb-3">
                  <input
                    className="form-control width-100"
                    placeholder={stellar ? stellar.secretKey : null}
                    defaultValue={stellar ? stellar.secretKey : null}
                    type="text"
                  />
                </div>
                <div className="col-xl-2 col-sm-4 pb-3">
                  <CopyToClipboard
                    text={stellar ? stellar.secretKey : null}
                    onCopy={() => this.copySecretKey()}
                  >
                    <Button
                      color="primary"
                      variant="contained"
                      size="medium"
                      className="blue-bg text-capitalize width-100"
                    >
                      {walletAddressConstants.walletAddress.copyBtnText}
                      <i className="fa fa-copy ml-1" />
                    </Button>
                  </CopyToClipboard>
                </div>
              </div>
              <div className="copy-referral-link-box box-content-center">
                {isCopyKey ? (
                  <span style={{ color: "green" }}>
                    {walletAddressConstants.walletAddress.copiedSucessMsg}
                  </span>
                ) : null}
              </div>
            </div>
            {/* Note Msg Box */}
            <div className="note-msg-box mt-3 mb-4 text-center">
              <p className="mdm-text red p-2 theme-bg-color2 border">
                {walletAddressConstants.walletAddress.importantMsg}                
              </p>
            </div>
          </div>
           <div className="login-buttons mt-3 mb-3">
           <div className="d-flex flex-row justify-content-end">
              <div className="align-middle">
                <Button
                  color="primary"
                  variant="contained"
                  size="medium"
                  type="button"
                  className="blue-bg text-inherit confirm-close-modal"
                  onClick={() => this._confirmWallet()}
                >
                  {regConstants.confirm.label}
                </Button>
              </div>
            </div>
         </div>
        </DialogContent>
      </Dialog>
    );
  }
}

ShowKeyModal.propTypes = {
  openModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  handleKey: PropTypes.func.isRequired
};

export default ShowKeyModal;
