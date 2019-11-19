/*

CharityLogos


*/
/** ****************************** Import packages *************************** */
import React from "react";

/** ****************************** Import components *************************** */
import { charityLogoList } from "/imports/constants/my-account-constants";
import FilePath from "/imports/constants/folder";

const LogoList = Object.keys(charityLogoList).map(function(key) {
  const fileUrl = FilePath["charity-logo"] + charityLogoList[key].name;
  return (
    <div key={key} className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
      <img src={fileUrl} width="150" height="70" alt="" />
    </div>
  );
});

const CharityLogos = () => LogoList;

export default CharityLogos;
