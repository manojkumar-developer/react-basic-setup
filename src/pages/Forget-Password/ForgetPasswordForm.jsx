/*
   
ForgetPasswordForm

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { dripForm } from "react-drip-form";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

/* ***************************** Import components ************************* */
import TextField from "../../components/FormElements/TextField";

/* ***************************** Import constants ************************* */
import { LoginConstants, ForgetPasswordContants } from "../../constants/login";

class ForgetPasswordForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  _displayPassword = () => {
    const { visible } = this.state;
    const isVisible = !visible;
    this.setState({ visible: isVisible });
  };

  _handleKeyPress = event => {
    const { handlers } = this.props;
    if (event.key === "Enter") {
      event.preventDefault();
      handlers.onSubmit();
    }
  };

  render() {
    const { handlers } = this.props;
    const { visible } = this.state;

    return (
      <form onSubmit={handlers.onSubmit} autoComplete="off">
        <div className="d-flex flex-column input-fields mb-2">
          <TextField
            className="custom-textfield"
            fullWidth
            type="email"
            id="email"
            name="email"
            label={LoginConstants.email.label}
            labeltext={LoginConstants.email.FloatingText}
            onKeyPress={this._handleKeyPress}
          />
        </div>
        <div className="login-buttons mt-4">
          <div className="d-flex flex-row justify-content-end">
            <div className="align-middle">
              <Link
                to="/login"
                className="mdm-text mr-4 text-inherit forget-pwd-link text-muted"
              >
                {ForgetPasswordContants.goback.label}
              </Link>
            </div>
            <div className="align-middle">
              <Button
                color="primary"
                variant="contained"
                size="medium"
                type="button"
                className="blue-bg text-inherit"
                onClick={handlers.onSubmit}
              >
                {ForgetPasswordContants.submit.label}
              </Button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

ForgetPasswordForm.propTypes = {
  handlers: PropTypes.object.isRequired
};

export default dripForm({
  validations: {
    email: {
      required: true,
      email: true
    }
  }
})(ForgetPasswordForm);
