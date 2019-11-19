/*

Footer

*/
/** ****************************** Import packages *************************** */
import React, { Component } from "react";
//import { createContainer } from "meteor/react-meteor-data";
import { NavLink } from "react-router-dom";

/** ****************************** Import Constants *************************** */
import FooterConstants from "../constants/footer";
import { FilePath, footerLogo } from "../constants/folder";

/** ****************************** Import Components ************************** */
import TermsModal from "../components/Modals/TermsModal";
import PrivacyModal from "../components/Modals/PrivacyModal";

/** ****************************** Import API's *************************** */
//import { getLeastNews } from "/imports/api/charity-news";

const fileUrl = FilePath["footer-logo"] + footerLogo.name;

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      termsModal: false,
      privacyModal: false,
      newsList: {}
    };
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps && nextProps.newsList) {
      const newsList = nextProps.newsList;
      this.setState({
        newsList
      });
    }
  };

  openTermsModal = () => {
    this.setState({ termsModal: true, privacyModal: false });
  };

  openPrivacyModal = () => {
    this.setState({ privacyModal: true, termsModal: false });
  };

  closeModal = () => {
    this.setState({ termsModal: false, privacyModal: false });
  };

  closeModal = () => {
    this.setState({
      termsModal: false,
      privacyModal: false
    });
  };

  renderNews = () => {
    const { newsList } = this.state;
    if (Object.keys(newsList).lenght === 0) return null;
    return Object.keys(newsList).map(function(key) {
      const data = newsList[key];
      return (
        <li key={key}>
          <a
            href={data.importUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="news-title"
          >
            {data.title}
          </a>
          <p className="mdm-txt news-content mt-2 mr-4">{data.description}</p>
        </li>
      );
    });
  };

  render() {
    const { termsModal, privacyModal } = this.state;
    return (
      <footer className="footer text-left">
        <div className="footer-bg">
          <img
            src="/image/logo/bglogo-white.svg"
            width="280"
            height="600"
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="footer-logo">
                <NavLink className="navbar-brand" to="/">
                  <img
                    className="img-fluid"
                    src={fileUrl}
                    width="300"
                    height="70"
                    alt="footer logo"
                  />
                </NavLink>
              </div>
            </div>
          </div>
          {/* Copyright */}
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                {/* Quick Links */}
                <div className="col-xl-8 col-lg-8 col-md-12">
                  <div className="footer-links">
                    <ul className="pl-0 mb-0 mt-3">
                      <li>
                        <NavLink
                          to="/"
                          className="nav-link p-0"
                          activeclassname="active"
                        >
                          {FooterConstants.footerLinks.link1}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/news"
                          className="nav-link p-0"
                          activeclassname="active"
                        >
                          {FooterConstants.footerLinks.link2}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/charity/list"
                          className="nav-link p-0"
                          activeclassname="active"
                        >
                          {FooterConstants.footerLinks.link3}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/FAQ"
                          className="nav-link p-0"
                          activeclassname="active"
                        >
                          {FooterConstants.footerLinks.link5}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/contact"
                          className="nav-link p-0"
                          activeclassname="active"
                        >
                          {FooterConstants.footerLinks.link6}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="#"
                          className="p-0"
                          activeclassname="active"
                          onClick={() => this.openPrivacyModal()}
                        >
                          {FooterConstants.copyright.link1}
                        </NavLink>
                        <PrivacyModal
                          openModal={privacyModal}
                          closeModal={() => this.closeModal()}
                        />
                      </li>
                      <li className="mr-0">
                        <NavLink
                          to="#"
                          className="p-0"
                          activeclassname="active"
                          onClick={() => this.openTermsModal()}
                        >
                          {FooterConstants.copyright.link2}
                        </NavLink>
                        <TermsModal
                          openModal={termsModal}
                          closeModal={() => this.closeModal()}
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-12">
                  <div className="social-icons text-center">
                    <li className="mb-0">
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li className="mr-0 mb-0">
                      <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li className="ml-3 mb-0">
                      <a
                        href="https://telegram.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-telegram" />
                      </a>
                    </li>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-12">
                  <div className="copyright text-center">
                    <span>
                      <i className="fa fa-copyright mr-1" />
                      {FooterConstants.copyright.text}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

// export default createContainer(() => {
//   const handle = Meteor.subscribe("collect_news_details");
//   const newsList = getLeastNews();
//   const loading = !handle.ready();
//   return {
//     newsList,
//     loading
//   };
// }, Footer);
