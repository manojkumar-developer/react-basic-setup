/*

Header

*/
/** ****************************** Import packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";

/** ****************************** Import Common Functions & API *************************** */
import { saveLocalUser } from "../../utils/auth";
//import { addFavCharity, removeFavCharity } from "/imports/api/users";

/** ****************************** Import Constants *************************** */
import { charityDetailsConstants } from "../../constants/charity-details";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      userData: {},
      favouriteCharity: []
    };
  }

  // componentWillMount = () => {
  //   const userData = Session.get("currentUser");
  //   if (userData) {
  //     const favouriteCharity = userData.favouriteCharity;
  //     this.setState({
  //       userId: userData._id,
  //       userData,
  //       favouriteCharity
  //     });
  //   }
  // };

  // addToMyCharity = charityId => {
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

  // removeFavCharity = charityId => {
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

  displayFavButton = () => {
    const { details } = this.props;
    const { favouriteCharity, userId } = this.state;
    let isFavCharity = false;
    if (
      favouriteCharity.length !== 0 &&
      favouriteCharity.indexOf(details.charityId) !== -1
    ) {
      isFavCharity = true;
    }
    if (!userId) return null;
    return (
      <div>
        <span>
          {isFavCharity ? (
            <span className="orange-bg charity-grid-favouriteicon">
              <i className="text-white fa fa-heart" />
            </span>
          ) : null}
        </span>
        <button
          type="button"
          className={
            !isFavCharity
              ? `btn blue-bg text-white btn-custom btn-border`
              : `d-none`
          }
          onClick={() => this.addToMyCharity(details.charityId)}
        >
          <i className="fa fa-plus text-white mr-2" />
          {charityDetailsConstants.headerButton.title1}
        </button>
        <button
          type="button"
          className={isFavCharity ? `btn btn-custom btn-border` : `d-none`}
          onClick={() => this.removeFavCharity(details.charityId)}
        >
          <i className="fa fa-minus blue mr-1" />
          {charityDetailsConstants.headerButton.title2}
        </button>
      </div>
    );
  };

  render() {
    const { cause, category, details } = this.props;
    const { userId } = this.state;
    return (
      <div className="page-header fw-300">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-transparent mb-1">
            <li className="breadcrumb-item pr-1">
              <a href="#">{charityDetailsConstants.headerTitle.title}</a>
            </li>
            <li className="breadcrumb-item pl-0 active" aria-current="page">
              {details.charityName ? details.charityName : null}
            </li>
          </ol>
        </nav>
        <p className="charity-category">
          <span className="red mr-2">{category || null}</span>
          {cause || null}
        </p>
        <div className="row d-flex align-items-center">
          <div className="col-xl-7 col-md-7">
            <h3 className="fw-300">
              {details.charityName ? details.charityName : null}
            </h3>
          </div>
          <div className="col-xl-1 col-md-1 text-right" />
          <div className="col-xl-4 col-md-4 text-right">
            {userId ? this.displayFavButton() : null}
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  details: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
  cause: PropTypes.string.isRequired,
  handleReload: PropTypes.func.isRequired
};

export default Header;
