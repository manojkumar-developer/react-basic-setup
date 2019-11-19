/*

CustomButton

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import { Button } from "reactstrap";
import cx from "classnames";
import PropTypes from "prop-types";

class CustomButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { simple, round, icon, neutral, leftLabel } = this.props;
    const { rightLabel, wd, link, fab, className, ...rest } = this.props;
    const { children } = this.props;
    let btnClasses = cx({
      "btn-simple": simple,
      "btn-round": round,
      "btn-icon": icon,
      "btn-neutral": neutral,
      "btn-wd": wd,
      "btn-link": link,
      "btn-fab": fab
    });

    if (className !== undefined) {
      btnClasses += ` ${className}`;
    }

    return (
      <Button className={btnClasses} {...rest}>
        {leftLabel ? (
          <span className="btn-label">
            <i className={leftLabel} />
          </span>
        ) : null}
        {children}
        {rightLabel ? (
          <span className="btn-label btn-label-right">
            <i className={rightLabel} />
          </span>
        ) : null}
      </Button>
    );
  }
}

CustomButton.propTypes = {
  simple: PropTypes.bool.isRequired,
  round: PropTypes.bool.isRequired,
  icon: PropTypes.bool.isRequired,
  neutral: PropTypes.bool.isRequired,
  wd: PropTypes.bool.isRequired,
  link: PropTypes.bool.isRequired,
  fab: PropTypes.bool.isRequired,
  leftLabel: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  rightLabel: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default CustomButton;
