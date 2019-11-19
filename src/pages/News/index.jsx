/*

Component : News

 */
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import { HashLoader } from "react-spinners";

/** ****************************** Import Components *************************** */
import Paginate from "../../components/Paginate";

/** ****************************** Import SubClasses *************************** */
import SearchForm from "./SearchForm";
import NewsList from "./NewsList";

/** ****************************** Import APIS *************************** */
// import { getCategoryList } from "/imports/api/lists";
// import { getNewsList } from "/imports/api/charity-news";
import { intervals } from "../../config";

class CharityNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [],
      currentPage: 1,
      pageLimit: 6,
      category: null,
      searchText: null,
      newsList: [],
      totalRecords: 0,
      sortBy: "latest",
      loading: true,
      bitLoader: false
    };
  }

  // componentWillMount = () => {
  //   this.loadCategoryList();
  //   this.reloadData();
  // };

  
  // reloadData = () => {
  //   this.setState({
  //     bitLoader: true
  //   });
  //   const { currentPage, pageLimit, category, searchText, sortBy } = this.state;
  //   const self = this;
  //   getNewsList(currentPage, pageLimit, category, searchText, sortBy)
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

  // loadCategoryList = () => {
  //   getCategoryList().then(categoryArray => {
  //     const categoryList = [];
  //     categoryArray.map(function(item) {
  //       return categoryList.push({
  //         id: item._id,
  //         value: item.categoryName
  //       });
  //     });
  //     this.setState({ categoryList });
  //   });
  // };

  handleCategory = newCategory => {
    const self = this;
    const { category } = this.state;
    if (category !== newCategory) {
      this.setState({ category: newCategory });
      setTimeout(function() {
        self.reloadData();
      }, intervals.reload);
    }
  };

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

  _renderList = () => {
    const { newsList, totalRecords } = this.state;
    return <NewsList dataList={newsList} totalRecords={totalRecords} />;
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
    const { categoryList, totalRecords, loading } = this.state;
    const { sortBy, bitLoader } = this.state;
    return (
      <div className="charity-news pb-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-header fw-300 border-0">
                <SearchForm
                  sortBy={sortBy}
                  totalRecords={totalRecords}
                  categoryList={categoryList}
                  handleSearch={this.handleSearch}
                  handleCategory={this.handleCategory}
                  handleSortChange={this.handleSortChange}
                />
              </div>
            </div>
          </div>
          <div className="row custom-load-height">
            {/* {loading || bitLoader ? this._renderLoader() : this._renderList()} */}

            {this._renderList()}
          </div>
          {!loading ? this._renderPagination() : null}
        </div>
      </div>
    );
  }
}

export default CharityNews;
