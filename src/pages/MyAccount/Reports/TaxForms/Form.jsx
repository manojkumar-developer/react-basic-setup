/* 

Component : TaxForm

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
//import { createContainer } from "meteor/react-meteor-data";
import html2canvas from "html2canvas";
import JsPDF from "jspdf";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/** ****************************** Import Constants *************************** */
import myAccountFormConstants from "../../../constants/my-account-forms";

/** ****************************** Import APIS *************************** */
// import { getTaxFormByYear } from "/imports/api/grants";
// import { getUserById } from "/imports/api/users";

import PrintLayout from "./PrintLayout";
import Header from "./Header";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";
import SectionSeven from "./SectionSeven";
import SectionEight from "./SectionEight";
import SectionNine from "./SectionNine";
import SectionTen from "./SectionTen";

class TaxForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taxFormData: []
    };
  }

  componentWillMount = () => {
    const { match } = this.props;
    if (match && match.params) {
      const userId = match.params.id;
      const year = match.params.year;
      // get data from APIs
      getTaxFormByYear(userId, year).then(taxFormData => {
        this.setState({ taxFormData });
      });
    }
  };

  pxToMm = px => Math.floor(px / document.getElementById("myMm").offsetHeight);

  handlePrint = () => {
    window.print();
  };

  handleDownload = () => {
    const { match } = this.props;
    const year = match.params.year;
    const fileName = `form-8283-${year}.pdf`;
    const input = document.getElementById("printDiv");
    toast.success(myAccountFormConstants.taxFormDownloadMsg.text);
    html2canvas(input)
      .then(canvas => {
        toast.success(myAccountFormConstants.taxFormDownloadSuccessMsg.text);
        const imgData = canvas.toDataURL("image/png");
        if (canvas && imgData) {
          const pdf = new JsPDF("P", "mm", "c2");
          pdf.addImage(imgData, "png", 0, 0);
          pdf.save(fileName);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { userData } = this.props;
    const { taxFormData } = this.state;
    let formData;
    if (taxFormData && taxFormData.length !== 0) {
      formData = taxFormData[0].data;
    }
    return (
      <div>
        <PrintLayout
          handlePrint={() => this.handlePrint()}
          handleDownload={() => this.handleDownload()}
        />
        {/* Msg Notification Box */}
        <ToastContainer autoClose={8000} />
        <div className="print-layout bg-white" id="printDiv">
          <div className="container tax-form-container">
            <div className="row">
              <div className="col-xl-12">
                {/* Form 8283 */}
                <div className="tax-report-form-8283 bg-white">
                  {/* Page 1 Section A Begins */}
                  <div className="page-1 pt-4 pb-4">
                    <Header formData={formData} userData={userData} />
                    <SectionOne formData={formData} />
                    <SectionTwo formData={formData} />
                    <SectionThree formData={formData} />
                    <SectionFour />
                  </div>
                  {/* Page 2 Section B Begins */}
                  <div className="page-2 pt-5 pb-4">
                    <SectionFive formData={formData} userData={userData} />
                    <div className="section-b-part-1">
                      <SectionSix formData={formData} />
                      <SectionSeven formData={formData} />
                      <SectionEight formData={formData} />
                      <SectionNine formData={formData} />
                      <SectionTen formData={formData} />
                    </div>
                  </div>{/* Page 2 Section B Ends */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TaxForms.propTypes = {
  match: PropTypes.object.isRequired,
  userData: PropTypes.object.isRequired
};

export default TaxForms;

// export default createContainer(props => {
//   const userId = props.match.params.id;
//   const handle = Meteor.subscribe("collect_user_by_id", userId);
//   const userData = getUserById(userId);
//   const loading = !handle.ready();
//   return {
//     userData,
//     loading
//   };
// }, TaxForms);
