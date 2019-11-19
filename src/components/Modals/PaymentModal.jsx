/*

Component : PaymentModal

 */
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
//import { createContainer } from "meteor/react-meteor-data";
import StripeCheckout from "react-stripe-checkout";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

/** ****************************** Import components *************************** */
import WalletDetails from "./WalletDetails";

/** ****************************** Import commonfunctions *************************** */
import { walletInfoConstants } from "../../constants/wallet-info-constants";
// import { getConfiguration } from "../../api/lists";

/** ****************************** Import constants *************************** */
import { domainConfig } from "../../config";

class PaymentModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stripe: {}
    };
  }

  componentWillReceiveProps = nextprops => {
    if (nextprops && nextprops.configuration) {
      const stripe = nextprops.configuration.stripe;
      this.setState({ stripe });
    }
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  _handleOpen = () => {
    const { closeModal } = this.props;
    closeModal();
  };

  render() {
    const { openModal, closeModal, handleToken, userEmail } = this.props;
    const { stripe } = this.state;
    if (Object.entries(stripe).length === 0) return null;
    return (
      <Dialog
        className="custom-dialog"
        scroll="paper"
        open={openModal}
        maxWidth="md"
      >
        <NavLink to="#" className="dialog-close" onClick={() => closeModal()}>
          <i className="fa fa-close" />
        </NavLink>
        <DialogContent>
          <div>
            <WalletDetails />
            <div className="dialog-content-box mt-2 float-right">
              <StripeCheckout
                className="text-inherit"
                primary
                stripeKey={stripe.publicKey}
                panelLabel={`Pay ${
                  walletInfoConstants.offerPrice.text
                } (One Time Fee)`}
                token={handleToken}
                email={userEmail}
                description="Earn TrueKarma with every donation!"
                image={`${domainConfig.websiteUrl}image/fav/TK-64x64.png`}
                locale="auto"
                name="TrueKarma.org"
                amount={walletInfoConstants.offerPrice.value}
                zipCode
              >
                <Button
                  color="primary"
                  variant="contained"
                  size="medium"
                  type="button"
                  className="pale-green-bg text-inherit"
                  onClick={() => this._handleOpen()}
                >
                  <span className="mr-1">
                    {walletInfoConstants.walletBtn.text1}
                  </span>
                  <span className="mr-1">
                    {walletInfoConstants.offerPrice.text}
                  </span>
                  <span className="">
                    {walletInfoConstants.walletBtn.text2}
                  </span>
                </Button>
              </StripeCheckout>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
}

PaymentModal.defaultProps = {
  userEmail: ""
};

PaymentModal.propTypes = {
  openModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  handleToken: PropTypes.func.isRequired,
  userEmail: PropTypes.string
};

export default PaymentModal;

// export default createContainer(() => {
//   const handle = Meteor.subscribe("collect_configuration");
//   const configuration = getConfiguration();
//   const loading = !handle.ready();
//   return {
//     configuration,
//     loading
//   };
// }, PaymentModal);
