/*
   
CharityDetails

*/
/** ****************************** Import packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

/** ****************************** Import SubClasses *************************** */
import Header from "./Header";
import SideBar from "./SideBar";
import OverAll from "./OverAll";
import IRSDetails from "./IRSDetails";

/** ****************************** Import APIS *************************** */
// import { getCategoryList, getCauseList } from "/imports/api/lists";
// import { getCharityById } from "/imports/api/charities";

/** ****************************** Import Constants *************************** * */
import { charityDetailsConstants } from "../../constants/charity-details";
import noRecordsFoundConstants from "../../constants/no-records-found";

class CharityDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      categoryList: [],
      causeList: [],
      isNoCharity: false
    };
  }

  componentWillMount() {
    this.loadCause();
    this.loadCategory();
    this.reloadData();
  }

  // loadCategory = () => {
  //   // get data from APIs
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

  // loadCause = () => {
  //   // get data from APIs`
  //   getCauseList().then(causeArray => {
  //     const causeList = [];
  //     causeArray.map(function(item) {
  //       return causeList.push({
  //         id: item._id,
  //         value: item.causeName
  //       });
  //     });
  //     this.setState({ causeList });
  //   });
  // };

  // reloadData = () => {
  //   const {
  //     match: {
  //       params: { id }
  //     }
  //   } = this.props;
  //   // get data from APIs
  //   getCharityById(id)
  //     .then(data => {
  //       this.setState({ data });
  //     })
  //     .catch(error => {
  //       if (error) {
  //         this.setState({ isNoCharity: true });
  //       }
  //     });
  // };

  renderCharityData = () => {
    const { data, categoryList, causeList } = this.state;
    const isCategory = categoryList.find(obj => obj.id === data.category);
    const isCause = causeList.find(obj => obj.id === data.cause);
    const category = isCategory ? isCategory.value : "";
    const cause = isCause ? isCause.value : "";
    if (data.length === 0) return null;
    return (
      <div className="main-wrapper">
        <div className="charity-details-section">
          <div className="container">
            <div className="row">
              {/* <!-- Left Sidebar --> */}
              <div className="col-xl-3 col-lg-3">
                <SideBar details={data} />
              </div>
              {/* <!-- Right Content --> */}
              <div className="col-xl-9 col-lg-9">
                <div className="right-content">
                  {/* <!-- Page Header --> */}
                  <Header
                    details={data}
                    category={category}
                    cause={cause}
                    handleReload={() => this.reloadData()}
                  />
                  {/* <!-- Charity Details --> */}
                  <div
                    id="score"
                    className="over_all charity-details-menu-link"
                  >
                    <h4 className="fw-500 pt-4">
                      {charityDetailsConstants.tableofContents.title1}
                    </h4>
                    <OverAll
                      profileImage={data.imageUrl}
                      charityName={data.charityName}
                      rating={data.currentRating}
                      charityId={data.charityId}
                    />
                  </div>
                  {/* <!-- Mission --> */}
                  <div
                    id="mission"
                    className={
                      data.mission
                        ? `charity-details-mission charity-details-menu-link`
                        : `d-none`
                    }
                  >
                    <h4 className="fw-500">
                      {charityDetailsConstants.tableofContents.title2}
                    </h4>
                    <p className="fw-300 mt-4">
                      {data.mission ? data.mission : null}
                    </p>
                  </div>
                  <div
                    id="irs"
                    className="charity-details-irs-details charity-details-menu-link pt-5 pb-5"
                  >
                    <h4 className="fw-500">
                      {charityDetailsConstants.tableofContents.title3}
                    </h4>
                    <IRSDetails
                      charityName={data.charityName}
                      ein={data.ein}
                      details={data.irsClassification}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  renderNoRecords = () => {
    const { totalRecords } = this.state;
    if (totalRecords !== 0) return null;
    return (
      <div className="card-deck text-dark justify-content-center">
        <div className="row">
          <div className="col-xs-12 ml-auto mr-auto">
            <div className="jumbotron justify-content-center">
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
    );
  };

  render() {
    const { isNoCharity } = this.state;
    return !isNoCharity ? this.renderCharityData() : this.renderNoRecords();
  }
}

CharityDetails.defaultProps = {
  match: {}
};

CharityDetails.propTypes = {
  match: PropTypes.object
};

export default withRouter(CharityDetails);
