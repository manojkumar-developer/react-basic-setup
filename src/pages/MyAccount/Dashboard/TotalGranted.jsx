/* 

Component : TotalGranted

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
//import { createContainer } from "meteor/react-meteor-data";
import { Link } from "react-router-dom";

/** ****************************** Import components *************************** */
import ProgressBar from "../../../components/ProgressBar";

/** ******************* Import Constants ************************************** */
import myAccountTitleConstants from "../../../constants/my-account-titles";
import { dashboardConstants } from "../../../constants/my-account-constants";

/** ******************* Import Common Functions ************************************** */
import { displayAmount, displayAmountWithComma } from "../../../utils/common";
//import { getConfiguration } from "/imports/api/lists";

class TotalGranted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      configuration: {}
    };
  }

  componentWillReceiveProps = nextprops => {
    if (nextprops && nextprops.configuration) {
      const configuration = nextprops.configuration;
      this.setState({ configuration });
    }
  };

  renderReadings = () => {
    const { dashBoardData } = this.props;
    const data = dashBoardData;
    // const total = data.cash_contributions + data.non_cash_contributions;
    // const grantsPercent = (data.grants / total) * 100;
    // const unAllocatedPercent = (data.unallocated_funds / total) * 100;
    // const totalPercentage = 100 - (grantsPercent + unAllocatedPercent);
    const readings = [];
    // readings.push(
    //   {
    //     name: "Grants",
    //     value: grantsPercent.toFixed(2),
    //     color: "#2CC391"
    //   },
    //   {
    //     name: "Unallocated funds",
    //     value: unAllocatedPercent.toFixed(2),
    //     color: "#DCDCDC"
    //   },
    //   {
    //     name: "Total",
    //     value: totalPercentage.toFixed(2),
    //     color: "#DCDCDC"
    //   }
    // );
    return (
      <div>
        <p className="mb-2 fw-500 mdm-text">
          {dashboardConstants.totalGranted.outOfTotalText}
          {/* <span className="ml-1">{displayAmount(total)}</span> */}
        </p>
        <ProgressBar readings={readings} />
      </div>
    );
  };

  render() {
    const { dashBoardData } = this.props;
    const { configuration } = this.state;
    const data = dashBoardData;
    // const creditString = dashBoardData.kredits
    //   ? displayAmountWithComma(dashBoardData.kredits)
    //   : "0";
    let creditList = [];
    //creditList = creditString.split("");
    return (
      <div className="row">
        <div className="col-xl-12">
          <div className="card graph-box hover-box-shadow border text-left">
            <div className="card-body">
              <div className="row">
                <div className="col-xl-5 col-sm-5">
                  <h5 className="mb-0 fw-600">
                    {dashboardConstants.totalGranted.title}
                  </h5>
                  <h3 className="mb-2 mt-3 pt-1 fw-500">
                    {/* {displayAmount(dashBoardData.grants)} */}
                  </h3>
                </div>
                <div className="col-xl-7 col-sm-7">
                  <Link to="/account/credits">
                    <div className="fw-300 pl-0 mb-2 mt-1 tk-credits d-flex justify-content-sm-end">
                      {creditList.map(function(value, i) {
                        const index = `${i}${value}`;
                        if (value === ",") {
                          return (
                            <span
                              className="digit-value-seperator text-dark"
                              key={index}
                            >
                              {","}
                            </span>
                          );
                        }
                        return (
                          <h3 key={index} className="digit text-white">
                            {value}
                          </h3>
                        );
                      })}
                    </div>
                    <h6 className="mb-2 fw-600 tk-credits text-dark text-right">
                      {myAccountTitleConstants.Credits.title}
                    </h6>
                  </Link>
                </div>
              </div>
              {this.renderReadings(data)}
            </div>
            <div className="card-footer bg-white">
              <i className="fa fa-graduation-cap mr-2 fx-2 float-left" />
              <p className="mb-0">
                <span className="text1 mdm-text fw-500 mr-1">
                  {dashboardConstants.totalGranted.cardFooterText1}
                </span>
                <span className="text2 mdm-text">
                  <span className="mr-1 fw-600">
                    {configuration.credits
                      ? configuration.credits.contributionOneDollar
                      : null}
                  </span>
                  {dashboardConstants.totalGranted.highlightText}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TotalGranted.propTypes = {
  dashBoardData: PropTypes.object.isRequired
};

export default TotalGranted;

// export default createContainer(() => {
//   const handle = Meteor.subscribe("collect_configuration");
//   const configuration = getConfiguration();
//   const loading = !handle.ready();
//   return {
//     configuration,
//     loading
//   };
// }, TotalGranted);
