/*
   Features
*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { HashLoader } from "react-spinners";

/** ****************************** Import SubClasses *************************** */
import CharityListBox from "./CharityListBox";

/** ****************************** Import Constants *************************** */
import { FeaturedConstants } from "../../constants/common-constants";

/** ****************************** Import APIS *************************** */
//import { getCategoryList, getCauseList } from "/imports/api/lists";
//import { getFeaturedList } from "/imports/api/charities";

export const PageArray = [9, 15, 45, 90];

class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charityList: [],
      categoryArray: [],
      causeArray: []
    };
  }

  // componentWillMount() {
  //   this.loadCause();
  //   this.loadCategory();
  //   this.reloadData();
  // }

  // loadCategory = () => {
  //   // get data from APIs
  //   getCategoryList().then(categoryList => {
  //     const categoryArray = [];
  //     categoryList.map(function(item) {
  //       return categoryArray.push({
  //         id: item._id,
  //         value: item.categoryName
  //       });
  //     });
  //     this.setState({ categoryArray });
  //   });
  // };

  // loadCause = () => {
  //   // get data from APIs`
  //   getCauseList().then(causeList => {
  //     const causeArray = [];
  //     causeList.map(function(item) {
  //       return causeArray.push({
  //         id: item._id,
  //         value: item.causeName
  //       });
  //     });
  //     this.setState({ causeArray });
  //   });
  // };

  // reloadData = () => {
  //   this.setState({ bitLoader: true });
  //   getFeaturedList().then(charitiesArray => {
  //     this.setState({
  //       charityList: charitiesArray[0].data,
  //       bitLoader: false,
  //       loading: false
  //     });
  //   });
  // };

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

  _renderCharityList = () => {
    const { totalRecords } = this.state;
    const { charityList, categoryArray, causeArray } = this.state;
    if (totalRecords === 0) return this._renderNoRecords();
    return (
      <div className="col-xl-12">
        <div className="card-deck text-dark">
          <div className="row">
            <CharityListBox
              categoryList={categoryArray}
              charityList={charityList}
              causeList={causeArray}
              handleReload={() => this.reloadData()}
            />
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { charityList, loading, bitLoader } = this.state;
    if (!charityList) return null;
    return (
      <div className="featured-charities pt-5 pb-5 text-white">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title pt-4 text-center">
                <h2>{FeaturedConstants.section.title}</h2>
                <p>{FeaturedConstants.section.text}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="card-deck text-dark pb-3">
                <div className="row">
                  {/* {loading || bitLoader
                    ? this._renderLoader()
                    : this._renderCharityList()} */}

                    {this._renderCharityList()}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Features);
