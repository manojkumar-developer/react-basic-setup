/*
   
Component : ContactForm

 */
/** ****************************** Import packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { dripForm } from "react-drip-form";
import Button from "@material-ui/core/Button";

/** ****************************** Import components *************************** */
import TextField from "../../components/FormElements/TextField";
import MaskedPhoneInput from "../../components/FormElements/MaskedPhoneInput";

/** ****************************** Import Constants *************************** */
import { InnerPageFormConstants } from "../../constants/common-constants";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _handleKeyPress = event => {
    const { handlers } = this.props;
    if (event.key === "Enter") {
      event.preventDefault();
      handlers.onSubmit();
    }
  };

  render() {
    const { handlers } = this.props;

    return (
      <form className="contact-form" onSubmit={handlers.onSubmit}>
        <div className="row align-middle">
          <div className="col-xl-4 col-md-4 input-fields mb-4">
            <TextField
              required
              className="custom-textfield width-100"
              id="name"
              name="name"
              label={InnerPageFormConstants.contactForm.name}
              labeltext={InnerPageFormConstants.contactForm.name}
            />
          </div>
          <div className="col-xl-4 col-md-4 input-fields mb-4">
            <TextField
              required
              className="custom-textfield width-100"
              type="email"
              id="email"
              name="email"
              label={InnerPageFormConstants.contactForm.email}
              labeltext={InnerPageFormConstants.contactForm.email}
            />
          </div>
          <div className="col-xl-4 col-md-4 input-fields mb-4">            
            <MaskedPhoneInput
              required
              className="custom-textfield width-100"
              id="phone"
              name="phone"
              label={InnerPageFormConstants.contactForm.mNumber}
              labeltext={InnerPageFormConstants.contactForm.mNumber}
            />            
          </div>
        </div>
        <div className="row align-middle">
          <div className="col-xl-12 col-md-12 col-sm-12 input-fields mb-4">
            <TextField
              className="custom-textfield width-100"
              multiline
              id="message"
              name="message"
              rows="3"
              rowsMax={10}
              label={InnerPageFormConstants.contactForm.message}
              labeltext={InnerPageFormConstants.contactForm.message}
            />
          </div>
        </div>
        {/* Submit Buttons */}
        <div className="submit-buttons">
          <div className="d-flex flex-row justify-content-end">
            <div className="align-middle">
              <Button
                color="primary"
                variant="contained"
                size="medium"
                type="button"
                className="blue-bg text-inherit"
                onClick={handlers.onSubmit}
              >
                {InnerPageFormConstants.contactForm.send}
              </Button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

ContactForm.propTypes = {
  handlers: PropTypes.object.isRequired
};

export default dripForm({
  validations: {
    name: {
      required: true,
      max: 16
    },
    email: {
      required: true,
      email: true
    }
  }
})(ContactForm);
