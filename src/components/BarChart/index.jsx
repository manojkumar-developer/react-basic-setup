/* 

BarChart 

*/

/** ****************************** Import packages *************************** */
import React, { Component } from "react";

import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class BarChart extends Component {  
  render() {
		const options = {
			backgroundColor: "#EEF2F6",		
			animationEnabled: true,
			theme: "light1",
			title:{
				text: ""
			},
			axisX: {
				title: "",
				reversed: true,
			},
			axisY: {
				title: "",
				labelFormatter: this.addSymbols
			},
			data: [{
				type: "bar",
				dataPoints: [
					{ y:  2200000000, label: "Bar 1" },
					{ y:  1800000000, label: "Bar 2" },
					{ y:  800000000, label: "Bar 3" },
					{ y:  563000000, label: "Bar 4" },
					{ y:  376000000, label: "Bar 5" },
					{ y:  336000000, label: "Bar 6" },
					{ y:  330000000, label: "Bar 7" }
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}/>
		</div>
		);
	}
    
}

export default BarChart;
