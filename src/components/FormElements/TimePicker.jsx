/*
   
TimePicker

*/
/** ****************************** Import packages *************************** */
import React, { Component } from "react";
import { dripFormField, FieldPropTypes } from "react-drip-form";
import MuiTimePicker from "material-ui/TimePicker";

/** ****************************** Import utils and API *************************** */
import ErrorLabel from "../../utils/ErrorLabel";
import defaultProps from "../../utils/defaultFieldProps";

const formatter = value => value || null;

export class TimePicker extends Component {
  static propTypes = FieldPropTypes;

  handleChange = (_, date) => {
    const { input } = this.props;
    input.onChange(date);
    input.onBlur();
  };

  render() {
    const {
      input: { onChange, onBlur, ...input },
      meta,
      shouldDisplayError,
      errorLabelStyle,
      ...rest
    } = this.props;

    const displayError = shouldDisplayError(this.props);

    return (
      <span>
        <MuiTimePicker
          {...rest}
          {...input}
          onChange={this.handleChange}
          onDismiss={onBlur}
        />

        {displayError && (
          <ErrorLabel style={errorLabelStyle}>{meta.error}</ErrorLabel>
        )}
      </span>
    );
  }
}

export default dripFormField("text", {
  defaultProps: {
    ...defaultProps,
    formatter
  }
})(TimePicker);
