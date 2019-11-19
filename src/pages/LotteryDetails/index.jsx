/*

Component : LotteryDetails

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { HashLoader } from "react-spinners";

/** ****************************** Import Components *************************** */
import Details from "./Details";
import TransactionList from "./TransactionList";
import Paginate from "../../components/Paginate";

/** ****************************** Import constants *************************** */
import lotteryConstants from "../../constants/lottery-constants";
import { intervals } from "../../config";
/** ****************************** Import API *************************** */
// import { getpoolId } from "/imports/api/events";
// import { getPoolTransactionsList } from "/imports/api/events";

class LotteryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
      currentPage: 1,
      pageLimit: 6,
      transList: [],
      totalRecords: 0,
      loading: true,
      bitLoader: false
    };
  }

  // componentWillMount = () => {
  //   const params = this.props.match.params;
  //   if (params.id) {
  //     getpoolId(params.id)
  //       .then(details => {
  //         this.setState({
  //           details
  //         });
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //     this.reloadData();
  //   }
  // };

  // reloadData = () => {
  //   this.setState({
  //     bitLoader: true
  //   });
  //   const { currentPage, pageLimit, searchTex } = this.state;
  //   const self = this;
  //   const params = this.props.match.params;
  //   if (params.id) {
  //     getPoolTransactionsList(params.id, currentPage, pageLimit, searchTex)
  //       .then(result => {
  //         if (result[0]) {
  //           this.setState({
  //             transList: result[0].data,
  //             totalRecords: result[0].total_records,
  //             bitLoader: false
  //           });
  //           Meteor.setTimeout(function() {
  //             self.setState({ loading: false });
  //           }, 300);
  //         }
  //       })
  //       .catch(error => {
  //         if (error) {
  //           this.setState({
  //             loading: false
  //           });
  //         }
  //       });
  //   }
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

  _renderPagination = () => {
    const { totalRecords, pageLimit } = this.state;
    return (
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-3" />
        <div className="col-xl-6 col-lg-6 col-md-6 justify-content-center">
          <Paginate
            onPaginate={this.onPaginate}
            pageLimit={pageLimit}
            totalRecords={totalRecords}
            {...this.props}
          />
        </div>
      </div>
    );
  };

  _renderLoader = () => {
    const { loading, bitLoader } = this.state;
    return (
      <div className="card-deck text-dark loader-box justify-content-center">
        <div className="row">
          <div className="col-xs-12 ml-auto mr-auto">
            <div className="jumbotron justify-content-center">
              <HashLoader color="#ffffff" loading={loading || bitLoader} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { loading, bitLoader, transList, details } = this.state;
    return (
      <div className="lottery pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 text-left">
              <h3 className="mb-4">{lotteryConstants.lotteryDetails.title}</h3>
            </div>
          </div>
          <Details details={details} />
          <div className="row mt-4">
            <div className="col-xl-12">
              <h3 className="mb-4">
                {lotteryConstants.transactionDetails.title}
              </h3>
            </div>
          </div>
          <TransactionList
            loading={loading}
            bitLoader={bitLoader}
            list={transList}
          />
          <div className="loader-pagination mt-4">
            {!loading ? this._renderPagination() : null}
          </div>
        </div>
      </div>
    );
  }
}

LotteryDetails.propTypes = {
  match: PropTypes.object.isRequired
};

export default LotteryDetails;
