/*

Component : SearchForm

*/
/** ****************************** Import packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import MenuItem from "material-ui/MenuItem";
import { dripForm } from "react-drip-form";
import { NavLink } from "react-router-dom";

/* ***************************** Import components ************************* */
import SelectField from "../../components/FormElements/SelectField";
import TextField from "../../components/FormElements/TextField";

/** ****************************** Import Constants *************************** */
import newsConstants from "../../constants/news-constants";

/** ****************************** Import APIS *************************** */
import { intervals } from "../../config";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: null
    };
  }

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

  _handleSearch = event => {
    const { handleSearch } = this.props;
    const searchData = event.target.value;
    setTimeout(function() {
      handleSearch(searchData);
    }, intervals.reload);
  };

  render() {
    const { sortBy, categoryList, totalRecords } = this.props;
    return (
      <form autoComplete="off">
        <div className="row d-flex align-items-center">
          <div className="col-xl-6 col-lg-6 text-left">
            <h3 className="fw-300 mb-2">{newsConstants.newsPageHeader.title}</h3>
            <p className="mdm-txt mt-2 pl-1 mb-sm-3 mb-lg-0 fw-400">
              {totalRecords}
              <span className="mr-1 ml-1">{newsConstants.resultSortBy.title}</span>
              <NavLink
                to="#"
                className={sortBy === "name" ? "orange fw-500" : "text-dark"}
                onClick={() => this._handleSortChange("name")}
              >
                {newsConstants.resultSortBy.NameTitle}
              </NavLink>
              {` | `}
              <NavLink
                to="#"
                className={sortBy === "latest" ? "orange fw-500" : "text-dark"}
                onClick={() => this._handleSortChange("latest")}
              >
                {newsConstants.resultSortBy.LatestTitle}
              </NavLink>
            </p>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 text-center">
            <div className="search-charity-item news">
              <div className="input-group add-on">
                <TextField
                  className="form-control bg-white width-100 b-ra border search-box"
                  fullWidth
                  id="searchTerm"
                  name="searchTerm"
                  label="Search news"
                  placeholder="Search news"
                  onChange={event => this._handleSearch(event)}
                />
                <div className="input-group-btn">
                  <button
                    type="button"
                    className="btn btn-default bg-transparent"
                    onClick={() => this._handleSubmit()}
                  >
                    <i className="fa fa-search" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 text-right charity-list-select">
            <SelectField
              className="select-input-fields bg-white pl-3 pr-2 b-ra border width-100"
              id="category"
              name="category"
              emptylabel="Select category"              
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
  sortBy: PropTypes.string.isRequired,
  totalRecords: PropTypes.number.isRequired,
  categoryList: PropTypes.array.isRequired,
  handleCategory: PropTypes.func.isRequired,
  handleSortChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired
};

export default dripForm({})(SearchForm);
