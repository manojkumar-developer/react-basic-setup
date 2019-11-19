/* 

Component : MyCharts 

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";

/** ****************************** Import Components *************************** */
// import PieChartNew from "../../../components/PieChartNew";
// import BarChart from "../../../components/BarChart";
// import ColumnChart from "../../../components/ColumnChart";

/** ****************************** Import Constants *************************** */
import myAccountTitleConstants from "../../../constants/my-account-titles";

class MyCharts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _renderRows = dataList => {
    const self = this;
    if (!dataList) return null;
    return dataList.map(function(data) {
      return (
        <tr
          className="hover-popup"
          key={data._id}
          role="presentation"
          onClick={() => self.showDetails(data)}
        >
          <td className="align-middle">
            <p className="charity-name mdm-txt text-muted mb-0">
              {data.charityName}
            </p>
          </td>
          <td className="align-middle">
            <p className="time mdm-txt text-muted mb-0">
              <button
                className="btn btn-custom btn-border"
                onClick={this.handleOpen}
              >
                <span className="btn-text">{`Remove`}</span>
              </button>
            </p>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="right-content table-right-content">
        {/* <!-- Recent Activities --> */}
        <table className="table table-header mb-4 table-responsive-sm">
          <tbody>
            <tr className="d-flex">
              <td className="align-middle pl-0 pt-0 pb-4 col-12">
                <h3 className="fw-500">
                  {myAccountTitleConstants.myCharts.title}
                </h3>
              </td>
            </tr>
          </tbody>
        </table>
        {/* Column Bar Charts */}
        <div className="bar-chart-box mb-5">
          {/* Tabs */}
          <ul className="nav nav-tabs pt-2 pb-2" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="tab-link active"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                {`Grants and Contributions`}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="tab-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                {`My Top Charities`}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="tab-link"
                id="contact-tab"
                data-toggle="tab"
                href="#contact"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                {`Grant Recommendations by Charity Type`}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="tab-link"
                id="contact-tab"
                data-toggle="tab"
                href="#current-tab"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                {`Current Investment Allocations`}
              </a>
            </li>
          </ul>
          {/* TabContent */}
          <div className="tab-content pt-4" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="column-chart">
                {/* <ColumnChart /> */}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="bar-chart">
                {/* <BarChart /> */}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <div className="bar-chart">
                {/* <PieChartNew /> */}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <div className="bar-chart">
                {/* <PieChartNew /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyCharts;
