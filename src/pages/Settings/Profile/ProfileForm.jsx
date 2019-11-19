/*
   
Component : ProfileForm

 */
/** ****************************** Import packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { dripForm } from "react-drip-form";
import Button from "@material-ui/core/Button";

/** ****************************** Import components *************************** */
import TextField from "../../../components/FormElements/TextField";
import SelectField from "../../../components/FormElements/SelectField";
import MaskedPhoneInput from "../../../components/FormElements/MaskedPhoneInput";

/* ***************************** Import Constants ************************* */
import { genderList, incomeList } from "../../../constants/lists";
import { InnerPageFormConstants } from "../../../constants/common-constants";

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      handlers,
      meta: { invalid, pristine },
      userData
    } = this.props;

    return (
      <form onSubmit={handlers.onSubmit}>
        <div className="row align-middle">
          <div className="col-xl-6 col-md-6 col-sm-6 input-fields mb-4">
            <TextField
              required
              className="custom-textfield width-100"
              id="firstName"
              name="firstName"
              labeltext={InnerPageFormConstants.profileForm.fname}
              value={userData.firstName || ""}
            />
          </div>
          <div className="col-xl-6 col-md-6 col-sm-6 input-fields mb-4">
            <TextField
              required
              className="custom-textfield width-100"
              id="lastName"
              name="lastName"
              labeltext={InnerPageFormConstants.profileForm.lname}
              value={userData.lastName || ""}
            />
          </div>
        </div>
        <div className="row align-middle">
          <div className="col-xl-6 col-md-6 col-sm-6 input-fields mb-4">
            <TextField
              required
              disabled
              className="custom-textfield width-100"
              id="nickName"
              name="nickName"
              labeltext={InnerPageFormConstants.profileForm.nickName}
              value={userData.nickName || ""}
            />
          </div>
          <div className="col-xl-6 col-md-6 col-sm-6 input-fields mb-4">
            <TextField
              required
              disabled
              className="custom-textfield width-100"
              type="email"
              id="email"
              name="email"
              labeltext={InnerPageFormConstants.profileForm.email}
              value={userData.email || ""}
            />
          </div>
        </div>
        <div className="row align-middle">
          <div className="col-xl-6 col-md-6 col-sm-6 input-fields mb-4">
            <MaskedPhoneInput
              required
              className="custom-textfield width-100"
              id="mobileNumber"
              name="mobileNumber"
              labeltext={InnerPageFormConstants.profileForm.mNumber}   
              value={userData.mobileNumber || ""}
            />
          </div>
          <div className="col-xl-6 col-md-6 col-sm-6 input-fields mb-4">
            <TextField
              className="custom-textfield width-100"
              name="address1"
              label="street"
              multiline
              rows={1}
              rowsMax={5}
              labeltext={InnerPageFormConstants.profileForm.address1} 
              value={userData.address1 || ""}
            />
          </div>
        </div>
        <div className="row align-middle">
          <div className="col-xl-6 col-md-6 col-sm-6 input-fields mb-4">
            <TextField
              className="custom-textfield width-100"
              name="address2"
              label="Address2"
              multiline
              rows={1}
              rowsMax={5}
              labeltext={InnerPageFormConstants.profileForm.address2} 
              value={userData.address2 || ""}
            />
          </div>
          <div className="col-xl-6 col-md-6 col-sm-6 input-fields mb-4">
            <TextField
              className="custom-textfield width-100"
              id="city"
              name="city"
              labeltext={InnerPageFormConstants.profileForm.city}
              value={userData.city || ""}
            />
          </div>
        </div>
        <div className="row align-middle">
          <div className="col-xl-6 col-md-6 col-sm-6 input-fields mb-4">
            <TextField
              className="custom-textfield width-100"
              id="state"
              name="state"
              labeltext={InnerPageFormConstants.profileForm.state}
              value={userData.state || ""}
            />
          </div>
          <div className="col-xl-6 col-md-6 col-sm-6 input-fields mb-4">
            <TextField
              className="custom-textfield width-100"
              id="zipcode"
              name="zipcode"
              labeltext={InnerPageFormConstants.profileForm.zipCode}
              value={userData.zipcode || ""}
            />
          </div>
        </div>
        <div className="row align-middle">
          <div className="col-xl-6 col-md-6 col-sm-6 mb-2">
            <SelectField
              className="select-input-fields width-100"
              id="gender"
              name="gender"
              labeltext={InnerPageFormConstants.profileForm.gender}
              source={genderList}
              value={userData.gender}
            />
          </div>
          <div className="col-xl-6 col-md-6 col-sm-6 mb-2">
            <SelectField
              className="select-input-fields width-100"
              id="annualIncome"
              name="annualIncome"
              labeltext={InnerPageFormConstants.profileForm.annualIncome}
              source={incomeList}
              value={userData.annualIncome}
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
                type="button"
                className="red-bg text-inherit"
                onClick={this._handleClose}
              >
                {InnerPageFormConstants.profileForm.cancel}
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
                {InnerPageFormConstants.profileForm.submit}
              </Button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

ProfileForm.defaultProps = {
  userData: {}
};

ProfileForm.propTypes = {
  handlers: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  userData: PropTypes.object
};

export default dripForm({
  validations: {
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
      email: true
    }
  }
})(ProfileForm);
