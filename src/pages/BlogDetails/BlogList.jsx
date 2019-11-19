/*
   
Component : BlogDetailsList

*/
/** ****************************** Import Packages *************************** * */
import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactHtmlParser from "react-html-parser";

/** ****************************** Import Constants *************************** */
import blogConstants from "../../constants/blog-constants";

class BlogList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { details } = this.props;
    return (
      <div className="tip-details-inner border pb-4 pt-4">
        <h4 className="tip-details-title mb-3 fw-600">{details.title}</h4>
        <p className="tip-details-text fw-300 text-justify">
          {ReactHtmlParser(details.description)}
        </p>
        <p className="tip-details-contributors">
          <b className="mr-1">
            {blogConstants.blogDetailsBox.contributorTitle}
          </b>
          {details.contributor}
        </p>
        <p className="tip-details-email">
          <b className="mr-1">{blogConstants.blogDetailsBox.emailTitle}</b>
          {details.email}
        </p>
      </div>
    );
  }
}

BlogList.propTypes = {
  details: PropTypes.object.isRequired
};

export default BlogList;
