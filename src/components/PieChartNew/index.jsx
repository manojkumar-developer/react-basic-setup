/* 

PieChartNew 

*/
/** ****************************** Import packages *************************** */
import React, { Component } from "react";

import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class PieChartNew extends Component {  
	render() {
		const options = {
			backgroundColor: "#EEF2F6",			
			animationEnabled: true,			
			title: {
				text: ""
			},
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{label} - {y}%",
				dataPoints: [
					{ y: 18, label: "Direct" },
					{ y: 49, label: "Organic Search" },
					{ y: 9, label: "Paid Search" },
					{ y: 5, label: "Referral" },
					{ y: 19, label: "Social" }
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

export default PieChartNew;
