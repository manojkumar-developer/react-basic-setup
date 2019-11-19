/*
   
Component : ChangePasswordForm

*/
/** ****************************** Import packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { dripForm } from "react-drip-form";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

/** ****************************** Import components *************************** */
import TextField from "../../../components/FormElements/TextField";

/* ***************************** Import Constants ************************* */
import { InnerPageFormConstants } from "../../../constants/common-constants";

class ChangePasswordForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      showOldPassword: false,
      showConfirmPassword: false
    };
  }

  _displayPassword = () => {
    const { visible } = this.state;
    const isVisible = !visible;
    this.setState({ visible: isVisible });
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleClickshowOldPassword = () => {
    this.setState(state => ({ showOldPassword: !state.showOldPassword }));
  };

  handleClickShowConfirmPassword = () => {
    this.setState(state => ({
      showConfirmPassword: !state.showConfirmPassword
    }));
  };

  render() {
    const {
      handlers,
      meta: { invalid, pristine }
    } = this.props;

    const { showOldPassword, showConfirmPassword } = this.state;
    return (
      <form onSubmit={handlers.onSubmit} autoComplete="off">
        <div className="row align-middle">
          <div className="col-xl-6 col-md-6 col-sm-6 input-fields mb-4">
            <TextField
              required
              className="custom-textfield width-100"
              id="oldpassword"
              name="oldPassword"
              type={showOldPassword ? "text" : "password"}
              label={InnerPageFormConstants.changePassword.oldPassword}
              labeltext={InnerPageFormConstants.changePassword.oldPassword}
              onChange={this.handleChange("password")}
              onKeyPress={this._handleKeyPress}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={() => this.handleClickshowOldPassword()}
                    >
                      {showOldPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </div>
          <div className="col-xl-6 col-md-6 col-sm-6 input-fields mb-4 relative">
            <TextField
              required
              className="custom-textfield width-100"
              id="newpassword"
              name="newPassword"
              type={showConfirmPassword ? "text" : "password"}
              label={InnerPageFormConstants.changePassword.newPassword}
              labeltext={InnerPageFormConstants.changePassword.newPassword}
              onChange={() => this.handleChange("confirmPassword")}
              onKeyPress={this._handleKeyPress}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={this.handleClickShowConfirmPassword}
                    >
                      {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </div>
        </div>
        {/* Submit Buttons */}
        <div className="submit-buttons">
          <div className="d-flex flex-row justify-content-end">
            <div className="align-middle mr-3">
              <Button
                color="secondary"
                variant="contained"
                size="medium"
                type="reset"
                className="red-bg text-inherit"
                onClick={this._handleClose}
              >
                {InnerPageFormConstants.changePassword.cancel}
              </Button>
            </div>
            <div className="align-middle">
              <Button
                color="primary"
                variant="contained"
                size="medium"
                type="button"
                className="blue-bg text-inherit"
                onClick={handlers.onSubmit}
                disabled={invalid || pristine}
              >
                {InnerPageFormConstants.changePassword.submit}
              </Button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

ChangePasswordForm.propTypes = {
  handlers: PropTypes.object.isRequired
};

export default dripForm({
  validations: {
    oldPassword: {
      required: true
    },
    newPassword: {
      required: true,
      min: 8,
      max: 16
    }
  }
})(ChangePasswordForm);
