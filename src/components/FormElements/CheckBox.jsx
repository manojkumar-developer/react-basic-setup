/*

Checkbox

*/
/** ****************************** Import packages *************************** */
import React, { Component } from "react";
import { dripFormField, FieldPropTypes } from "react-drip-form";
import MuiCheckbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

/** ****************************** Import funtions *************************** */
import defaultProps from "../../utils/defaultFieldProps";

/** ****************************** Import utils and API *************************** */
import ErrorLabel from "../../utils/ErrorLabel";

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { meta, checked, name, ...input } = this.props;
    const {
      labeltext,
      errorLabelStyle,
      shouldDisplayError,
      ...rest
    } = this.props;
    const displayError = shouldDisplayError(this.props);
    return (
      <span>
        <FormControlLabel
          control={
            <MuiCheckbox name={name} {...rest} {...input} checked={checked} />
          }
          label={labeltext}
        />
        {displayError && (
          <ErrorLabel style={errorLabelStyle}>{meta.error}</ErrorLabel>
        )}
      </span>
    );
  }
}

CheckBox.propTypes = FieldPropTypes;

export default dripFormField("checkbox", {
  defaultProps
})(CheckBox);
