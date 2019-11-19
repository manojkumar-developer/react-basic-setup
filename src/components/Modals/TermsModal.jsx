/*

Component : TermsModal

 */
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

/** ****************************** Import components *************************** */
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

/* ***************************** Import constants ************************* */
import terms from "../../constants/terms";

class TermsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { openModal, closeModal } = this.props;    
    return (
      <Dialog
        className="custom-dialog terms-conditions"
        scroll="paper"
        open={openModal}
        maxWidth="md"
      >
        <DialogTitle style={{ background: "#d9e8f4" }}>
          {"Terms of service"}
        </DialogTitle>
        <NavLink to="#" className="dialog-close" onClick={() => closeModal()}>
          <i className="fa fa-close" />
        </NavLink>
        <DialogContent>
          {/* Text 1 */}
          <div className="mt-4 mb-4">
            <p className="text-justify">{terms.termsofuseDesc.text1}</p>
          </div>
          {/* Agreement */}
          <div className="mb-4">
            <h5 className="mb-3 fw-600">{terms.agreement.agreementTitle}</h5>
            <p className="text-justify">{terms.agreement.agreementText1}</p>
          </div>
          {/* Modification */}
          <div className="mb-4">
            <h5 className="mb-3 fw-600">{terms.modification.modificationTitle}</h5>
            <p className="text-justify">{terms.modification.modificationText1}</p>
          </div>
          {/* Registration */}
          <div className="mb-4">
            <h5 className="mb-3 fw-600">{terms.registration.registrationTitle}</h5>
            <p className="text-justify">{terms.registration.registrationText1}</p>
          </div>
          {/* TermsOfService */}
          <div className="mb-4">
            <h5 className="mb-3 fw-600">{terms.termsOfService.termsOfServiceTitle}</h5>
            <p className="text-justify">{terms.termsOfService.termsOfServiceText1}</p>
            <p className="text-justify">{terms.termsOfService.termsOfServiceText2}</p>
            <p className="text-justify">{terms.termsOfService.termsOfServiceText3}</p>
          </div>
          {/* Billing */}
          <div className="mb-4">
            <h5 className="mb-3 fw-600">{terms.billing.billingTitle}</h5>
            <p className="text-justify">{terms.billing.billingText1}</p>
          </div>
          {/* Member */}
          <div className="mb-4">
            <h5 className="mb-3 fw-600">{terms.member.memberTitle}</h5>
            <p className="text-justify">{terms.member.memberText1}</p>
          </div>
          {/* Personal and Non Commercial Use */}
          <div className="mb-4">
            <h5 className="mb-3 fw-600">{terms.personalAndNonCommercialUse.personalAndNonCommercialUseTitle}</h5>
            <p className="text-justify">{terms.personalAndNonCommercialUse.personalUseText1}</p>
          </div>
          {/* Third Party Sites */}
          <div className="mb-4">
            <h5 className="mb-3 fw-600">{terms.thirdPartySites.thirdPartySitesTitle}</h5>
            <p className="text-justify">{terms.thirdPartySites.thirdPartySitesText1}</p>
          </div>
          {/* Dealings With Advertisers */}
          <div className="mb-4">
            <h5 className="mb-3 fw-600">{terms.dealingsWithAdvertisers.dealingsWithAdvertisersTitle}</h5>
            <p className="text-justify">{terms.dealingsWithAdvertisers.dealingsWithAdvertisersText1}</p>
          </div>
          {/* No Unlawful */}
          <div className="mb-4">
            <h5 className="mb-3 fw-600">{terms.noUnlawful.noUnlawfulTitle}</h5>
            <p className="text-justify">{terms.noUnlawful.noUnlawfulText1}</p>
          </div>
          {/* Communication */}
          <div className="mb-4">
            <h5 className="mb-3 fw-600">{terms.communicationServices.communicationServicesTitle}</h5>
            <p className="text-justify">{terms.communicationServices.communicationServicesText1}</p>
            <ul className="pl-5">
              <li className="mb-2 text-justify">{terms.communicationServices.communicationServicesList1}</li>
              <li className="mb-2 text-justify">{terms.communicationServices.communicationServicesList2}</li>
              <li className="mb-2 text-justify">{terms.communicationServices.communicationServicesList3}</li>
              <li className="mb-2 text-justify">{terms.communicationServices.communicationServicesList4}</li>
              <li className="mb-2 text-justify">{terms.communicationServices.communicationServicesList5}</li>
              <li className="mb-2 text-justify">{terms.communicationServices.communicationServicesList6}</li>
              <li className="mb-2 text-justify">{terms.communicationServices.communicationServicesList1}</li>
              <li className="mb-2 text-justify">{terms.communicationServices.communicationServicesList7}</li>
              <li className="mb-2 text-justify">{terms.communicationServices.communicationServicesList8}</li>
              <li className="mb-2 text-justify">{terms.communicationServices.communicationServicesList9}</li>
              <li className="mb-2 text-justify">{terms.communicationServices.communicationServicesList10}</li>
              <li className="mb-2 text-justify">{terms.communicationServices.communicationServicesList11}</li>
              <li className="mb-2 text-justify">{terms.communicationServices.communicationServicesList12}</li>
            </ul>
            <p className="text-justify">{terms.communicationServices.communicationServicesText2}</p>
            <p className="text-justify">{terms.communicationServices.communicationServicesText3}</p>
            <p className="text-justify">{terms.communicationServices.communicationServicesText4}</p>
            <p className="text-justify">{terms.communicationServices.communicationServicesText5}</p>
          </div>
          {/* Materials Provided */}
          <div className="mb-4">
            <h5 className="mb-3 fw-600">{terms.materialsProvided.materialsProvidedTitle}</h5>
            <p className="text-justify">{terms.materialsProvided.materialsProvidedText1}</p>
            <p className="text-justify">{terms.materialsProvided.materialsProvidedText2}</p>
            <p className="text-justify">{terms.materialsProvided.materialsProvidedText3}</p>
          </div>
          {/* Software Availble */}
          <div className="mb-4">
            <h5 className="mb-3 fw-600">{terms.softwareAvailble.softwareAvailbleTitle}</h5>
            <p className="text-justify">{terms.softwareAvailble.softwareAvailbleText1}</p>
          </div>
          {/* Computers Data Transmissions */}
          <div className="mb-4">
            <h5 className="mb-3 fw-600">{terms.computersDataTransmissions.computersDataTransmissionsTitle}</h5>
            <p className="text-justify">{terms.computersDataTransmissions.computersDataTransmissionsText1}</p>
          </div>
          {/* Indemnity */}
          <div className="mb-4">
            <h5 className="mb-3 fw-600">{terms.indemnity.indemnityTitle}</h5>
            <p className="text-justify">{terms.indemnity.indemnityText1}</p>
          </div>
          {/* Liablity Disclaimer */}
          <div className="mb-4">
            <h5 className="mb-3 fw-600">{terms.liablityDisclaimer.liablityDisclaimerTitle}</h5>
            <p className="text-justify">{terms.liablityDisclaimer.liablityDisclaimerText1}</p>
            <p className="text-justify">{terms.liablityDisclaimer.liablityDisclaimerText2}</p>
            <p className="text-justify">{terms.liablityDisclaimer.liablityDisclaimerText3}</p>
          </div>
          {/* Service Contact */}
          <div className="mb-4">
            <h5 className="mb-3 fw-600">{terms.serviceContact.serviceContactTitle}</h5>
            <p className="text-justify"><a href={"mailto:terms.serviceContact.serviceContactLink"}>{terms.serviceContact.serviceContactLink}</a></p>
          </div>
          {/* Termination */}
          <div className="mb-4">
            <h5 className="mb-3 fw-600">{terms.termination.terminationTitle}</h5>
            <p className="text-justify">{terms.termination.terminationText1}</p>
          </div>
          {/* General */}
          <div className="mb-4">
            <h5 className="mb-3 fw-600">{terms.general.generalTitle}</h5>
            <p className="text-justify">{terms.general.generalText1}</p>
          </div>
          {/* Copyright */}
          <div className="mb-4">
            <h5 className="mb-3 fw-600">{terms.copyright.copyrightTitle}</h5>
            <p className="text-justify">{terms.copyright.copyrightText1}</p>
          </div>
          {/* Trademarks */}
          <div className="mb-4">
            <h5 className="mb-3 fw-600">{terms.trademarks.trademarksTitle}</h5>
            <p className="text-justify">{terms.trademarks.trademarksText1}</p>
            <p className="text-justify">{terms.trademarks.trademarksText2}</p>
            <p className="text-justify">{terms.trademarks.trademarksText3}</p>
          </div>
          {/* Notices And Procedure */}
          <div className="mb-4">
            <h5 className="mb-3 fw-600">{terms.noticesAndProcedure.noticesAndProcedureTitle}</h5>
            <p className="text-justify">{terms.noticesAndProcedure.noticesAndProcedureText1}</p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
}

TermsModal.propTypes = {
  openModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default TermsModal;
