/*
   
Component : SearchForm

*/
/** ****************************** Import packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { dripForm } from "react-drip-form";
import { NavLink } from "react-router-dom";

/* ***************************** Import components ************************* */
import TextField from "../../components/FormElements/TextField";

/** ****************************** Import Constants *************************** */
import blogConstants from "../../constants/blog-constants";

/** ****************************** Import APIS *************************** */
import { intervals } from "../../config";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: null
    };
  }

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
    const { sortBy, totalRecords } = this.props;
    return (
      <form autoComplete="off">
        <div className="row d-flex align-items-center">
          <div className="col-xl-6 col-md-4 text-left">
            <h3 className="fw-300 mb-2">{blogConstants.blogPageHeader.title}</h3>
            <p className="mdm-txt mt-2 mb-0 pl-1 fw-400">
              {totalRecords}
              <span className="mr-1 ml-1">{blogConstants.resultSortBy.title}</span>
              <NavLink
                to="#"
                className={sortBy === "name" ? "orange fw-500" : "text-dark"}
                onClick={() => this._handleSortChange("name")}
              >
                {blogConstants.resultSortBy.NameTitle}
              </NavLink>
              {` | `}
              <NavLink
                to="#"
                className={sortBy === "latest" ? "orange fw-500" : "text-dark"}
                onClick={() => this._handleSortChange("latest")}
              >
                {blogConstants.resultSortBy.LatestTitle}
              </NavLink>
            </p>
          </div>
          <div className="col-xl-3 col-md-4 text-center" />
          <div className="col-xl-3 col-md-4 text-center">
            <div className="search-charity-item blog mb-1">
              <div className="input-group add-on">
                <TextField
                  className="form-control bg-white b-ra border search-box"
                  fullWidth
                  id="searchTerm"
                  name="searchTerm"
                  label="Search blogs"
                  placeholder="Search blogs"
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
        </div>
      </form>
    );
  }
}

SearchForm.propTypes = {
  sortBy: PropTypes.string.isRequired,
  totalRecords: PropTypes.number.isRequired,
  handleSortChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired
};

export default dripForm({})(SearchForm);
