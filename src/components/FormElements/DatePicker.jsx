/*
   
DatePicker

*/
/** ****************************** Import packages *************************** */
import React, { Component } from "react";
import { dripFormField, FieldPropTypes } from "react-drip-form";
import MuiDatePicker from "material-ui/DatePicker";

/** ****************************** Import utils *************************** */
import ErrorLabel from "../../utils/ErrorLabel";
import defaultProps from "../../utils/defaultFieldProps";
import { displayDate } from "../../utils/common";

const formatter = value => value || null;

export class DatePicker extends Component {
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
        <MuiDatePicker
          {...rest}
          {...input}
          onChange={this.handleChange}
          onDismiss={onBlur}
          formatDate={date => displayDate(date)}
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
})(DatePicker);
