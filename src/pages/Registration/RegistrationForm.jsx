/*

Component : RegistrationForm

 */
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { dripForm } from "react-drip-form";

/** ****************************** Import other packages *************************** */
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

/** ****************************** Import components *************************** */
import TextField from "../../components/FormElements/TextField";
import Toggle from "../../components/FormElements/Toggle";
import CheckBox from "../../components/FormElements/CheckBox";

/* ***************************** Import constants ************************* */
import { regConstants } from "../../constants/registration";

/** ****************************** Import commonfunctions *************************** */
import { displayName, displayAmount } from "../../utils/common";

// import { getUserByReferral } from "/imports/api/users";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      userData: {},
      inviteCode: null
    };
  }

  // componentWillMount = () => {
  //   const {
  //     match: { params }
  //   } = this.props;

  //   if (params.id) {
  //     getUserByReferral(params.id).then(userData => {
  //       this.setState({ userData, inviteCode: userData.referralCode });
  //     });
  //   }
  // };

  _handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  _handlePassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  _handleConfirmPassword = () => {
    this.setState(state => ({
      showConfirmPassword: !state.showConfirmPassword
    }));
  };

  _handleKeyPress = event => {
    const { handlers } = this.props;
    if (event.key === "Enter") {
      event.preventDefault();
      handlers.onSubmit();
    }
  };

  _renderReferrer = () => {
    const { userData, inviteCode } = this.state;
    if (!inviteCode) return null;
    return (
      <div className="justify-content-center mb-4 box-shadow theme-bg-color2 rounded border p-3">
        <h6 className="text-center lh-25 mb-0">
          {regConstants.inviteText.text1}
          <b className="ml-1">
            {/* {userData
              ? displayName(userData.firstName, userData.lastName)
              : null} */}
          </b>
        </h6>
      </div>
    );
  };

  _handleCheck = () => {
    const isCreateWallet = document.getElementById("isCreateWallet").checked;
    if (isCreateWallet) {
      this.setState({ checked: true });
    } else {
      this.setState({ checked: false });
    }
  };

  render() {
    const { handlers, openInfo, openTerms, configuration } = this.props;
    const { showPassword, showConfirmPassword } = this.state;
    const { checked, inviteCode } = this.state;
    if (Object.entries(configuration).length === 0) return null;
    return (
      <form
        className="reg-form"
        onSubmit={handlers.onSubmit}
        autoComplete="off"
      >
        {this._renderReferrer()}
        <div className="d-flex">
          <div className="reg-stellar-button pl-2 ml-1 mb-3">
            <CheckBox
              className="pl-0 p-0 pr-0 blue"
              id="isCreateWallet"
              name="isCreateWallet"
              color="primary"
              onClick={() => this._handleCheck()}
            />
            <span>
              {regConstants.tkWallet.text1}
              <Link to="#" className="ml-1" onClick={() => openInfo()}>
                {regConstants.tkWallet.text2}
              </Link>
            </span>
          </div>
        </div>
        <div className="d-flex flex-column input-fields mb-2">
          <TextField
            required
            className="custom-textfield width-100"
            id="firstName"
            name="firstName"
            label={regConstants.firstName.FloatingText}
            labeltext={regConstants.firstName.FloatingText}
            onKeyPress={this._handleKeyPress}
          />
        </div>
        <div className="d-flex flex-column input-fields mb-2">
          <TextField
            required
            className="custom-textfield width-100"
            id="lastName"
            name="lastName"
            label={regConstants.lastName.FloatingText}
            labeltext={regConstants.lastName.FloatingText}
            onKeyPress={this._handleKeyPress}
          />
        </div>
        <div className="d-flex flex-column input-fields mb-2">
          <TextField
            required
            className="custom-textfield width-100"
            id="nickName"
            name="nickName"
            label={regConstants.nickName.FloatingText}
            labeltext={regConstants.nickName.FloatingText}
            onKeyPress={this._handleKeyPress}
          />
        </div>
        <div className="d-flex flex-column input-fields mb-2">
          <TextField
            required
            className="custom-textfield width-100"
            id="email"
            name="email"
            label={regConstants.email.FloatingText}
            labeltext={regConstants.email.FloatingText}
            onKeyPress={this._handleKeyPress}
          />
        </div>
        <div className="d-flex flex-column relative input-fields mb-2">
          <TextField
            required
            className="custom-textfield width-100"
            name="password"
            type={showPassword ? "text" : "password"}
            label="Password"
            labeltext={regConstants.password.label}
            onChange={this._handleChange("password")}
            onKeyPress={this._handleKeyPress}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={() => this._handlePassword()}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </div>
        <div className="d-flex flex-column input-fields relative mb-0">
          <TextField
            required
            className="custom-textfield width-100"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            label="Confirm Password"
            labeltext={regConstants.confirmPassword.label}
            onChange={() => this._handleChange("confirmPassword")}
            onKeyPress={this._handleKeyPress}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this._handleConfirmPassword}
                  >
                    {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <TextField
            required
            className="d-none"
            id="isWalletCreate"
            name="isWalletCreate"
            value={checked}
          />
          <TextField
            className="d-none"
            id="inviteCode"
            name="inviteCode"
            value={inviteCode || null}
          />
        </div>
        <div className="d-flex flex-row input-fields toggle mb-4 relative">
          <Toggle
            name="confirm"
            value="yes"
            label="Agree"
            labelText="I agree to the"
            labelPosition="right"
            onKeyPress={this._handleKeyPress}
          />
          <Link
            to="#"
            className="text-dark terms-of-use"
            onClick={() => openTerms()}
          >
            {regConstants.termsOfService.text}
          </Link>
        </div>
        <div className="login-buttons">
          <div className="d-flex flex-row justify-content-end">
            <div className="align-middle mr-3">
              <Button
                color="secondary"
                variant="contained"
                size="medium"
                type="reset"
                className="red-bg text-inherit"
                onClick={() => handlers.onReset()}
              >
                {regConstants.cancel.label}
              </Button>
            </div>
            <div className="align-middle">
              <Button
                color="primary"
                variant="contained"
                size="medium"
                type="button"
                className={checked ? `d-none` : `blue-bg text-inherit`}
                onClick={() => handlers.onSubmit()}
              >
                {regConstants.submit.label}
              </Button>
            </div>
            <div className="align-middle">
              <Button
                color="primary"
                variant="contained"
                size="medium"
                type="button"
                className={checked ? `pale-green-bg text-inherit` : `d-none`}
                onClick={() => handlers.onSubmit()}
              >
                <span className="mr-1">{regConstants.stellerBtn.text1}</span>
                <span className="mr-1">
                  {/* {displayAmount(configuration.stellar.registrationFee)} */}
                </span>
                <span className="">{regConstants.stellerBtn.text2}</span>
              </Button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

RegistrationForm.propTypes = {
  handlers: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  openInfo: PropTypes.func.isRequired,
  openTerms: PropTypes.func.isRequired,
  configuration: PropTypes.object.isRequired
};

const isValidEmail = email => {
  const emailRegx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegx.test(email);
};

export default dripForm({
  validations: {
    isWalletCreate: {
      required: false
    },
    firstName: {
      required: true,
      max: 16
    },
    lastName: {
      required: true,
      max: 16
    },
    nickName: {
      required: true,
      max: 16
    },
    email: {
      required: true,
      isValidEmail
    },
    password: {
      required: true,
      min: 8,
      max: 16
    },
    confirmPassword: {
      required: true,
      same: "password"
    },
    confirm: {
      required: true
    }
  }
})(RegistrationForm);
