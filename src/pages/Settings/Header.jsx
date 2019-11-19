/*
   
Component : Profile Header

 */
/** ****************************** Import packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";

/** ****************************** Import Components *************************** */
import CropImage from "../../components/CropImage";

/** ****************************** Import APIS *************************** */
//import { updateProfileByUserId } from "../../api/users";
import { displayName } from "../../utils/common";

/** ****************************** Import libraries **************************** */
import { getLocalUser, saveLocalUser } from "../../utils/auth";
import History from "../../utils/History";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: [],
      isUpload: false,
      savedImage: null,
      imageHash: Date.now()
    };
  }

  componentWillReceiveProps = nextProps => {
    const userDetails = nextProps.userDetails;
    const { image } = this.state;
    if (userDetails) {
      const profileImage = userDetails.profileImage
        ? userDetails.profileImage
        : image;
      this.setState({ userDetails, image: profileImage });
    }
  };

  // handleEditImage = cropImage => {
  //   const self = this;
  //   const userId = Session.get("currentUserId");
  //   if (cropImage) {
  //     updateProfileByUserId(userId, cropImage).then(result => {
  //       if (result) {
  //         const localData = getLocalUser();
  //         localData.profileImage = cropImage;
  //         saveLocalUser(localData);
  //         Meteor.setTimeout(function() {
  //           self.setState({
  //             savedImage: cropImage,
  //             isUpload: false,
  //             imageHash: Date.now()
  //           });
  //         }, 500);
  //         History.push("/settings/profile");
  //       }
  //     });
  //   }
  // };

  render() {
    const { userDetails } = this.state;
    const { savedImage, isUpload, imageHash } = this.state;
    if (!userDetails._id) return null;
    return (
      <div className="profile-image-name pb-2 mb-2">
        <div className="row">
          <div className="col-xl-12 d-flex">
            {/* Avator Image */}
            <div
              id="avator-image"
              className="avator-image col-2 pl-0 pr-0 mr-3"
            >
              <CropImage
                image={
                  isUpload
                    ? savedImage
                    : `/user-images/${userDetails._id}/view?${imageHash}`
                }
                handleWidth={150}
                handleHeight={150}
                handleEditImage={data => this.handleEditImage(data)}
              />
            </div>
            {/* Avator Details */}
            <div className="avator-details">
              <h4 className="fw-500 mb-2 text-capitalize">
                {userDetails
                  ? displayName(userDetails.firstName, userDetails.lastName)
                  : null}
              </h4>
              <div className="avator-location">
                <p className="mb-1 mdm-color">
                  {/* {<i className="fa fa-map-marker mr-2" />} */}
                  {userDetails.address1 ? `${userDetails.address1}, ` : null}
                </p>
                <p className="mb-1 mdm-color">
                  {userDetails.city ? `${userDetails.city}, ` : null}
                </p>
                <p className="mb-1 mdm-color">
                  {userDetails.state ? `${userDetails.state}.` : null}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  userDetails: PropTypes.object.isRequired
};

export default Header;
