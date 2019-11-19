/*
   
Toggle

*/
/** ****************************** Import packages *************************** */
import React from "react";
import { dripFormField, FieldPropTypes } from "react-drip-form";
import MuiToggle from "material-ui/Toggle";

/** ****************************** Import utils and API *************************** */
import ErrorLabel from "../../utils/ErrorLabel";
import defaultProps from "../../utils/defaultFieldProps";

export const Toggle = props => {
  const {
    input: { onChange, checked, ...input },
    meta,
    shouldDisplayError,
    errorLabelStyle,
    labelText,
    ...rest
  } = props;

  const displayError = shouldDisplayError(props);

  return (
    <span>
      <MuiToggle
        {...rest}
        {...input}
        defaultChecked={checked}
        onToggle={onChange}
        label={labelText}
      />

      {displayError && (
        <ErrorLabel style={errorLabelStyle}>{meta.error}</ErrorLabel>
      )}
    </span>
  );
};

Toggle.propTypes = FieldPropTypes;

export default dripFormField("checkbox", {
  defaultProps
})(Toggle);
