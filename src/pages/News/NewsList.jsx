/*

Component : NewsList

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import LinesEllipsis from "react-lines-ellipsis";

/** ****************************** Import Constants and Common Functions *************************** */
import { displayDateTime, displayTime } from "../../utils/common";
import noRecordsFoundConstants from "../../constants/no-records-found";

class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderUrl = importUrl => {
    if (!importUrl) return null;
    return (
      <a href={importUrl} rel="noopener noreferrer" target="_blank">
        {"Read More"}
      </a>
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

  render() {
    const self = this;
    const { dataList, totalRecords } = this.props;
    if (totalRecords === 0) return this.renderNoRecords();
    return dataList.map(function(item) {
      return (
        <div key={item._id} className="col-xl-6 col-md-4 col-sm-12">
          <div className="news-items bg-white border hover-box-shadow p-3 text-dark mb-4">
            <a
              href={item.importUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="row">
                <div className="col-xl-4 col-md-12 pr-0 res-pr-2">
                  {/* News Image */}
                  <div className="news-image">
                    <a
                      href={item.importUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img
                        className="img-fluid news-list-img"
                        src={`/news-images/${item._id}/view`}
                        alt="listImage"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-xl-8 col-md-12">
                  <div className="card-body p-0">
                    {/* Imprt URL & Title */}
                    <a
                      href={item.importUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark"
                    >
                      <h5 className="card-title mb-2">
                        <LinesEllipsis
                          className="card-title news-item-title mb-1 fw-500"
                          text={item.title}
                          maxLine="2"
                          ellipsis="..."
                          trimRight
                          basedOn="letters"
                        />
                      </h5>
                    </a>
                    {/* Description */}
                    <LinesEllipsis
                      className="card-text text-dark text-justify fw-300 lh-mdm fs-16 mb-2"
                      text={item.description}
                      maxLine="2"
                      ellipsis="..."
                      trimRight
                      basedOn="letters"
                    />
                    {/* Display Date */}
                    <span className="text-italic mr-2">
                      <i className="fa fa-calendar mr-2 blue" />
                      {displayDateTime(item.createdAt)}
                    </span>
                    {/* Display Time */}
                    <span className="text-italic">
                      <i className="fa fa-clock-o mr-1 blue" />
                      {displayTime(item.createdAt)}
                    </span>                    
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      );
    });
  }
}

NewsList.propTypes = {
  dataList: PropTypes.array.isRequired,
  totalRecords: PropTypes.number.isRequired
};

export default NewsList;
