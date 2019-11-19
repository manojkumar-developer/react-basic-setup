/*
   
CharityList

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
//import { createContainer } from "meteor/react-meteor-data";
import PropTypes from "prop-types";
import { HashLoader } from "react-spinners";

/** ****************************** Import Components *************************** */
import Paginate from "../../components/Paginate";

/** ****************************** Import SubClasses *************************** */
import SearchForm from "./SearchForm";
import CharityListBox from "./CharityListBox";

/** ****************************** Import Constants and Common Functions *************************** */
import noRecordsFoundConstants from "../../constants/no-records-found";
import { intervals } from "../../config";

import request from "../../api";

/** ****************************** Import APIS *************************** */
// import { getCategoryAList, getCauseAList } from "/imports/api/lists";
// import { getCharityList, getleastCharityList } from "/imports/api/charities";

export const PageArray = [6, 12, 24, 48, 96];

class CharityList extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      charityList: [],
      categoryList: [],
      causeList: [],
      pageLimit: 6,
      currentPage: 1,
      totalRecords: 0,
      category: null,
      searchBy: "",
      sortBy: "rank",
      loading: true,
      bitLoader: false,
      imageHash: Date.now()
    };
  }

  componentWillMount = () =>{

    fetch('https://xipuw6s3fb.execute-api.us-east-1.amazonaws.com/dev/charities')
      .then((data) => data.json())
      .then((res) => this.setState({ data: res.data }));

    request({
      method:"get",
      url: "https://xipuw6s3fb.execute-api.us-east-1.amazonaws.com/dev/charities"
    }).then(success=>{
      if(success){
        console.log(success);
      }
    }).catch(error=>{
      if(error){
        console.log(error);
      }
    });
  }
  // componentWillMount() {
  //   const self = this;
  //   Meteor.call("getCharityCount", function(error, result) {
  //     if (!error && result) {
  //       self.setState({
  //         totalRecords: result
  //       });
  //     }
  //   });
  // }

  // componentWillReceiveProps = nextProps => {
  //   if (nextProps) {
  //     this.loadCategory(nextProps.categoryList);
  //     this.loadCause(nextProps.causeList);
  //     const charityList = nextProps.leastList;
  //     this.setState({
  //       totalRecords: 1692636,
  //       charityList,
  //       loading: false,
  //       imageHash: Date.now(),
  //       bitLoader: false
  //     });
  //   }
  // };

  // loadCategory = categoryArray => {
  //   const categoryList = [];
  //   categoryArray.map(function(item) {
  //     return categoryList.push({
  //       id: item._id,
  //       value: item.categoryName
  //     });
  //   });
  //   this.setState({ categoryList });
  // };

  loadCause = causeArray => {
    const causeList = [];
    causeArray.map(function(item) {
      return causeList.push({
        id: item._id,
        value: item.causeName
      });
    });
    this.setState({ causeList });
  };

  // reloadData = () => {
  //   this.setState({
  //     bitLoader: true
  //   });
  //   const { currentPage, pageLimit, category, searchBy, sortBy } = this.state;
  //   getCharityList(currentPage, pageLimit, category, searchBy, sortBy).then(
  //     charitiesArray => {
  //       this.setState({
  //         charityList: charitiesArray[0].data,
  //         totalRecords: charitiesArray[0].total_records,
  //         imageHash: Date.now(),
  //         bitLoader: false,
  //         loading: false
  //       });
  //     }
  //   );
  // };

  onPaginate = (page, currentPage) => {
    const self = this;
    if (page !== currentPage) {
      this.setState({ currentPage: page });
      setTimeout(function() {
        self.reloadData();
      }, intervals.reload);
    }
  };

  handleCategory = newCategory => {
    const self = this;
    const { category } = this.state;
    if (category !== newCategory) {
      this.setState({ category: newCategory, currentPage: 1, searchBy: "" });
      setTimeout(function() {
        self.reloadData();
      }, intervals.reload);
    }
  };

  handleSearch = newSearch => {
    const self = this;
    const { searchBy } = this.state;
    if (searchBy !== newSearch) {
      this.setState({ searchBy: newSearch, category: "", currentPage: 1 });
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

  handlePerPage = event => {
    const self = this;
    event.preventDefault();
    const { pageLimit } = this.state;
    const newPageLimit = event.target.value;
    if (pageLimit !== newPageLimit) {
      this.setState({ pageLimit: parseInt(newPageLimit, 10), currentPage: 1 });
      setTimeout(function() {
        self.reloadData();
      }, intervals.reload);
    }
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

  _renderNoRecords = () => (
    <div className="col-xl-12">
      <div className="card-deck text-dark no-records justify-content-center">
        <div className="row">
          <div className="col-xs-12 ml-auto mr-auto">
            <div className="jumbotron bg-white justify-content-center">
              <img
                className="img-fluid mb-4"
                src="../image/no-records-found.png"
                alt=""
              />
              <h4>{noRecordsFoundConstants.noRecordsFound.title}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  _renderCharityList = () => {
    const { totalRecords, imageHash } = this.state;
    const { categoryList, charityList, causeList } = this.state;
    if (totalRecords === 0) return this._renderNoRecords();
    return (
      <div className="col-xl-12">
        <div className="card-deck text-dark">
          <div className="row">
            <CharityListBox
              categoryList={categoryList}
              charityList={charityList}
              causeList={causeList}
              handleReload={() => this.reloadData()}
              imageHash={imageHash}
            />
          </div>
        </div>
      </div>
    );
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
        <div className="col-xl-3 col-lg-3 col-md-3">
          <div className="show-list d-flex justify-content-xl-end justify-content-lg-end justify-content-md-center justify-content-sm-center justify-content-center">
            <p className="mdm-text mr-3 pt-2 mb-0">Show Items</p>
            <select
              className="bg-white p-2 border-0 rounded"
              onChange={this.handlePerPage}
              value={pageLimit}
            >
              {PageArray.map(page => (
                <option key={page} value={page}>
                  {page}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { categoryList, category } = this.state;
    const { searchBy, sortBy, totalRecords, loading, bitLoader } = this.state;
    return (
      <div
        id="charity-finder"
        className="featured-charities charity-finder pb-5 text-white"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-header fw-300 border-0">
                <SearchForm
                  {...this.props}
                  sortBy={sortBy}
                  searchBy={searchBy}
                  totalRecords={totalRecords}
                  categoryList={categoryList}
                  handleSearch={this.handleSearch}
                  handleCategory={this.handleCategory}
                  handleSortChange={this.handleSortChange}
                  category={category}
                />
              </div>
            </div>
          </div>
          <div className="row custom-load-height">
            {/* {loading || bitLoader
              ? this._renderLoader()
              : this._renderCharityList()} */}              
               {this._renderCharityList()}
          </div>
          {!loading ? this._renderPagination() : null}
        </div>
      </div>
    );
  }
}

CharityList.propTypes = {
  categoryList: PropTypes.array.isRequired,
  causeList: PropTypes.array.isRequired,
  leastList: PropTypes.array.isRequired
};

export default CharityList;

// export default createContainer(() => {
//   Meteor.subscribe("collect_category_list");
//   const categoryList = getCategoryAList();
//   Meteor.subscribe("collect_cause_list");
//   const causeList = getCauseAList();
//   const handle = Meteor.subscribe("collect_charity_list");
//   const leastList = getleastCharityList();
//   const loading = !handle.ready();
//   return {
//     categoryList,
//     causeList,
//     leastList,
//     loading
//   };
// }, CharityList);
