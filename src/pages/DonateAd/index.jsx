/*

Component : DonateAd

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
//import { createContainer } from "meteor/react-meteor-data";
import { HashLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/** ****************************** Import Subclass *************************** */
import Details from "./Details";

/** ****************************** Import SubClasses *************************** */
// import { getEventAdById, getEventAdList } from "/imports/api/events";
// import { getConfiguration } from "/imports/api/lists";

class DonateAd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerData: {},
      bannerList: {},
      configuration: {},
      loading: true,
      submitting: false,
    };
  }

  // componentWillMount = () => {
  //   const {
  //     match: { params }
  //   } = this.props;
  //   if (params && params.id) {
  //     this.getBannerData(params.id);
  //   }
  // };

  componentWillReceiveProps = nextprops => {
    if (nextprops) {
      const params = nextprops.match.params;
      const bannerId = params ? params.id : null;
      const configuration = nextprops.configuration;
      const bannerList = nextprops.bannerList;
      if (bannerId) {
        this.getBannerData(bannerId);
      }
      if (configuration) {
        this.setState({ configuration, bannerList });
      }
    }
  };

  handleInitialize = form => {
    this.form = form;
  };

  // getBannerData = adId => {
  //   getEventAdById(adId).then(bannerData => {
  //     if (bannerData) {
  //       this.setState({
  //         bannerData,
  //         loading: false
  //       });
  //     }
  //   });
  // };

  _renderLoader = () => {
    const { loading } = this.state;
    return (
      <div className="card-deck text-dark loader-box justify-content-center">
        <div className="row">
          <div className="col-xs-12 ml-auto mr-auto">
            <div className="jumbotron justify-content-center">
              <HashLoader color="#57B1FB" loading={loading} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { loading, bannerData, configuration, bannerList } = this.state;
    return (
      <div className="banner-ad-page pt-5 pb-5">
        <div className="container">
          {loading ? (
            this._renderLoader()
          ) : (
            <Details
              details={bannerData}
              configuration={configuration}
              list={bannerList}
            />
          )}
        </div>
        {/* Msg Notification Box */}
        <ToastContainer autoClose={2500} />
      </div>
    );
  }
}

DonateAd.propTypes = {
  match: PropTypes.object.isRequired
};

export default DonateAd;

// export default createContainer(() => {
//   Meteor.subscribe("collect_banner_ads");
//   Meteor.subscribe("collect_configuration");
//   const bannerList = getEventAdList();
//   const configuration = getConfiguration();
//   return {
//     bannerList,
//     configuration
//   };
// }, DonateAd);
