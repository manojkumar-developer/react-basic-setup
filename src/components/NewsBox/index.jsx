/*
   
NewsBox

*/
/** ****************************** Import packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";

class NewsBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _renderProfileImage = (profileImage, charityName) => {
    let imageUrl = "/image/charity-profile/default.png";
    if (profileImage) {
      imageUrl = profileImage;
    }
    return <img className="card-img-top" src={imageUrl} alt={charityName} />;
  };

  render() {
    const { charityData } = this.props;
    return (
      <div className="news-items text-dark mb-5">
        <div className="row">
          <div className="col-xl-5">
            <div className="news-image">
              {this._renderProfileImage(
                charityData.imageUrl,
                charityData.charityName
              )}
            </div>
          </div>
          <div className="col-xl-7">
            <div className="card-body p-0">
              <h4 className="card-title">{charityData.charityName}</h4>
              <p className="card-text fw-300 lh-mdm">
                {"By combining elegantly simple online interfaces"}
                {
                  "with robust donation processing, volunteer tracking and report features, we"
                }
                {
                  "make  powerful capabilities a joy to use. And because Spark meets WCAG 2.0 AA"
                }
                {
                  "standards, it ensures a delightful experience for all users. Single portal to"
                }
                {"capture using blockchain technology."}
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

NewsBox.defaultProps = {
  charityData: {}
};

NewsBox.propTypes = {
  charityData: PropTypes.object
};

export default NewsBox;
