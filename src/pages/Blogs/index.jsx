/*

Component : Blogs

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import { HashLoader } from "react-spinners";

/** ****************************** Import SubClasses *************************** */
import SearchForm from "./SearchForm";
import BlogsList from "./BlogsList";

/** ****************************** Import components *************************** */
import Paginate from "../../components/Paginate";

/** ****************************** Import APIS *************************** */
//import { getBlogs } from "/imports/api/blogs";
import { intervals } from "../../config";

class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      pageLimit: 6,
      searchText: null,
      newsList: [],
      totalRecords: 0,
      sortBy: "latest",
      loading: true,
      bitLoader: false
    };
  }

  // componentWillMount() {
  //   this.reloadData();
  // }

  // reloadData = () => {
  //   this.setState({
  //     bitLoader: true
  //   });
  //   const { currentPage, pageLimit, searchText, sortBy } = this.state;
  //   const self = this;
  //   getBlogs(currentPage, pageLimit, searchText, sortBy)
  //     .then(result => {
  //       if (result[0]) {
  //         this.setState({
  //           newsList: result[0].data,
  //           totalRecords: result[0].total_records,
  //           bitLoader: false
  //         });
  //         setTimeout(function() {
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

  handleSearch = newSearch => {
    const self = this;
    const { searchText } = this.state;
    if (searchText !== newSearch) {
      this.setState({ searchText: newSearch });
      setTimeout(function() {
        self.reloadData();
      }, intervals.reload);
    }
  };

  handleSortChange = newSortData => {
    const self = this;
    const { sortBy } = this.state;
    if (sortBy !== newSortData) {
      this.setState({ sortBy: newSortData });
      setTimeout(function() {
        self.reloadData();
      }, intervals.reload);
    }
  };

  onPaginate = (page, currentPage) => {
    const self = this;
    if (page !== currentPage) {
      this.setState({ currentPage: page });
    }
    setTimeout(function() {
      self.reloadData();
    }, intervals.reload);
  };

  renderLoader = () => {
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

  renderList = () => {
    const { newsList, totalRecords } = this.state;
    return <BlogsList dataList={newsList} totalRecords={totalRecords} />;
  };

  renderPagination = () => {
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
    const { totalRecords, sortBy, loading, bitLoader } = this.state;
    return (
      <div className="blog pb-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-header fw-300 border-0">
                <SearchForm
                  totalRecords={totalRecords}
                  sortBy={sortBy}
                  handleSearch={this.handleSearch}
                  handleSortChange={this.handleSortChange}
                />
              </div>
            </div>
          </div>
          <div className="row custom-load-height">
            {/* {loading || bitLoader ? this.renderLoader() : this.renderList()} */}
            {this.renderList()}
          </div>
          {!loading ? this.renderPagination() : null}
        </div>
      </div>
    );
  }
}

export default Blogs;
