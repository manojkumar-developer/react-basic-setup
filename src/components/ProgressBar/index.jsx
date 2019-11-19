/* 

Component : ProgressBar

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";

import "./style.css";

class ProgressBar extends Component {
  _renderValues = readings => {
    if (!readings) return null;
    return readings.map((item, i) => {
      const index = i + 1;
      if (item.value > 0) {
        return (
          <div
            className="value"
            style={{ color: item.color, width: `${item.value}%` }}
            key={index}
          >
            <span>
              {item.value}
              {"%"}
            </span>
          </div>
        );
      }
      return null;
    });
  };

  _renderScale = readings => {
    if (!readings) return null;
    return readings.map((item, i) => {
      const index = i + 1;
      if (item.value > 0) {
        return (
          <div
            className="graduation"
            style={{ color: item.color, width: `${item.value}%` }}
            key={index}
          >
            {" "}
            <span>|</span>
          </div>
        );
      }
      return null;
    });
  };

  _renderBar = readings => {
    if (!readings) return null;
    return readings.map((item, i) => {
      const index = i + 1;
      if (item.value > 0) {
        return (
          <div
            className="bar"
            style={{ backgroundColor: item.color, width: `${item.value}%` }}
            key={index}
          />
        );
      }
      return null;
    });
  };

  _renderLegends = readings => {
    if (!readings) return null;
    return readings.map((item, i) => {
      const index = i + 1;
      if (item.value > 0) {
        return (
          <div className="legend" key={index}>
            <span className="dot" style={{ color: item.color }}>
              {"●"}
            </span>
            <span className="label">{item.name}</span>
          </div>
        );
      }
      return null;
    });
  };

  render() {
    const { readings } = this.props;
    return (
      <div className="multicolor-bar">
        <div className="values">{this._renderValues(readings)}</div>
        <div className="scale">{this._renderScale(readings)}</div>
        <div className="bars">{this._renderBar(readings)}</div>
        <div className="legends">{this._renderLegends(readings)}</div>
      </div>
    );
  }
}

ProgressBar.propTypes = {
  readings: PropTypes.array.isRequired
};

export default ProgressBar;
