/* 

Component : Slider

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
//import { createContainer } from "meteor/react-meteor-data";
import Button from "@material-ui/core/Button";
import ReactHtmlParser from "react-html-parser";

/** ****************************** Import API's *************************** */
//import { getBannerList } from "/imports/api/lists";

/** ****************************** Import Common Functions  *************************** */
import History from "../../utils/History";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderList: {},
      imageHash: Date.now()
    };
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps) {
      this.setState({
        sliderList: nextProps.sliderList
      });
    }
  };

  // renderNavButton = () => {
  //   const { sliderList } = this.state;
  //   if (Object.keys(sliderList).length === 0) return null;
  //   return Object.keys(sliderList).map(function(item) {
  //     return (
  //       <li
  //         key={`sd${item}`}
  //         data-target="#carouselExampleIndicators"
  //         data-slide-to={item}
  //         className={item === 0 ? `active` : null}
  //       />
  //     );
  //   });
  // };

  // renderSlider = () => {
  //   const { sliderList, imageHash } = this.state;
  //   if (Object.keys(sliderList).length === 0) return null;
  //   return Object.keys(sliderList).map(function(item) {
  //     const currentData = sliderList[item];
  //     let carouselCalss = "carousel-item";
  //     if (item === "0") carouselCalss = "carousel-item slider-item-one active";
  //     return (
  //       <div className={carouselCalss} key={`ss${item}`}>
  //         <div className="row">
  //           {/* Slider Text */}
  //           <div className="col-lg-6 col-xl-6">
  //             <div className="slider-text pl-3">
  //               <h5>{currentData.title}</h5>
  //               <p>{currentData.subTitle}</p>
  //               {ReactHtmlParser(currentData.description)}
  //               <Button
  //                 color="primary"
  //                 variant="contained"
  //                 size="large"
  //                 type="button"
  //                 className="red-bg text-inherit mt-3"
  //                 onClick={() => {
  //                   History.push(currentData.linkUrl);
  //                 }}
  //               >
  //                 {currentData.buttonName}
  //               </Button>
  //             </div>
  //           </div>
  //           {/* Slider Image */}
  //           <div className="col-lg-6 col-xl-6">
  //             <img
  //               src={`/banner/${currentData._id}/view?${imageHash}`}
  //               className="img-fluid"
  //               alt=""
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   });
  // };

  renderSlider = () => {
    return(
      <div className="carousel-item slider-item-one active">
        <div className="row">
          {/* Slider Text */}
          <div className="col-lg-6 col-xl-6">
            <div className="slider-text pl-3 text-left">
              <h5>Smart Giving</h5>
              <p>How True Karma helps you with your Charitable Giving</p>
              <h2>Single portal to capture all of your charitable giving using blockchain technology</h2>
              <Button
                color="primary"
                variant="contained"
                size="large"
                type="button"
                className="red-bg text-inherit mt-3"
                // onClick={() => {
                //   History.push(currentData.linkUrl);
                // }}
              >
                Get Started Free
              </Button>
            </div>
          </div>
          {/* Slider Image */}
          <div className="col-lg-6 col-xl-6">
            <img
              //src={`/banner/${currentData._id}/view?${imageHash}`}
              src="../image/banner/banner1.jpg"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <section className="banner-slider">
        <div className="container">
          <div className="banner-bg">
            <img
              src="image/logo/bglogo-black.svg"
              width="800"
              height="800"
              className="img-fluid"
              alt=""
            />
          </div>
          {/* Slider */}
          <div className="slider">
            <div className="row custom-load-height">
              <div
                id="carouselExampleIndicators"
                className="carousel slide col-xl-12"
                data-ride="carousel"
              >
                {/* Indicators */}
                <ol className="carousel-indicators">
                  {/* {this.renderNavButton()} */}
                </ol>
                {/* The slideshow */}
                <div className="carousel-inner">
                  {this.renderSlider()}
                </div>
              </div>
            </div>
          </div>
          {/* Slider Ends */}
        </div>
      </section>
    );
  }
}

Slider.propTypes = {
  sliderList: PropTypes.array.isRequired
};

export default Slider;

// export default createContainer(() => {
//   const handle = Meteor.subscribe("collect_banner");
//   const sliderList = getBannerList();
//   const loading = !handle.ready();
//   return {
//     sliderList,
//     loading
//   };
// }, Slider);
