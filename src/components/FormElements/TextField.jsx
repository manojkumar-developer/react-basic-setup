/*
   
TextField

*/
/** ****************************** Import packages *************************** */
import React, { Component } from "react";
import { dripFormField, FieldPropTypes } from "react-drip-form";
import MuiTextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputAdornment from "@material-ui/core/InputAdornment";

/** ****************************** Import utils and API *************************** */
import defaultProps from "../../utils/defaultFieldProps";

export class TextField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: ""
    };
  }

  handleChange = event => {
    if (event) {
      this.setState({
        textValue: event.target.value
      });
    }
  };

  displayDollar = () => ({
    startAdornment: <InputAdornment position="start">$</InputAdornment>
  });

  render() {
    const { input, meta, errortext, dollar, labeltext } = this.props;
    const { shouldDisplayError, ...rest } = this.props;
    const { textValue } = this.state;

    let errorData = null;
    const displayError = shouldDisplayError(this.props);

    if (errortext) {
      errorData = errortext;
    } else if (displayError) {
      errorData = meta.error;
    }

    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <MuiTextField
          className="custom-textfield"
          label={labeltext}
          onChange={this.handleChange}
          value={textValue}
          InputProps={dollar ? this.displayDollar() : null}
          {...rest}
          {...input}
        />
        <FormHelperText id="component-error-text">
          {errorData || null}
        </FormHelperText>
      </div>
    );
  }
}

TextField.propTypes = FieldPropTypes;

export default dripFormField("text", {
  defaultProps
})(TextField);
