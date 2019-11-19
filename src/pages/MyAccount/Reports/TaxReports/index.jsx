/* 

Component : MyReports

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import { dripForm } from "react-drip-form";

/** ****************************** Import Components *************************** */
import SelectField from "../../../../components/FormElements/SelectField";
import DatePicker from "../../../../components/FormElements/DatePicker";

/** ****************************** Import Constants and Common Functions *************************** */
import { reportTypeList } from "../../../../constants/lists";
import myAccountListConstants from "../../../../constants/my-account-lists";
import { contributionMethodList, grantsMethodList } from "../../../../constants/lists";
import { propertyTypeList, paymentMethodList } from "../../../../constants/lists";
import myAccountFormConstants from "../../../../constants/my-account-forms";
import myAccountTitleConstants from "../../../../constants/my-account-titles";
import { displayDate, displayAmount } from "../../../../utils/common";
import { various, methodList } from "../../../../constants/lists";
/** ****************************** Import API *************************** */
// import { getReportsByUser } from "/imports/api/users";

class Reports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "contributions",
      method: "all",
      fromDate: null,
      toDate: null,
      reportData: []
    };
  }

  // componentWillMount() {
  //   const userId = Session.get("currentUserId");
  //   const { type, method, fromDate, toDate } = this.state;
  //   // get data from APIs
  //   getReportsByUser(userId, type, method, fromDate, toDate).then(
  //     reportData => {
  //       this.setState({ reportData, type, method, fromDate, toDate });
  //     }
  //   );
  // }

  // hanldeType = event => {
  //   const currentType = event.target.value;
  //   const userId = Session.get("currentUserId");
  //   const { type, method, fromDate, toDate } = this.state;
  //   if (type !== currentType) {
  //     getReportsByUser(userId, currentType, method, fromDate, toDate).then(
  //       reportData => {
  //         this.setState({ reportData, type: currentType, method });
  //       }
  //     );
  //   }
  // };

  // hanldeMethod = event => {
  //   const currentMethod = event.target.value;
  //   const userId = Session.get("currentUserId");
  //   const { type, method, fromDate, toDate } = this.state;
  //   if (method !== currentMethod) {
  //     getReportsByUser(userId, type, currentMethod, fromDate, toDate).then(
  //       reportData => {
  //         this.setState({ reportData, type, method: currentMethod });
  //       }
  //     );
  //   }
  // };

  // handleFromDate = currentFromDate => {
  //   const userId = Session.get("currentUserId");
  //   const { type, method, fromDate, toDate } = this.state;
  //   if (fromDate !== currentFromDate) {
  //     getReportsByUser(userId, type, method, currentFromDate, toDate).then(
  //       reportData => {
  //         this.setState({
  //           reportData,
  //           type,
  //           method,
  //           fromDate: currentFromDate,
  //           toDate
  //         });
  //       }
  //     );
  //   }
  // };

  // handleClearFromDate = () => {
  //   const userId = Session.get("currentUserId");
  //   const { type, method, toDate } = this.state;
  //   getReportsByUser(userId, type, method, null, toDate).then(reportData => {
  //     this.setState({ reportData, fromDate: null });
  //   });
  // };

  // handleToDate = currentToDate => {
  //   const userId = Session.get("currentUserId");
  //   const { type, method, fromDate, toDate } = this.state;
  //   if (toDate !== currentToDate) {
  //     getReportsByUser(userId, type, method, fromDate, currentToDate).then(
  //       reportData => {
  //         this.setState({
  //           reportData,
  //           type,
  //           method,
  //           fromDate,
  //           toDate: currentToDate
  //         });
  //       }
  //     );
  //   }
  // };

  // handleClearToDate = () => {
  //   const userId = Session.get("currentUserId");
  //   const { type, method, fromDate } = this.state;
  //   getReportsByUser(userId, type, method, fromDate, null).then(reportData => {
  //     this.setState({ reportData, toDate: null });
  //   });
  // };

  renderRows = dataList => {
    if (!dataList) return null;
    return dataList.map(function(data) {
      let nameOrMethod;
      let typeOrMethod;
      let methodName = "";
      // // method
      if (data.type === "cash_grants") {
        methodName = paymentMethodList[data.method].value;
      } else if (data.method === "card" && data.stripeId) {
        methodName = "Credit card (Stripe)";
      } else if (data.method === "card" && !data.stripeId) {
        methodName = "Credit card (CardConnect)";
      } else if (data.method === "ach") {
        methodName = "ACH Payment";
      }

      if (data.type) {
        typeOrMethod = methodList[data.type].value;
      }

      if (data.charityName) {
        nameOrMethod = data.charityName;
      } else {
        nameOrMethod = data.propertyType
          ? propertyTypeList[data.propertyType].value
          : methodName;
      }

      const dateVarious = data.dateVarious;

      return (
        <tr key={data.transactionId}>
          <td className="align-middle">
            <p className="donated-date mdm-txt text-muted mb-0">
              {dateVarious ? various : displayDate(data.date)}
            </p>
          </td>
          <td className="align-middle">
            <p className="donation-id mdm-txt text-muted mb-0">
              {data.transactionId}
            </p>
          </td>
          <td className="align-middle">
            <p className="method-of-donation mdm-txt text-muted mb-0">
              {nameOrMethod}
            </p>
          </td>
          <td className="align-middle">
            <p className="mdm-txt text-muted mb-0">{typeOrMethod}</p>
          </td>
          <td className="align-middle">
            <h4 className="amount-donated fw-300 blue">
              {data.amount
                ? displayAmount(data.amount)
                : displayAmount(data.marketValue)}
            </h4>
          </td>
        </tr>
      );
    });
  };

  render() {
    const { type, method, fromDate, toDate, reportData } = this.state;
    let dataList;
    if (reportData && reportData.length !== 0) {
      dataList = reportData[0].data;
    }
    let _methodList = contributionMethodList;
    if (type === "grants") {
      _methodList = grantsMethodList;
    }
    return (
      <div className="right-content table-right-content">
        <table className="table table-header mb-4 table-responsive-sm">
          <tbody>
            <tr className="d-flex">
              <td className="align-middle pt-0 pb-0 col">
                <h3 className="fw-500">
                  {myAccountTitleConstants.myReports.title}
                </h3>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="donation-detail tax-reports-details pt-2">
          <form autoComplete="off">
            <div className="select-type pl-3 pt-3 pr-3 form-wrapper">
              <div className="row">
                <div className="col-xl-3 col-md-3 col-sm-6 mb-2">
                  <SelectField
                    className="select-input-fields width-100 icon-style"
                    id="reportType"
                    name="reportType"
                    labeltext={myAccountFormConstants.reportType.FloatingText}
                    source={reportTypeList}
                    value={type}
                    onChange={event => this.hanldeType(event)}
                  />
                </div>
                <div className="col-xl-3 col-md-3 col-sm-6">
                  <SelectField
                    className="select-input-fields width-100"
                    id="reportMethod"
                    name="reportMethod"
                    labeltext={myAccountFormConstants.reportMethod.FloatingText}
                    source={_methodList}
                    value={method}
                    onChange={event => this.hanldeMethod(event)}
                  />
                </div>
                <div className="col-xl-3 col-md-3 col-sm-6">
                  <DatePicker
                    className="width-100 date-picker mt-2"
                    name="fromDate"
                    autoOk
                    labeltext={myAccountFormConstants.fromDate.label}
                    floatingLabelText={
                      myAccountFormConstants.fromDate.FloatingText
                    }
                    value={fromDate}
                    onChange={value => {
                      this.handleFromDate(value);
                    }}
                    // onBlur={() => this.handleClearFromDate()}
                  />
                </div>
                <div className="col-xl-3 col-md-3 col-sm-6 mb-3">
                  <DatePicker
                    className="width-100 date-picker mt-2"
                    name="toDate"
                    autoOk
                    labeltext={myAccountFormConstants.toDate.label}
                    floatingLabelText={
                      myAccountFormConstants.toDate.FloatingText
                    }
                    value={toDate}
                    onChange={value => {
                      this.handleToDate(value);
                    }}
                    minDate={fromDate}
                    // onBlur={() => this.handleClearToDate()}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="my-reports border-bottom">
          {/* <!-- Cash Contribution Table --> */}
          <table className="table myaccount-dashboard-table my-donations mb-0 table-responsive-sm">
            <tbody>
              <tr className="table-heading">
                <th className="align-middle p-3 border-top-0">
                  <h6 className="th-date mb-0">
                    {myAccountListConstants.date.text}
                  </h6>
                </th>
                <th className="align-middle p-3 border-top-0">
                  <h6 className="th-donation-id mb-0">
                    {myAccountListConstants.reference.text}
                  </h6>
                </th>
                <th className="align-middle p-3 border-top-0">
                  <h6 className="th-charities mb-0">
                    {type === "grants"
                      ? myAccountListConstants.charityName.text
                      : myAccountListConstants.paymentMethod.text}
                  </h6>
                </th>
                <th className="align-middle p-3 border-top-0">
                  <h6 className="th-method mb-0">
                    {myAccountListConstants.type.text}
                  </h6>
                </th>
                <th className="align-middle p-3 border-top-0">
                  <h6 className="th-amount mb-0">
                    {myAccountListConstants.amount.text}
                  </h6>
                </th>
              </tr>
              {this.renderRows(dataList)}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default dripForm({})(Reports);
