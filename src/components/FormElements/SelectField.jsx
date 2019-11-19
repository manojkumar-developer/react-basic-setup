/*
   
SelectField

*/
/** ****************************** Import packages *************************** */
import React, { Component } from "react";
import { dripFormField, FieldPropTypes } from "react-drip-form";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";

/** ****************************** Import utils and API *************************** */
import defaultProps from "../../utils/defaultFieldProps";

export class SelectField extends Component {
  static propTypes = FieldPropTypes;

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      input,
      meta,
      className,
      id,
      labeltext,
      emptylabel,
      required,
      value,
      source,
      shouldDisplayError,
      ...rest
    } = this.props;

    const displayError = shouldDisplayError(this.props);

    return (
      <div>
        <InputLabel shrink htmlFor={id}>
          {labeltext}
          {required ? " *" : null}
        </InputLabel>
        <Select
          inputProps={{
            name: id,
            id
          }}
          displayEmpty
          value={value}
          className={className}
          {...rest}
          {...input}
        >
          <MenuItem className="select-dropdown-item" value="">
            {emptylabel || "Select"}
          </MenuItem>
          {Object.keys(source).map(function(key) {
            return (
              <MenuItem
                className="select-dropdown-item"
                value={source[key].id}
                key={key}
              >
                {source[key].value}
              </MenuItem>
            );
          })}
        </Select>
        <FormHelperText id="component-error-text">
          {displayError ? meta.error : null}
        </FormHelperText>
      </div>
    );
  }
}

export default dripFormField("select", {
  defaultProps
})(SelectField);
