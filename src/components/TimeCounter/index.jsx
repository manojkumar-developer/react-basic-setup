/*
   
MainMenu

*/
/** ****************************** Import packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Countdown from "react-countdown-now";

/** ****************************** Import common *************************** */
import { leadsZero } from "../../utils/common";

class TimeCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderer = props => {
    const { hours, minutes, seconds, completed } = props;
    if (completed) {
      return <span>You are good to go!</span>;
    }
    return (
      <div className="timer-countdown">
        <p className="mb-0 d-flex">
          <span className="text-center col-4 pr-0 pl-0">
            <span className="red timer-title">{`${leadsZero(hours)}`}</span>
          </span>
          <span className="red timer-title">:</span>
          <span className="text-center col-4 pr-0 pl-0">
            <span className="red timer-title">{`${leadsZero(minutes)}`}</span>
          </span>
          <span className="red timer-title">:</span>
          <span className="text-center col-4 pr-0 pl-0">
            <span className="red mb-1 timer-title">
              {`${leadsZero(seconds)}`}
            </span>
          </span>
        </p>
        <p className="mb-0 d-flex">
          <span className="col-4 text-center pr-1 pl-1">
            <span className="mdm-text text-dark">Hr</span>
          </span>
          <span className="timer-title text-white">:</span>
          <span className="col-4 text-center pr-1 pl-1">
            <span className="mdm-text text-dark">Min</span>
          </span>
          <span className="timer-title text-white">:</span>
          <span className="col-4 text-center pr-1 pl-1">
            <span className="mdm-text text-dark">Sec</span>
          </span>
        </p>
      </div>
    );
  };

  render() {
    const { inputDate } = this.props;
    const counter = new Date(inputDate).getTime();
    return (
      <div className="row">
        <div className="col-xl-12 text-left">
          <span className="coundown-timer timer-title red text-center">
            <Countdown
              className="inner-count-down"
              date={counter}
              daysInHours
            />
          </span>
          <p className="mb-0 text-left">
            <span className="text-center pr-2 pl-3">
              <span className="mdm-text text-dark">H</span>
            </span>
            <span className="text-center pr-2 pl-2">
              <span className="mdm-text text-dark">M</span>
            </span>
            <span className="text-center pr-2 pl-2">
              <span className="mdm-text text-dark">S</span>
            </span>
          </p>
        </div>
      </div>
    );
  }
}

TimeCounter.propTypes = {
  inputDate: PropTypes.any.isRequired
};

export default TimeCounter;
