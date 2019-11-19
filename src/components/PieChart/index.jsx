/*
   
PieChart   

*/
/** ****************************** Import packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";

/** ****************************** Import Components *************************** */
import Slice from "/imports/ui/components/PieChart/Slice";

class PieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      colors,
      labels,
      hole,
      radius,
      data,
      percent,
      stroke,
      strokeWidth
    } = this.props;
    const colorsLength = colors.length;
    const diameter = radius * 2;
    let startAngle;
    const sum = data.reduce(function(carry, current) {
      return carry + current;
    }, 0);
    startAngle = 0;
    if (data[0] === 0) return null;
    return (
      <svg
        width={diameter}
        height={diameter}
        viewBox={`0 0 ${diameter} ${diameter}`}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        {data.map(function(slice, sliceIndex) {
          const nextAngle = startAngle;
          const angle = (slice / sum) * 360;
          const percentValue = (slice / sum) * 100;
          startAngle += angle;
          const index = sliceIndex + 1;
          return (
            <Slice
              key={index}
              value={slice}
              percent={percent}
              percentValue={percentValue.toFixed(1)}
              startAngle={nextAngle}
              angle={angle}
              radius={radius}
              hole={radius - hole}
              trueHole={hole}
              showLabel={labels}
              fill={colors[sliceIndex % colorsLength]}
              stroke={stroke}
              strokeWidth={strokeWidth}
            />
          );
        })}
      </svg>
    );
  }
}

PieChart.defaultProps = {
  colors: [],
  labels: false,
  hole: 0,
  radius: 0,
  data: [],
  percent: false,
  stroke: "",
  strokeWidth: 0
};

PieChart.propTypes = {
  colors: PropTypes.array,
  labels: PropTypes.bool,
  hole: PropTypes.number,
  radius: PropTypes.number,
  data: PropTypes.array,
  percent: PropTypes.bool,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number
};

export default PieChart;
