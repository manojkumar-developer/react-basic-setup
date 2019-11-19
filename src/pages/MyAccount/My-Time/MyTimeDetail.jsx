/* 

Component : MyTimeDetail 

*/
/* ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";

/** ****************************** Import Constants and Common Functions *************************** */
import myAccountListConstants from "../../../constants/my-account-lists";
import myAccountTitleConstants from "../../../constants/my-account-titles";
import { expenseTypeList, timeList } from "../../../constants/lists";
import { displayDate, displayAmount } from "../../../utils/common";

class MyTimeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderOutExpense = (expenseList, typeList) => {
    if (!expenseList) return null;
    return Object.keys(expenseList).map(function(key) {
      const type = typeList[key];
      if (type === null) {
        return null;
      }
      return (
        <tr key={key}>
          <td width="25%" className="align-middle bg-white">
            <p className="date blue mdm-txt text-muted mb-0">
              {displayAmount(expenseList[key])}
            </p>
          </td>
          <td width="75%" className="align-middle bg-white">
            <p className="date mdm-txt text-muted mb-0">
              {expenseTypeList[type].value}
            </p>
          </td>
        </tr>
      );
    });
  };

  render() {
    const { detail } = this.props;
    if (!detail) return null;
    return (
      <div className="myaccountforms-details">
        <table className="table myaccount-dashboard-table myaccountforms-details my-donations mb-0 table-responsive-sm">
          <tbody>
            <tr>
              <td width="17%" className="align-middle p-3 border-top-0">
                <p className="th-date mb-0 text-dark">
                  {myAccountListConstants.date.text}
                </p>
              </td>
              <td width="33%" className="align-middle bg-white">
                <p className="date mdm-txt text-muted mb-0">
                  {displayDate(detail.date)}
                </p>
              </td>
              <td width="17%" className="align-middle p-3 border-top-0">
                <p className="th-charities text-dark mb-0">
                  {myAccountListConstants.charityName.text}
                </p>
              </td>
              <td width="33%" className="align-middle bg-white">
                <p className="charities mdm-txt text-muted mb-0">
                  {detail.charityName}
                </p>
              </td>
            </tr>
            <tr>
              <td width="17%" className="align-middle p-3 border-top-0">
                <p className="th-duration text-dark mb-0">
                  {myAccountListConstants.duration.text}
                </p>
              </td>
              <td width="33%" className="align-middle bg-white">
                <p className="duration mdm-txt text-muted mb-0">
                  {timeList[detail.duration].value}
                </p>
              </td>
              <td width="17%" className="align-middle p-3 border-top-0">
                <p className="th-activity text-dark mb-0">
                  {myAccountListConstants.activity.text}
                </p>
              </td>
              <td width="33%" className="align-middle bg-white">
                <p className="activity mdm-txt text-muted mb-0">
                  {detail.activity}
                </p>
              </td>
            </tr>
            <tr>
              <td width="17%" className="align-middle p-3 border-top-0">
                <p className="th-description text-dark mb-0">
                  {myAccountListConstants.description.text}
                </p>
              </td>
              <td width="83%" colSpan="3" className="align-middle bg-white">
                <p className="desc mdm-txt text-muted mb-0">
                  {detail.description}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <h5 className="mt-4 mb-3">
          {myAccountTitleConstants.myTime.outOfPocketTitle}
        </h5>
        <table className="table myaccount-dashboard-table myaccountforms-details my-donations mb-0 table-responsive-sm">
          <tbody>
            <tr>
              <td width="25%" className="align-middle p-3 border-top-0">
                <p className="th-activity text-dark mb-0">
                  {myAccountListConstants.outOfExpense.text}
                </p>
              </td>
              <td width="75%" className="align-middle p-3 border-top-0">
                <p className="th-activity text-dark mb-0">
                  {myAccountListConstants.expenseType.text}
                </p>
              </td>
            </tr>
            {this.renderOutExpense(detail.pocketExpenses, detail.expensesType)}
          </tbody>
        </table>
      </div>
    );
  }
}

MyTimeDetail.defaultProps = {
  detail: []
};

MyTimeDetail.propTypes = {
  detail: PropTypes.object
};

export default MyTimeDetail;
