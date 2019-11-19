/* 

Component : Slice

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";

export const getAnglePoint = (startAngle, endAngle, radius, x, y) => {
  const x1 = x + radius * Math.cos((Math.PI * startAngle) / 180);
  const y1 = y + radius * Math.sin((Math.PI * startAngle) / 180);
  const x2 = x + radius * Math.cos((Math.PI * endAngle) / 180);
  const y2 = y + radius * Math.sin((Math.PI * endAngle) / 180);
  return { x1, y1, x2, y2 };
};

class Slice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: "",
      x: 0,
      y: 0
    };
  }

  componentWillReceiveProps = () => {
    this.setState({ path: "" });
    this.animate();
  };

  componentDidMount = () => {
    this._isMounted = true;
    this.animate();
  };

  componentWillUnmount = () => {
    this._isMounted = false;
  };

  animate = () => {
    this.draw(0);
  };

  draw = value => {
    let drawValue = value;
    if (!this._isMounted) {
      return;
    }
    const p = this.props;
    const path = [];
    const self = this;
    const step = p.angle / (37.5 / 2);

    if (drawValue + step > p.angle) {
      drawValue = p.angle;
    }

    // Get angle points
    const a = getAnglePoint(
      p.startAngle,
      p.startAngle + drawValue,
      p.radius,
      p.radius,
      p.radius
    );
    const b = getAnglePoint(
      p.startAngle,
      p.startAngle + drawValue,
      p.radius - p.hole,
      p.radius,
      p.radius
    );

    path.push(`M${a.x1},${a.y1}`);
    path.push(
      `A${p.radius},${p.radius} 0 ${drawValue > 180 ? 1 : 0},1 ${a.x2},${a.y2}`
    );
    path.push(`L${b.x2},${b.y2}`);
    path.push(
      `A${p.radius - p.hole},${p.radius - p.hole} 0 ${
        drawValue > 180 ? 1 : 0
      },0 ${b.x1},${b.y1}`
    );

    // Close
    path.push("Z");

    this.setState({ path: path.join(" ") });

    if (drawValue < p.angle) {
      setTimeout(function() {
        self.draw(drawValue + step);
      }, 16);
    } else if (p.showLabel) {
      const c = getAnglePoint(
        p.startAngle,
        p.startAngle + p.angle / 2,
        p.radius / 2 + p.trueHole / 2,
        p.radius,
        p.radius
      );

      this.setState({
        x: c.x2,
        y: c.y2
      });
    }
  };

  render() {
    const { path, x, y } = this.state;
    const {
      fill,
      stroke,
      strokeWidth,
      showLabel,
      percent,
      percentValue,
      value
    } = this.props;
    return (
      <g overflow="hidden">
        <path
          d={path}
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth || 3}
        />
        {showLabel && percentValue > 5 ? (
          <text x={x} y={y} fill="#fff" textAnchor="middle">
            {percent ? `${percentValue}%` : value}
          </text>
        ) : null}
      </g>
    );
  }
}

Slice.defaultProps = {
  fill: "",
  stroke: "",
  strokeWidth: 0,
  showLabel: false,
  percent: false,
  percentValue: "",
  value: 0
};

Slice.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
  showLabel: PropTypes.bool,
  percent: PropTypes.bool,
  percentValue: PropTypes.string,
  value: PropTypes.number
};

export default Slice;
