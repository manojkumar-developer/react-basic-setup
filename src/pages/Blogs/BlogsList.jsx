/*
   
Component : BlogsList

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";
import LinesEllipsis from "react-lines-ellipsis";

/** ****************************** Import Constants *************************** */
import blogConstants from "../../constants/blog-constants";
import noRecordsFoundConstants from "../../constants/no-records-found";

/** ****************************** Import Common Functions ****************** */
import { displayDateTime, displayTime } from "../../utils/common";
import History from "../../utils/History";

class BlogsList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderUrl = (learnMore, itemId) => {
    if (!learnMore) return null;
    return (
      <NavLink to={`/blog/${itemId}`}>
        {blogConstants.blogDetailsBox.readMoreTitle}
      </NavLink>
    );
  };

  renderEmail = email => {
    if (!email) return null;
    return (
      <span>
        {` Email to : `}
        <a href={`mailto:${email}`} target="_top">
          {email}
        </a>
      </span>
    );
  };

  renderNoRecords = () => (
    <div className="col-xl-12">
      <div className="card-deck text-dark no-records justify-content-center">
        <div className="row">
          <div className="col-xs-12 ml-auto mr-auto">
            <div className="jumbotron justify-content-center">
              <img
                className="img-fluid mb-4"
                src="../image/no-records-found.png"
                alt=""
              />
              <h4>{noRecordsFoundConstants.noRecordsFound.title}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  goBlogDetails = blogId => {
    History.push(`/blog/${blogId}`);
  };

  render() {
    const self = this;
    const { dataList, totalRecords } = this.props;
    if (totalRecords === 0) return this.renderNoRecords();
    return dataList.map(function(item) {
      return (
        <div key={item._id} className="col-xl-6 col-lg-6 col-md-6">
          <div className="news-items blog-items hover-box-shadow bg-white border p-3 text-dark mb-4">
            <div className="row">
              <div role="presentation" className="col-xl-12">
                <Link
                  to="#"
                  onClick={() => self.goBlogDetails(item._id)}
                  className="text-dark"
                >
                  <div className="card-body p-0">
                    <Link
                      to="#"
                      onClick={() => self.goBlogDetails(item._id)}
                      className="text-dark"
                    >
                      <h5 className="card-title">
                        <LinesEllipsis
                          className="card-title mb-2 fw-500"
                          text={item.title}
                          maxLine="2"
                          ellipsis="..."
                          trimRight
                          basedOn="letters"
                        />
                      </h5>
                    </Link>
                    <LinesEllipsis
                      className="card-text fw-300 lh-mdm fs-16 mb-2"
                      text={item.summary}
                      maxLine="2"
                      ellipsis="..."
                      trimRight
                      basedOn="letters"
                    />
                    <p>
                      {!item.learnMore ? self.renderEmail(item.email) : null}
                    </p>
                    <span className="text-italic mr-2">
                      <i className="fa fa-calendar mr-2 blue" />
                      {displayDateTime(item.createdAt)}
                    </span>
                    <span className="text-italic">
                      <i className="fa fa-clock-o mr-1 blue" />
                      {displayTime(item.createdAt)}
                    </span>
                    <span className="pull-right">
                      {self.renderUrl(item.learnMore, item._id)}
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
}

BlogsList.propTypes = {
  dataList: PropTypes.array.isRequired,
  totalRecords: PropTypes.number.isRequired
};

export default BlogsList;
