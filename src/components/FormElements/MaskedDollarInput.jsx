/*
   
Masked Dollar Input

*/
/** ****************************** Import packages *************************** */
import React, { Component } from "react";
import { dripFormField, FieldPropTypes } from "react-drip-form";
import MaskedInput from "react-text-mask";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";

/** ****************************** Import utils and API *************************** */
import defaultProps from "../../utils/defaultFieldProps";

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value
          }
        });
      }}
      thousandSeparator
      prefix="$"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export class MaskedDollarInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberformat: ""
    };
  }

  handleChange = event => {
    if (event) {
      this.setState({
        numberformat: event.target.value
      });
    }
  };

  render() {
    const { input, meta, errortext, labeltext } = this.props;
    const { shouldDisplayError, ...rest } = this.props;
    const { numberformat } = this.state;

    let errorData = null;
    const displayError = shouldDisplayError(this.props);

    if (errortext) {
      errorData = errortext;
    } else if (displayError) {
      errorData = meta.error;
    }

    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <TextField
          id={input.name}
          name={input.name}
          className="custom-textfield w-100"
          label={labeltext}
          value={numberformat}
          onChange={this.handleChange}
          InputProps={{
            inputComponent: NumberFormatCustom
          }}
          {...rest}
        />
        <FormHelperText id="component-error-text">
          {errorData || null}
        </FormHelperText>
      </div>
    );
  }
}

MaskedDollarInput.propTypes = FieldPropTypes;

export default dripFormField("text", {
  defaultProps
})(MaskedDollarInput);
