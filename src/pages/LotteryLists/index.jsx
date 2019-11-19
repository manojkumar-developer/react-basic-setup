/*

Component : LotteryLists

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
//import { createContainer } from "meteor/react-meteor-data";
import { HashLoader } from "react-spinners";

/** ****************************** Import SubClasses *************************** */
import AllList from "./AllList";
import Paginate from "../../components/Paginate";

/** ****************************** Import Constants *************************** */
import lotteryConstants from "../../constants/lottery-constants";
import { intervals } from "../../config";
/** ****************************** Import API *************************** */
//import { getCompletePoolList, getpoolList } from "/imports/api/events";

class LotteryLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      pageLimit: 6,
      completeList: [],
      totalRecords: 0,
      loading: true,
      bitLoader: false
    };
  }

  // componentWillMount = () => {
  //   this.reloadData();
  // };

  // reloadData = () => {
  //   this.setState({
  //     bitLoader: true
  //   });
  //   const { currentPage, pageLimit, searchText } = this.state;
  //   const self = this;
  //   getpoolList(currentPage, pageLimit, searchText)
  //     .then(result => {
  //       if (result[0]) {
  //         this.setState({
  //           completeList: result[0].data,
  //           totalRecords: result[0].total_records,
  //           bitLoader: false
  //         });
  //         Meteor.setTimeout(function() {
  //           self.setState({ loading: false });
  //         }, 300);
  //       }
  //     })
  //     .catch(error => {
  //       if (error) {
  //         this.setState({
  //           loading: false
  //         });
  //       }
  //     });
  // };

  onPaginate = (page, currentPage) => {
    const self = this;
    if (page !== currentPage) {
      this.setState({ currentPage: page });
    }
    setTimeout(function() {
      self.reloadData();
    }, intervals.reload);
  };

  _renderLoader = () => {
    const { loading, bitLoader } = this.state;
    return (
      <div className="card-deck text-dark loader-box justify-content-center">
        <div className="row">
          <div className="col-xs-12 ml-auto mr-auto">
            <div className="jumbotron justify-content-center">
              <HashLoader color="#57B1FB" loading={loading || bitLoader} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  _renderPagination = () => {
    const { totalRecords, pageLimit } = this.state;
    return (
      <Paginate
        onPaginate={this.onPaginate}
        pageLimit={pageLimit}
        totalRecords={totalRecords}
        {...this.props}
      />
    );
  };

  render() {
    const { loading } = this.state;
    const { bitLoader, completeList } = this.state;
    return (
      <div className="lottery pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 text-left">
              <h3 className="mb-4">{lotteryConstants.lotteryLists.title}</h3>
            </div>
          </div>
          <div className="row custom-load-height">
            {/* Left Side */}
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="complete-lists">
                {/* {loading || bitLoader ? (
                  this._renderLoader()
                ) : (
                  <AllList list={completeList} />
                )} */}
                
                <AllList list={completeList} />

              </div>
            </div>
          </div>
          {!loading ? this._renderPagination() : null}
        </div>
      </div>
    );
  }
}

export default LotteryLists;

// export default createContainer(() => {
//   Meteor.subscribe("collect_complete_lottery");
//   const completeList = getCompletePoolList();
//   return {
//     completeList
//   };
// }, LotteryLists);
