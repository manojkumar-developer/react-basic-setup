/* 

Component : TaxForm - Print Layout

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";

class PrintLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openNew: false,
    };
  }

  handleOpen = () => {
    this.setState({ openNew: true });
  };

  _closeModal = () => {
    this.setState({ openNew: false });
  };

  render() {
    const { handlePrint, handleDownload } = this.props;
    const { openNew } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xl-4 offset-xl-4 text-left">
            <a
              id="printpagebutton"
              href="#"
              role="presentation"
              className="print-report bg-dark text-white pl-2 pr-2 pt-1 pl-2 pr-2 pb-1"
              onClick={() => handlePrint()}
            >
              <i className="fa fa-print mr-1" />
              {" Print Report"}
            </a>
          </div>
          {/* <div className="col-xl-6 text-right">
            <a
              id="printpagebutton"
              href="#"
              role="presentation"
              className="download-pdf-btn bg-dark text-white pl-2 pr-2 pt-1 pl-2 pr-2 pb-1"
              onClick={() => handleDownload()}              
            >
              <i className="fa fa-download mr-1" />
              {"Download As PDF"}
            </a>
          </div> */}
        </div>
      </div>
    );
  }
}

PrintLayout.propTypes = {
  handlePrint: PropTypes.func.isRequired,
  handleDownload: PropTypes.func.isRequired
};

export default PrintLayout;
