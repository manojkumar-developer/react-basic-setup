/* 

BarChart 

*/
/** ****************************** Import packages *************************** */
import React, { Component } from "react";
import CanvasJSReact from "./canvasjs.react";
import PropTypes from "prop-types";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class CircleChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { ovalues, dvalues } = this.props;
    const options = {
      animationEnabled: true,      
      backgroundColor: "#EEF2F6",
      subtitles: [
        {
          verticalAlign: "center",
          fontSize: 24,
          dockInsidePlotArea: true
        }
      ],
      dataPointWidth: 20,
      data: [
        {
          type: "doughnut",         
          yValueFormatString: "#,###'%'",
          dataPoints: [dvalues, ovalues]
        }
      ]
    };
    return (
      <div>
        <CanvasJSChart options={options} />
      </div>
    );
  }
}

CircleChart.defaultProps = {
  ovalues: {},
  dvalues: {}
};

CircleChart.propTypes = {
  ovalues: PropTypes.object,
  dvalues: PropTypes.object
};

export default CircleChart;
