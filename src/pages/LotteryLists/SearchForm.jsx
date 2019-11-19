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
import SelectField from "/imports/ui/components/FormElements/SelectField";
import AutoComplete from "/imports/ui/components/FormElements/AutoComplete";

/** ****************************** Import Constants *************************** */
import { charityListConstants } from "/imports/constants/charity-lists";

/** ****************************** Import APIS *************************** */
import { getCharityListByName } from "/imports/api/charities";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  render() {
    const { handlers } = this.props;
    const { sortBy, categoryList, totalRecords } = this.props;
    const { charitySource, selectCategory, searchData } = this.state;
    return (
      <form autoComplete="off" onSubmit={handlers.onSubmit}>
        <div className="row d-flex align-items-center">
          <div className="col-xl-12 col-lg-12">
            <h3 className="mb-0">{"Lottery Lists"}</h3>            
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
