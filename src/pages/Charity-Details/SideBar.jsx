/*

SideBar

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";

/** ****************************** Import Constants *************************** */
import { SideMenuConstants } from "../../constants/charity-details";
import { charityDetailsConstants } from "../../constants/charity-details";
import { displayEin } from "../../utils/common";
import { displayPhone } from "../../utils/common";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderAddress = address => {
    if (!address) return null;
    return (
      <span>
        {address.streetAddress1 ? address.streetAddress1 : null}
        {address.streetAddress1 ? <br /> : null}
        {address.streetAddress2 ? address.streetAddress2 : null}
        {address.streetAddress2 ? <br /> : null}
        {address.city ? `${address.city}, ` : null}
        {address.state ? `${address.state} ` : null}
        {address.zipcode ? `${address.zipcode}. ` : null}
      </span>
    );
  };

  renderWebAddress = webUrl => {
    if (!webUrl || webUrl === null) return null;
    return (
      <a
        className="back-to-site font-italic"
        rel="noopener noreferrer"
        target="_blank"
        href={webUrl}
      >
        {`Visit website`}
      </a>
    );
  };

  renderChair = boardData => {
    if (!boardData) return null;
    const keyValue = Object.keys(boardData).find(
      key => boardData[key].title === "chairman"
    );
    const chairData = boardData[keyValue];
    return (
      <div className="charity-board-name">
        <div className="card mb-3">
          <div className="card-header">
            <h5 className="mb-0">
              {charityDetailsConstants.sidebarBox.box2Title}
            </h5>
          </div>
          <div className="card-body">
            <p className="card-title">{chairData ? chairData.name : null}</p>
            <small className="text-capitalize font-italic">
              {chairData ? chairData.title : null}
            </small>
          </div>
        </div>
      </div>
    );
  };

  renderCEO = boardData => {
    if (!boardData) return null;
    const keyValue = Object.keys(boardData).find(
      key => boardData[key].title === "ceo"
    );
    const ceoData = boardData[keyValue];
    return (
      <div className="charity-board-name">
        <div className="card mb-3">
          <div className="card-header">
            <h5 className="mb-0">
              {charityDetailsConstants.sidebarBox.box3Title}
            </h5>
          </div>
          <div className="card-body">
            <p className="card-title">{ceoData ? ceoData.name : null}</p>
            <small className="text-capitalize font-italic">
              {ceoData ? ceoData.title : null}
            </small>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { details } = this.props;
    return (
      <div className="left-sidebar sticky-top mb-3">
        {/* <!-- Charity Contact Info starts--> */}
        <div className="charity-contact-info">
          <div className="card mb-3">
            <div className="card-header">
              <h5 className="mb-0">
                {charityDetailsConstants.sidebarBox.box1Title}
              </h5>
            </div>
            <div className="card-body">
              <p className="card-text mb-1">
                {this.renderAddress(details.mailingAddress)}
                {details.displayPhone ? <br /> : null}
                {details.displayPhone
                  ? `tel: ${displayPhone(details.phoneNumber)}`
                  : null}
                {details.ein ? <br /> : null}
                {details.ein ? `EIN: ${displayEin(details.ein)}` : null}
              </p>
              {this.renderWebAddress(details.websiteURL)}
            </div>
          </div>
        </div>
        {/* <!-- Charity Contact Info Ends--> */}
        {details.currentBoard ? this.renderChair(details.currentBoard) : null}
        {details.currentBoard ? this.renderCEO(details.currentBoard) : null}
        {/* <!-- Charity Contact Info --> */}
        <div className="charity-rating-profile">
          <div className="card mb-3">
            <div className="card-header">
              <h5 className="mb-0">
                {charityDetailsConstants.sidebarBox.box4Title}
              </h5>
            </div>
            <div className="card-body">
              <ul className="list-item-style text-dark mb-0">
                {SideMenuConstants.map(function(menu) {
                  return (
                    <li key={menu.id}>
                      <a href={`#${menu.id}`} className="scroll-side-menu">
                        {menu.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SideBar.defaultProps = {
  details: {}
};

SideBar.propTypes = {
  details: PropTypes.object
};

export default SideBar;
