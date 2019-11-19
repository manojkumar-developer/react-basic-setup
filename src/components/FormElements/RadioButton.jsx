/*
   
RadioButton

*/
/** ****************************** Import packages *************************** */
import React from "react";
import { dripFormField, FieldPropTypes } from "react-drip-form";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";

/** ****************************** Import utils and API *************************** */
import ErrorLabel from "../../utils/ErrorLabel";
import defaultProps from "../../utils/defaultFieldProps";

export const RadioButton = props => {
  const {
    input: { onChange, ...input },
    meta,
    shouldDisplayError,
    errorLabelStyle,
    labeltext,
    ...rest
  } = props;

  const displayError = shouldDisplayError(props);

  return (
    <span>
      <FormControlLabel
        control={<Radio {...rest} {...input} onChange={onChange} />}
        label={labeltext}
        labelPlacement="end"
      />
      {displayError && (
        <ErrorLabel style={errorLabelStyle}>{meta.error}</ErrorLabel>
      )}
    </span>
  );
};

RadioButton.propTypes = FieldPropTypes;

export default dripFormField("radio", {
  defaultProps
})(RadioButton);
