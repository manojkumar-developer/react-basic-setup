/*

SimpleCheckbox

*/
/** ****************************** Import Packages *************************** */
import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import PropTypes from "prop-types";

class SimpleCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {formGroupProps,labelProps,inputProps,label}=this.props;
    return (
      <FormGroup check { formGroupProps}>
        <Label check {labelProps}>
          <Input type="checkbox" {inputProps} />
          <span className="form-check-sign" />
          {label ? label : ""}
        </Label>
      </FormGroup>
    );
  }
}

SimpleCheckbox.propTypes = {
  label: PropTypes.node
};

export default SimpleCheckbox;
