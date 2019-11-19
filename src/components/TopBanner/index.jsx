/* 

Component : TopBanner

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
//import { createContainer } from "meteor/react-meteor-data";
import LinesEllipsis from "react-lines-ellipsis";
import Slider from "react-slick";

/** ****************************** Import API's *************************** */
// import { getEventAdList } from "/imports/api/events";

/** ****************************** Import Constants *************************** */
import { DonateAdConstants } from "../../constants/common-constants";

/** ****************************** Import Functions *************************** */
import History from "../../utils/History";

class TopBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: null,
      bannerList: []
    };
  }

  componentWillMount() {
    const path = window.location.pathname;
    if (path) {
      this.setState({ path });
    }
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps) {
      this.setState({
        bannerList: nextProps.bannerList
      });
    }
  };

  gotoCharityList = () => {
    History.push("/charity/list");
  };

  displayAd = () => {
    const { bannerList } = this.state;
    
    if (bannerList && bannerList.length === 0) return null;
    return bannerList.map(function(item) {
      return (
        <div key={item._id}>
          <div className="top-banner-content pt-3 pb-3 border-0 bg-transparent text-white">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3">
                <img
                  src={`/event-ad/${item._id}/view`}
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h3 className="card-title mt-0">{item.title}</h3>
                <LinesEllipsis
                  className="card-text text-grey text-justify mt-0 mb-3 fw-100"
                  text={item.summary}
                  maxLine="5"
                  ellipsis="..."
                  trimRight
                  basedOn="letters"
                />
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 vertical-align-middle vertical-align-middle-md justify-content-center mb-3">
                <a
                  className="red-bg btn-box-shadow btn btn-custom text-inherit text-white top-banner-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`/donate-event/${item._id}`}
                >
                  {DonateAdConstants.topBannerAd.btnText}
                </a>              
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000
    };
    const { path } = this.state;
    if (path !== "/") {
      return null;
    }
    return (
      <div className="top-banner border-0">
        <div className="container relative">
          <div className="collapsed">
            <div className="slick-slider">
              <Slider {...settings}>{this.displayAd()}</Slider>
            </div>
            <div className="collapse-close-btn">
              <button
                type="button"
                className="close text-white"
                data-toggle="collapsed"
                data-target=".collapsed"
                aria-label="Close"
              >
                <span className="top-banner-close" aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopBanner;

// export default createContainer(() => {
//   const handle = Meteor.subscribe("collect_banner_ads");
//   const bannerList = getEventAdList();
//   const loading = !handle.ready();
//   return {
//     bannerList,
//     loading
//   };
// }, TopBanner);
