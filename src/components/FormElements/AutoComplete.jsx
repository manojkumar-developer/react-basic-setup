/*
   
AutoComplete

*/
/** ****************************** Import packages *************************** */
import React, { Component } from "react";
import { dripFormField, FieldPropTypes } from "react-drip-form";
import MuiAutoComplete from "material-ui/AutoComplete";

/** ****************************** Import funtions *************************** */
import defaultProps from "../../utils/defaultFieldProps";

export class AutoComplete extends Component {
  static propTypes = FieldPropTypes;

  handleClose = (...args) => {
    const { input, onClose } = this.props;
    input.onBlur();
    if (typeof onClose === "function") {
      onClose(...args);
    }
  };

  handleNewRequest = (value, index) => {
    const { dataSourceConfig, onNewRequest, input } = this.props;
    input.onChange(
      typeof value === "object" && dataSourceConfig
        ? value[dataSourceConfig.value]
        : value
    );

    if (typeof onNewRequest === "function") {
      onNewRequest(value, index);
    }
  };

  render() {
    const {
      input,
      meta,
      handleUpdateInput,
      shouldDisplayError,
      ...rest
    } = this.props;
    const displayError = shouldDisplayError(this.props);
    const menuProps = {
      desktop: true
    };
    return (
      <MuiAutoComplete
        {...rest}
        {...input}
        filter={MuiAutoComplete.caseInsensitiveFilter}
        onClose={this.handleClose}
        onNewRequest={this.handleNewRequest}
        onUpdateInput={handleUpdateInput}
        menuProps={menuProps}
        errorText={displayError ? meta.error : null}
      />
    );
  }
}

export default dripFormField("text", {
  defaultProps
})(AutoComplete);
