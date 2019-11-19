/*
   
GridBox

*/
/** ****************************** Import packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";
import PreloadImage from "react-preload-image";

/** ****************************** Import API's *************************** */
//import { addFavCharity, removeFavCharity } from "/imports/api/users";

/** ****************************** Import Constanst *************************** */
import { Bgcolors, colors } from "../../constants/charity-details";
import { charityGridBoxConstants } from "../../constants/charity-lists";
/** ****************************** Import Utils *************************** */
import { getLocalUser, saveLocalUser } from "../../utils/auth";

class GridBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      userData: {},
      favouriteCharity: []
    };
  }

  componentWillMount = () => {
    this.loadUserData();
  };

  componentWillReceiveProps = () => {
    this.loadUserData();
  };

  loadUserData = () => {
    const userData = getLocalUser();
    if (userData) {
      const favouriteCharity = userData.favouriteCharity;
      this.setState({
        userId: userData._id,
        userData,
        favouriteCharity
      });
    }
  };

  _renderLocation = locationData => {
    let locationDetails = "";
    if (locationData) {
      locationDetails = locationData.city ? `${locationData.city}, ` : "";
      locationDetails += `,${locationData.state}` ? locationData.state : "";
    }
    return (
      <p className="card-text location-text">
        <small className="text-muted">{charityGridBoxConstants.listsGridBox.locationText}</small>
        <span className="text-dark ml-1 mr-1">{`:`}</span>
        <span className="text-dark">{locationDetails}</span>
      </p>
    );
  };

  _renderCauseDeatails = causeData => {
    const { causeList } = this.props;
    const cause = causeList.find(obj => obj.id === causeData);
    if (!cause) return null;
    return (
      <p className="card-text cause-text">
        <small className="text-muted">{charityGridBoxConstants.listsGridBox.causeText}</small>
        <span className="text-dark ml-1 mr-1">{`:`}</span>
        <span className="text-dark">{cause ? cause.value : null}</span>
      </p>
    );
  };

  _isRatingChecked = (rating, radtingData) => {
    const currentRating = radtingData ? radtingData.rating : 0;
    if (rating <= currentRating) {
      return "fa fa-star checked";
    }
    return "fa fa-star";
  };

  _renderRank = rank => {
    if (rank === 100000) return null;
    const currentBgColor =
      Bgcolors[Math.floor(Math.random() * Bgcolors.length)];
    return (
      <span className={`order-number ${currentBgColor}`}>
        {"#"}
        {rank}
      </span>
    );
  };

  _renderCategory = () => {
    const { charityData, categoryList } = this.props;
    const category = categoryList.find(obj => obj.id === charityData.category);
    const currentColor = colors[Math.floor(Math.random() * colors.length)];
    return (
      <h6 className={`card-sub-title ${currentColor}`}>
        {category ? category.value : null}
      </h6>
    );
  };

  // _addToMyCharity = charityId => {
  //   const { userId, userData, favouriteCharity } = this.state;
  //   const { handleReload } = this.props;
  //   addFavCharity(userId, charityId)
  //     .then(result => {
  //       if (result) {
  //         favouriteCharity.push(charityId);
  //         userData.favouriteCharity = favouriteCharity;
  //         saveLocalUser(userData);
  //         handleReload();
  //       }
  //     })
  //     .catch(error => {
  //       if (error) {
  //         console.log(error);
  //       }
  //     });
  // };

  // _removeFavCharity = charityId => {
  //   const { userData, userId, favouriteCharity } = this.state;
  //   const { handleReload } = this.props;
  //   const index = favouriteCharity.indexOf(charityId);
  //   removeFavCharity(userId, index)
  //     .then(result => {
  //       if (result) {
  //         favouriteCharity.splice(index, 1);
  //         userData.favouriteCharity = favouriteCharity;
  //         saveLocalUser(userData);
  //         handleReload();
  //       }
  //     })
  //     .catch(error => {
  //       if (error) {
  //         console.log(error);
  //       }
  //     });
  // };

  _renderMoreDetails = isFavCharity => {
    const { charityData } = this.props;
    return (
      <div className="grid-more dropdown">
        <Link
          to=""
          id="grid-more"
          className="dropdown-toggle"
          data-toggle="dropdown"
          role="button"
        >
          <img
            src="/image/icons/more-black.svg"
            height="20"
            width="20"
            alt=""
          />
        </Link>
        <ul className="dropdown-menu">
          <small className="text-muted">
            {charityGridBoxConstants.listsGridBox.moreOptionLink}
          </small>
          <li className={isFavCharity ? `d-none` : `pt-2`}>
            <NavLink
              to="#"
              role="presentation"
              onClick={() => this._addToMyCharity(charityData.charityId)}
            >
              {charityGridBoxConstants.listsGridBox.addToCharitiesText}
            </NavLink>
          </li>
          <li className={!isFavCharity ? `d-none` : `pt-2`}>
            <NavLink
              to="#"
              role="presentation"
              onClick={() => this._removeFavCharity(charityData.charityId)}
            >              
              {charityGridBoxConstants.listsGridBox.removeFromCharitiesText}
            </NavLink>
          </li>
        </ul>
      </div>
    );
  };

  render() {
    const { charityData, categoryList, imageHash } = this.props;
    const { userId, favouriteCharity } = this.state;
    const category = categoryList.find(obj => obj.id === charityData.category);
    const charityId = charityData.charityId;
    let isFavCharity = false;
    if (favouriteCharity !== 0 && favouriteCharity.indexOf(charityId) !== -1) {
      isFavCharity = true;
    }
    return (
      <div className="card hover-charity-box-shadow" role="presentation">
        <NavLink
          to={`/charity/${charityId}`}
          className="img-link charity-list-nav-link"
        >
          <PreloadImage
            className="card-img-top"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            }}
            src={`/charity-images/${charityData.charityId}/view?${imageHash}`}
            alt={charityData.charityName}
          />
        </NavLink>
        <div className="card-body">
          <span>
            {isFavCharity ? (
              <span className="orange-bg charity-grid-favouriteicon">
                <i className="text-white fa fa-heart" />
              </span>
            ) : null}
          </span>
          {this._renderRank(charityData.rank)}
          {this._renderCategory(category.value)}
          {/* <h6 className="card-sub-title purple">
            {category ? category.value : null}
          </h6> */}
          <h5 className="card-title text-dark">
            <NavLink
              className="text-dark charity-list-nav-link"
              to={`/charity/${charityId}`}
            >
              {charityData.charityName}
            </NavLink>
          </h5>
          {userId ? this._renderMoreDetails(isFavCharity) : null}
          <div className="star-rating">
            <span
              className={this._isRatingChecked(1, charityData.currentRating)}
            />
            <span
              className={this._isRatingChecked(2, charityData.currentRating)}
            />
            <span
              className={this._isRatingChecked(3, charityData.currentRating)}
            />
            <span
              className={this._isRatingChecked(4, charityData.currentRating)}
            />
            <span
              className={this._isRatingChecked(5, charityData.currentRating)}
            />
          </div>
          {this._renderLocation(charityData.mailingAddress)}
          {this._renderCauseDeatails(charityData.cause)}
        </div>
      </div>
    );
  }
}

GridBox.propTypes = {
  charityData: PropTypes.object.isRequired,
  categoryList: PropTypes.array.isRequired,
  causeList: PropTypes.array.isRequired,
  imageHash: PropTypes.number.isRequired,
  handleReload: PropTypes.func.isRequired
};

export default GridBox;
