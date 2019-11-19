/*
   
Masked Phone Input

*/
/** ****************************** Import packages *************************** */
import React, { Component } from "react";
import { dripFormField, FieldPropTypes } from "react-drip-form";
import PropTypes from "prop-types";
import MaskedInput from 'react-text-mask';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MuiTextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from '@material-ui/core/FormControl';

/** ****************************** Import utils and API *************************** */
import defaultProps from "../../utils/defaultFieldProps";

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}      
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}      
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

export class MaskedPhoneInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textmask: "",     
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { input, meta, errortext, dollar, labeltext } = this.props;
    const { shouldDisplayError, ...rest } = this.props;
    const { textmask } = this.state;

    let errorData = null;
    const displayError = shouldDisplayError(this.props);

    if (errortext) {
      errorData = errortext;
    } else if (displayError) {
      errorData = meta.error;
    }

    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <FormControl className="custom-masked-input w-100">
          <InputLabel htmlFor="formatted-text-mask-input">{labeltext}</InputLabel>
          <Input
            value={textmask}
            //onChange={this.handleChange('textmask')}
            inputComponent={TextMaskCustom}
            className="custom-textfield"
            label={labeltext}
            onChange={this.handleChange}            
            {...rest}
            {...input}
          />
        </FormControl>
        <FormHelperText id="component-error-text">
          {errorData || null}
        </FormHelperText>
      </div>
    );
  }
}

MaskedPhoneInput.propTypes = FieldPropTypes;

export default dripFormField("text", {
  defaultProps
})(MaskedPhoneInput);