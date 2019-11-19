/*
   TextArea

 */
/** ****************************** Import packages *************************** */
import React, { Component } from "react";
import { dripFormField, FieldPropTypes } from "react-drip-form";

/** ****************************** Import utils and API *************************** */
import defaultProps from "../../utils/defaultFieldProps";

export class TextArea extends Component {
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

  render() {
    const { input, type, meta, errortext, label } = this.props;
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
      <div>
        <label htmlFor={input.name}>{meta.label}</label>
        <textarea
          className="form-control"
          onChange={this.handleChange}
          value={textValue}
          type={type || "text"}
          rows={meta.rows}
          {...rest}
          {...input}
        />
        <span style={{ color: "red" }}>{errorData || null}</span>
      </div>
    );
  }
}

TextArea.propTypes = FieldPropTypes;

export default dripFormField("text", {
  defaultProps
})(TextArea);
