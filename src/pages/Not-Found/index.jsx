/*

Component : NotFound

*/
/** ****************************** Import Packages *************************** */
import React from "react";

/** ****************************** Import Constants *************************** */
import noRecordsFoundConstants from "../../constants/no-records-found";

import "./Not-Found.scss";

const NotFound = () => (
  <div className="not-found-page">
    <div className="alert alert-secondary bg-white" role="alert">
      <img
        className="img-fluid mb-4"
        src="../image/no-records-found.png"
        alt=""
      />
      <h4>{noRecordsFoundConstants.pageNotFound.title}!</h4>
    </div>
  </div>
);

export default NotFound;
