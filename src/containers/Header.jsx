/*
   
Header

*/
/** ****************************** Import packages *************************** */
import React from "react";
import { NavLink } from "react-router-dom";

/** ****************************** Import Constants *************************** */
import Menu from "../containers/Menu";

import { FilePath, headerLogo } from "../constants/folder";

const fileUrl = `/${FilePath["header-logo"]}${headerLogo.name}`;

const Header = () => (    
  <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div className="container">
      <NavLink className="navbar-brand" to="/">
        <img
          src={fileUrl}
          width="300"
          height="70"
          className="img-fluid"
          alt="True karma logo"
        />
      </NavLink>
      <button
        className="navbar-toggler justify-content-end"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <Menu />
    </div>
  </nav>
);

export default Header;
