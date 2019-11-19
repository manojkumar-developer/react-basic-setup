/*
   
OverAll

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";

/** ****************************** Import Components *************************** */
//import CircleChart from "../../components/CircleChart";

class OverAll extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  isRatingChecked = (rating, ratingData) => {
    const currentRating = ratingData ? ratingData.rating : 0;
    if (rating <= currentRating) {
      return "fa fa-star checked";
    }
    return "fa fa-star";
  };

  _renderProfileImage = (profileImage, charityName, charityId) => {
    let imageUrl = `/charity-images/${charityId}/view`;
    if (profileImage) {
      imageUrl = profileImage;
    }
    return <img className="img-fluid" src={imageUrl} alt={charityName} />;
  };

  render() {
    const { profileImage, charityName, rating, charityId } = this.props;
    const score = rating.score ? parseInt(rating.score, 10) : 0;
    const balanceScore = 100 - score;
    return (
      <div className="charity-details-content">
        <div className="row">
          <div className="col-xl-7 col-lg-7 col-md-7">
            {/* <!-- Image Section --> */}
            <div className="img-section mb-4">
              {this._renderProfileImage(profileImage, charityName, charityId)}
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-5">
            {/* <!-- Score & Rating --> */}
            <div className="score-rating">
              {/* <!-- Graph --> */}
              <div className="rounded-graph relative text-center">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    {/* <CircleChart
                      className="mb-1"
                      ovalues={{
                        name: "Financial",
                        y: score,
                        color: "LightSeaGreen"
                      }}
                      dvalues={{
                        name: "",
                        y: balanceScore,
                        color: "#cccccc"
                      }}
                    /> */}
                    <div className="rounded-graph-content">
                      <h5 className="mb-0">
                        {rating ? `${rating.score}%` : null}
                      </h5>
                      <span className="hide-watermark" />
                    </div>
                    <div className="financial-rating text-center">
                      <h5 className="blue mb-0">
                        {rating ? rating.score : null}
                      </h5>
                      <div className="star-rating">
                        <span className={this.isRatingChecked(1, rating)} />
                        <span className={this.isRatingChecked(2, rating)} />
                        <span className={this.isRatingChecked(3, rating)} />
                        <span className={this.isRatingChecked(4, rating)} />
                        <span className={this.isRatingChecked(5, rating)} />
                      </div>
                      <p className="mb-0">Financial</p>
                    </div>
                  </div>
                  {/* Accountability */}
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    {/* <CircleChart
                      className="mb-1"
                      ovalues={{
                        name: "Accountability & Transparency",
                        y: score,
                        color: "LightSeaGreen"
                      }}
                      dvalues={{
                        name: "",
                        y: balanceScore,
                        color: "#cccccc"
                      }}
                    /> */}
                    <div className="rounded-graph-content">
                      <h5 className="mb-0">
                        {rating ? `${rating.score}%` : null}
                      </h5>
                      <span className="hide-watermark" />
                    </div>
                    <div className="accountability-rating text-center">
                      <h5 className="blue mb-0">
                        {rating ? rating.score : null}
                      </h5>
                      <div className="star-rating">
                        <span className={this.isRatingChecked(1, rating)} />
                        <span className={this.isRatingChecked(2, rating)} />
                        <span className={this.isRatingChecked(3, rating)} />
                        <span className={this.isRatingChecked(4, rating)} />
                        <span className={this.isRatingChecked(5, rating)} />
                      </div>
                      <p className="mb-0">Accountability & Transparency</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Score Rating Bottom --> */}
              {/* <div className="score-rating-bottom mt-4">
                <div className="row mb-1">
                  <div className="col-xl-4">
                    <div className="financial-rating">
                      <p className="mb-0">Financial</p>
                      <h5 className="blue mb-0">
                        {rating ? rating.score : null}
                      </h5>
                      <div className="star-rating">
                        <span className={this.isRatingChecked(1, rating)} />
                        <span className={this.isRatingChecked(2, rating)} />
                        <span className={this.isRatingChecked(3, rating)} />
                        <span className={this.isRatingChecked(4, rating)} />
                        <span className={this.isRatingChecked(5, rating)} />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-8">
                    <div className="accountability-rating">
                      <p className="mb-0">Accountability & Transparency</p>
                      <h5 className="blue mb-0">
                        {rating ? rating.score : null}
                      </h5>
                      <div className="star-rating">
                        <span className={this.isRatingChecked(1, rating)} />
                        <span className={this.isRatingChecked(2, rating)} />
                        <span className={this.isRatingChecked(3, rating)} />
                        <span className={this.isRatingChecked(4, rating)} />
                        <span className={this.isRatingChecked(5, rating)} />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="fw-300 score-rating-bottom-txt">
                  {"This rating was published 08/01/2008 and includes"}
                  {
                    "data from FY2017, the most recent 990 received at that time."
                  }
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

OverAll.defaultProps = {
  profileImage: null,
  charityName: "",
  rating: {},
  charityId: null
};

OverAll.propTypes = {
  profileImage: PropTypes.string,
  charityName: PropTypes.string,
  rating: PropTypes.object,
  charityId: PropTypes.number
};

export default OverAll;
