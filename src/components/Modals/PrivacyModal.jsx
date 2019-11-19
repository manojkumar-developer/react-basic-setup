/*

Component : PrivacyModal

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
import PrivacyPolicy from "../../constants/privacypolicy";

class PrivacyModal extends Component {
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
          {"Privacy Policy"}
        </DialogTitle>
        <NavLink to="#" className="dialog-close" onClick={() => closeModal()}>
          <i className="fa fa-close" />
        </NavLink>
        <DialogContent>
          {/* Privacy Policy Text */}
          <div className="mt-4 mb-4">
            <h5 className="mb-3 fw-600">{PrivacyPolicy.privacyPolicy.privacyPolicyTitle}</h5>
            <p className="text-justify">{PrivacyPolicy.privacyPolicy.privacyPolicyText1}</p>
            <ul className="pl-5">
              <li className="mb-2 text-justify">{PrivacyPolicy.privacyPolicy.privacyPolicyList1}</li>
              <li className="mb-2 text-justify">{PrivacyPolicy.privacyPolicy.privacyPolicyList2}</li>
              <li className="mb-2 text-justify">{PrivacyPolicy.privacyPolicy.privacyPolicyList3}</li>
            </ul>
          </div>   
          {/* Gather Information */}
          <div className="mb-4">
            <h5 className="mb-3 fw-600">{PrivacyPolicy.gatherInformation.gatherInformationTitle}</h5>
            <p className="text-justify">{PrivacyPolicy.gatherInformation.gatherInformationText1}</p>
            <ul className="pl-5">
              <li className="mb-2 text-justify">{PrivacyPolicy.gatherInformation.gatherInformationList1}</li>
              <li className="mb-2 text-justify">{PrivacyPolicy.gatherInformation.gatherInformationList2}</li>
              <li className="mb-2 text-justify">{PrivacyPolicy.gatherInformation.gatherInformationList3}</li>
              <li className="mb-2 text-justify">{PrivacyPolicy.gatherInformation.gatherInformationList4}</li>
            </ul>
          </div>
          {/* Protect Information */}
          <div className="mb-4">
            <h5 className="mb-3 fw-600">{PrivacyPolicy.protectInformation.protectInformationTitle}</h5>
            <p className="text-justify">{PrivacyPolicy.protectInformation.protectInformationText1}</p>
            <ul className="pl-5">
              <li className="mb-2 text-justify">{PrivacyPolicy.protectInformation.protectInformationList1}</li>
              <li className="mb-2 text-justify">{PrivacyPolicy.protectInformation.protectInformationList2}</li>
              <li className="mb-2 text-justify">{PrivacyPolicy.protectInformation.protectInformationList3}</li>
              <li className="mb-2 text-justify">{PrivacyPolicy.protectInformation.protectInformationList4}</li>
              <li className="mb-2 text-justify">{PrivacyPolicy.protectInformation.protectInformationList5}</li>
              <li className="mb-2 text-justify">{PrivacyPolicy.protectInformation.protectInformationList6}</li>
              <li className="mb-2 text-justify">{PrivacyPolicy.protectInformation.protectInformationList7}</li>
              <li className="mb-2 text-justify">{PrivacyPolicy.protectInformation.protectInformationList8}</li>
            </ul>
          </div>    
          {/* Protect Privacy */}
          <div className="mb-4">
            <h5 className="mb-3 fw-600">{PrivacyPolicy.protectPrivacy.protectPrivacyTitle}</h5>
            <p className="text-justify">{PrivacyPolicy.protectPrivacy.protectPrivacyText1}</p>
            <ul className="pl-5">
              <li className="mb-2 text-justify">{PrivacyPolicy.protectPrivacy.protectPrivacyList1}</li>
              <li className="mb-2 text-justify">{PrivacyPolicy.protectPrivacy.protectPrivacyList2}</li>
              <li className="mb-2 text-justify">{PrivacyPolicy.protectPrivacy.protectPrivacyList3}</li>
            </ul>
            <p className="text-justify">{PrivacyPolicy.protectPrivacy.protectPrivacyText2}</p>
          </div>  
          {/* Share Information */}
          <div className="mb-4">
            <h5 className="mb-3 fw-600">{PrivacyPolicy.shareInformation.shareInformationTitle}</h5>
            <p className="text-justify">{PrivacyPolicy.shareInformation.shareInformationText1}</p>                        
          </div> 
          {/* Sending Email */}
          <div className="mb-4">
            <h5 className="mb-3 fw-600">{PrivacyPolicy.sendingEmail.sendingEmailTitle}</h5>
            <p className="text-justify">{PrivacyPolicy.sendingEmail.sendingEmailText1}</p>                        
          </div>
          {/* Contacted By Email */}
          <div className="mb-4">
            <h5 className="mb-3 fw-600">{PrivacyPolicy.contactedByEmail.contactedByEmailTitle}</h5>
            <p className="text-justify">{PrivacyPolicy.contactedByEmail.contactedByEmailText1}</p>  
            <ul className="pl-5">
              <li className="mb-2 text-justify">{PrivacyPolicy.contactedByEmail.contactedByEmailList1}</li>
              <li className="mb-2 text-justify">{PrivacyPolicy.contactedByEmail.contactedByEmailList2}</li>              
            </ul>                      
            <p className="text-justify">{PrivacyPolicy.contactedByEmail.contactedByEmailText2}</p>  
          </div>
          {/* Protect Your Privacy */}
          <div className="mb-4">
            <h5 className="mb-3 fw-600">{PrivacyPolicy.protectYourPrivacy.protectYourPrivacyTitle}</h5>            
            <ul className="pl-5">
              <li className="mb-2 text-justify">{PrivacyPolicy.protectYourPrivacy.protectYourPrivacyList1}</li>
              <li className="mb-2 text-justify">{PrivacyPolicy.protectYourPrivacy.protectYourPrivacyList2}</li>
              <li className="mb-2 text-justify">{PrivacyPolicy.protectYourPrivacy.protectYourPrivacyList3}</li>
              <li className="mb-2 text-justify">{PrivacyPolicy.protectYourPrivacy.protectYourPrivacyList4}</li>
              <li className="mb-2 text-justify">{PrivacyPolicy.protectYourPrivacy.protectYourPrivacyList5}</li>
              <li className="mb-2 text-justify">{PrivacyPolicy.protectYourPrivacy.protectYourPrivacyList6}</li>
            </ul>                      
          </div>
          {/* Identity Theft Assistance */}
          <div className="mb-4">
            <h5 className="mb-3 fw-600">{PrivacyPolicy.identityTheftAssistance.identityTheftAssistanceTitle}</h5>   
            <p className="text-justify mb-0">{PrivacyPolicy.identityTheftAssistance.identityTheftAssistanceText1}</p>           
            <p className="text-justify">
              <a target="_blank" className="mr-2" href={PrivacyPolicy.identityTheftAssistance.identityTheftAssistanceLinkType}>
                {PrivacyPolicy.identityTheftAssistance.identityTheftAssistanceLink}
              </a>
              <span className="">{PrivacyPolicy.identityTheftAssistance.identityTheftAssistancePhoneNo}</span>
            </p>     
            <p className="text-justify">{PrivacyPolicy.identityTheftAssistance.identityTheftAssistanceText2}</p>        
            <ol className="pl-5">
              <li className="mb-2">{PrivacyPolicy.identityTheftAssistance.identityTheftAssistanceList1}</li>
              <li className="mb-2">{PrivacyPolicy.identityTheftAssistance.identityTheftAssistanceList2}</li>
                <ul className="pl-5">
                  <li className="mb-2 text-justify">{PrivacyPolicy.identityTheftAssistance.identityTheftAssistanceInnerList1}</li>
                  <li className="mb-2 text-justify ">{PrivacyPolicy.identityTheftAssistance.identityTheftAssistanceInnerList2}</li>
                  <li className="mb-2 text-justify">{PrivacyPolicy.identityTheftAssistance.identityTheftAssistanceInnerList3}</li>
                </ul>
              <li className="mb-2 text-justify">{PrivacyPolicy.identityTheftAssistance.identityTheftAssistanceList3}</li>
              <li className="mb-2 text-justify">{PrivacyPolicy.identityTheftAssistance.identityTheftAssistanceList4}</li>
              <li className="mb-2 text-justify">{PrivacyPolicy.identityTheftAssistance.identityTheftAssistanceList5}</li>
            </ol>                      
          </div>
          {/* Phishing */}
          <div className="mb-4">
            <h5 className="mb-3 fw-600">{PrivacyPolicy.phishing.phishingTitle}</h5>
            <p className="text-justify">{PrivacyPolicy.phishing.phishingText1}</p>  
            <p className="text-justify">{PrivacyPolicy.phishing.phishingText2}</p>  
            <ul className="pl-5">
              <li className="mb-2 text-justify">{PrivacyPolicy.phishing.phishingList1}</li>
              <li className="mb-2 text-justify">{PrivacyPolicy.phishing.phishingList2}</li> 
              <li className="mb-2 text-justify">{PrivacyPolicy.phishing.phishingList3}</li>             
            </ul>                      
          </div>
          {/* Direct Marketing */}
          <div className="mb-4">
            <h5 className="mb-3 fw-600">{PrivacyPolicy.directMarketing.directMarketingTitle}</h5>
            <p className="text-justify mb-0">{PrivacyPolicy.directMarketing.directMarketingText1}</p>  
            <p className="text-justify">
              <a target="_blank" href={PrivacyPolicy.directMarketing.directMarketingLink1Type}>
                {PrivacyPolicy.directMarketing.directMarketingLink1}
              </a>
            </p>  
            <p className="text-justify">{PrivacyPolicy.directMarketing.directMarketingText2}</p>  
            <p className="text-justify">{PrivacyPolicy.directMarketing.directMarketingText3}</p>
            <p className="text-justify">{PrivacyPolicy.directMarketing.directMarketingText4}</p>
            <p className="text-justify">{PrivacyPolicy.directMarketing.directMarketingText5}</p>
            <p className="text-justify">
              <a target="_blank" href={PrivacyPolicy.directMarketing.directMarketingLink2Type}>
                {PrivacyPolicy.directMarketing.directMarketingLink2}
              </a>
            </p>
            <p className="text-justify">
              <span className="mr-2">{PrivacyPolicy.directMarketing.directMarketingText6}</span>
              <span><a target="_blank" href={PrivacyPolicy.directMarketing.directMarketingLink3Type}>
                {PrivacyPolicy.directMarketing.directMarketingLink3}</a>
              </span>
            </p>            
          </div>
          {/* Code Of Ethics */}
          <div className="mb-4">
            <h5 className="mb-3 fw-600">{PrivacyPolicy.codeOfEthics.codeOfEthicsTitle}</h5>
            <p className="text-justify">{PrivacyPolicy.codeOfEthics.codeOfEthicsText1}</p>  
            <p className="text-justify">{PrivacyPolicy.codeOfEthics.codeOfEthicsText2}</p>                                   
          </div>
          {/* Accurate Information */}
          <div className="mb-4">
            <h5 className="mb-3 fw-600">{PrivacyPolicy.accurateInformation.accurateInformationTitle}</h5>
            <p className="text-justify">{PrivacyPolicy.accurateInformation.accurateInformationText1}</p>                     
          </div>
          {/* Contact Us */}
          <div className="mb-4">
            <h5 className="mb-3 fw-600">{PrivacyPolicy.contactUs.contactUsTitle}</h5>
            <p className="text-justify">{PrivacyPolicy.contactUs.contactUsText1}</p>                     
          </div>
        </DialogContent>
      </Dialog>
    );
  }
}

PrivacyModal.propTypes = {
  openModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default PrivacyModal;
