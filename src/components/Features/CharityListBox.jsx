/*
   CharityListBox

 */
/** ****************************** Import packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";

/** ****************************** Import components *************************** */
import GridBox from "../GridBox";

class CharityListBox extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      imageHash: Date.now()
    };
  }

  render() {
    const { charityList, categoryList, causeList, handleReload } = this.props;
    const { imageHash } = this.state;
    if (!charityList) return null;
    return charityList.map(function(charity, index) {
      const key = index + 1;
      return (
        <div key={key} className="col-xl-4 col-lg-4 col-md-6">
          <GridBox
            categoryList={categoryList}
            charityData={charity}
            causeList={causeList}
            handleReload={handleReload}
            imageHash={imageHash}
          />
        </div>
      );
    });
  }
}

CharityListBox.propTypes = {
  charityList: PropTypes.array.isRequired,
  categoryList: PropTypes.array.isRequired,
  causeList: PropTypes.array.isRequired,
  handleReload: PropTypes.func.isRequired
};

export default CharityListBox;
