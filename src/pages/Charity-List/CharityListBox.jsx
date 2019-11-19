/*
   
CharityListBox

*/
/** ****************************** Import Packages *************************** */
import React from "react";

/** ****************************** Import Components *************************** */
import GridBox from "../../components/GridBox";

const CharityListBox = ({
  charityList,
  categoryList,
  causeList,
  handleReload,
  imageHash
}) => {
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
};

export default CharityListBox;
