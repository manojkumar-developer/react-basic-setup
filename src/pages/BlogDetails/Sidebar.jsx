/*

Component : Blog Details Sidebar

*/
/** ****************************** Import packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
/** ****************************** Import Common Functions ****************** */
import { displayDate } from "../../utils/common";
import History from "../../utils/History";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goBlogDetails = itemId => {
    History.push(`/blog/${itemId}`);
  };

  render() {
    const self = this;
    const { dataList } = this.props;
    return dataList.map(function(item) {
      return (
        <div className="right-sidebar" key={item._id}>
          <Link
            to="#"
            onClick={() => self.goBlogDetails(item._id)}
            className="text-dark"
          >
            <div className="tips-sidebar">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="latest-news">
                    <h5 className="mb-3 border-bottom pb-2 mb-2">
                      {item.title}
                    </h5>
                    <div className="d-flex">
                      <div className="latest-details d-flex flex-column">
                        <a className="mb-1 text-dark" href="#">
                          <b>{item.contributor}</b>
                        </a>
                        <span className="mdm-txt text-muted">
                          {displayDate(item.createdAt)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    });
  }
}

Sidebar.propTypes = {
  dataList: PropTypes.array.isRequired
};

export default Sidebar;
