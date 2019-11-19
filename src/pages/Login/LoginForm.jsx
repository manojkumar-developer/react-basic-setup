/*
   
LoginForm

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { dripForm } from "react-drip-form";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

/* ***************************** Import Components ************************* */
import TextField from "../../components/FormElements/TextField";

/* ***************************** Import Constants ************************* */
import { LoginConstants } from "../../constants/login";

/* ***************************** Import Common ************************* */
import History from "../../utils/History";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false
    };
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  _handleKeyPress = event => {
    const { handlers } = this.props;
    if (event.key === "Enter") {
      event.preventDefault();
      handlers.onSubmit();
    }
  };

  gotoForgetPassword = () => {
    History.push("/forget-password");
  };

  render() {
    const { handlers } = this.props;
    const { showPassword } = this.state;

    return (
      <form onSubmit={handlers.onSubmit} autoComplete="false">
        <div className="d-flex flex-column input-fields mb-2">
          <TextField
            required
            className="custom-textfield width-100"
            id="email"
            name="email"
            type="email"
            label={LoginConstants.email.FloatingText}
            labeltext={LoginConstants.email.FloatingText}
            onKeyPress={this._handleKeyPress}
          />
        </div>
        <div className="d-flex flex-column input-fields relative mb-5">
          <TextField
            required
            className="custom-textfield width-100"
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            label={LoginConstants.password.FloatingText}
            labeltext={LoginConstants.password.FloatingText}
            onChange={this.handleChange("password")}
            onKeyPress={this._handleKeyPress}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={() => this.handleClickShowPassword()}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </div>
        <div className="login-buttons mt-5">
          <div className="d-flex flex-row justify-content-end">
            <div className="align-middle">
              <Link
                to="/forget-password"
                className="mdm-text mr-4 forget-pwd-link text-muted"
                onClick={this.gotoForgetPassword}
              >
                {LoginConstants.forgetPassword.label}
              </Link>
            </div>
            <div className="align-middle">
              <Button
                color="primary"
                variant="contained"
                size="medium"
                type="submit"
                className="blue-bg text-inherit"
                onClick={handlers.onSubmit}
              >
                {LoginConstants.signin.label}
              </Button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  handlers: PropTypes.object.isRequired
};

export default dripForm({
  validations: {
    email: {
      required: true,
      email: true
    },
    password: {
      required: true
    }
  }
})(LoginForm);
