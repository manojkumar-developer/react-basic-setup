/*
   
Component : SideMenu

*/
/** ****************************** Import packages *************************** */
import React from "react";
import { NavLink } from "react-router-dom";

/** ****************************** Import ProfileMenuConstants *************************** */
import { ProfileMenuConstants } from "../../constants/menu.js";
import myAccountTitleConstants from "../../constants/my-account-titles.js";

const SideMenu = () => (
  <div className="col-xl-3 col-lg-3">
    <div className="left-sidebar mt-4 mb-3 text-left">
      <div className="quick-links">
        <div className="card mb-3">
          <div className="card-header">
            <h5 className="mb-0">{myAccountTitleConstants.myAccountSideMenu.title}</h5>
          </div>
          <div className="card-body p-3 pl-4">
            <li className="list-style-none">
              <NavLink
                to={`/account/dashboard`}
                className=""
              >
                {myAccountTitleConstants.dashboard.mainTitle}
              </NavLink>
            </li>
          </div>
        </div>
      </div>
    </div>
    <div className="left-sidebar sticky-top mb-3 text-left">
      {/** Quick Links * */}
      <div className="quick-links">
        <div className="card mb-3">
          <div className="card-header">
            <h5 className="mb-0">{myAccountTitleConstants.myAccountSideMenu.title2}</h5>
          </div>
          <div className="card-body">
            <ul className="list-item-style text-dark mb-0">
              {ProfileMenuConstants.map(function(menu) {
                return (
                  <li key={menu.id}>
                    <NavLink
                      to={`/settings/${menu.id}`}
                      className="link-active"
                    >
                      {menu.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SideMenu;
