/*
   
SearchForm

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import MenuItem from "material-ui/MenuItem";
import { dripForm } from "react-drip-form";
import { NavLink } from "react-router-dom";

/* ***************************** Import Components ************************* */
import SelectField from "../../components/FormElements/SelectField";
import AutoComplete from "../../components/FormElements/AutoComplete";

/** ****************************** Import Constants *************************** */
import { charityListConstants } from "../../constants/charity-lists";

/** ****************************** Import APIS *************************** */
//import { getCharityListByName } from "/imports/api/charities";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charitySource: [],
      searchData: null,
      selectCategory: ""
    };
  }

  // _handleCharity = value => {
  //   getCharityListByName(value).then(charityList => {
  //     const charitySource = [];
  //     Object.keys(charityList).map(function(key) {
  //       charitySource.push(charityList[key].charityName);
  //       return true;
  //     });
  //     this.setState({ searchData: value, charitySource });
  //   });
  // };

  _renderItems = () => {
    const { categoryList } = this.props;
    if (!categoryList) return null;
    return categoryList.map(function(category) {
      return (
        <MenuItem
          key={category._id}
          value={category._id}
          primaryText={category.categoryName}
        />
      );
    });
  };

  _handleCategory = event => {
    const category = event.target.value;
    const { handleCategory } = this.props;
    document.getElementById("searchTerm").value = "";
    handleCategory(category);
  };

  _handleSortChange = sortData => {
    const { handleSortChange } = this.props;
    handleSortChange(sortData);
  };

  _handleSubmit = () => {
    const { handleSearch } = this.props;
    const { searchData } = this.state;
    handleSearch(searchData);
  };

  _handleSearch = searchData => {
    const { handleSearch } = this.props;
    handleSearch(searchData);
  };

  _handleKeyPress = event => {
    const { handleSearch } = this.props;
    const { searchData } = this.state;
    if (event.key === "Enter") {
      handleSearch(searchData);
    }
  };

  render() {
    const { handlers } = this.props;
    const { sortBy, categoryList, totalRecords } = this.props;
    const { charitySource, selectCategory, searchData } = this.state;
    return (
      <form autoComplete="off" onSubmit={handlers.onSubmit}>
        <div className="row d-flex align-items-center">
          <div className="col-xl-4 col-lg-4 text-left">
            <h3 className="fw-300 mb-2">
              {charityListConstants.pageHeader.title}
            </h3>
            <p className="mdm-txt mt-2 pl-1 mb-0 fw-400">
              {totalRecords}
              <span className="mr-1 ml-1">
                {charityListConstants.resultSortBy.title}
              </span>
              <NavLink
                to="#"
                className={sortBy === "rank" ? "orange fw-500" : "text-white"}
                onClick={() => this._handleSortChange("rank")}
              >
                {charityListConstants.resultSortBy.RankTitle}
              </NavLink>
              {" | "}
              <NavLink
                to="#"
                className={sortBy === "latest" ? "orange fw-500" : "text-white"}
                onClick={() => this._handleSortChange("latest")}
              >
                {charityListConstants.resultSortBy.LatestTitle}
              </NavLink>
            </p>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-6 text-center">
            <div className="search-charity-item">
              <div className="input-group add-on">
                <AutoComplete
                  fullWidth
                  style={{ width: "100%", overflowY: "auto" }}
                  className="form-control bg-white b-ra border-0 search-box"
                  name="searchTerm"
                  id="searchTerm"
                  value={searchData}
                  dataSource={charitySource}
                  handleUpdateInput={value => this._handleCharity(value)}
                  onChange={value => this._handleSearch(value)}
                  onKeyPress={this._handleKeyPress}
                  onClick={handlers.onSubmit}
                  label="Search charities"
                  hintText="Search charities"
                />
                <div className="input-group-btn">
                  <button
                    type="button"
                    className="btn btn-default bg-transparent"
                    onClick={this._handleSubmit}
                  >
                    <i className="fa fa-search" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 text-right charity-list-select">
            <SelectField
              className="select-input-fields bg-white pl-3 pr-2 b-ra border-0 width-100"
              id="library"
              name="library"
              emptylabel="Select category"
              value={selectCategory}
              source={categoryList}
              onChange={value => this._handleCategory(value)}
            />
          </div>
        </div>
      </form>
    );
  }
}

SearchForm.propTypes = {
  handlers: PropTypes.object.isRequired,
  sortBy: PropTypes.string.isRequired,
  searchBy: PropTypes.string.isRequired,
  totalRecords: PropTypes.number.isRequired,
  categoryList: PropTypes.array.isRequired,
  handleCategory: PropTypes.func.isRequired,
  handleSortChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired
};

export default dripForm({})(SearchForm);
