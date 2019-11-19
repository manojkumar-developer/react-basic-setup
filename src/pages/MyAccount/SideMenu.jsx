/* 

Component : SideMenu

*/
/** ****************************** Import Packages *************************** */
import React from "react";
import { NavLink } from "react-router-dom";

/** ****************************** Import Constants *************************** */
import { AccountMenuConstants } from "../../constants/menu.js";

const renderSubmenu = (menuList, key) => (
  <ul className="list-item-style renderMenu text-dark mb-0 mt-2">
    {menuList.map(function(menu) {
      return (
        <li
          className="renderSubmenu ml-4 collapse show"
          id={`collapse-${key}`}
          aria-labelledby="headingOne"
          data-parent={`#accordion-${key}`}
          key={menu.id}
        >
          <NavLink id="renderSubmenu" to={`/account/${menu.id}`} className="link-active d-block">
            {menu.title}
          </NavLink>
        </li>
      );
    })}
  </ul>
);

const SideMenu = () => (
  <ul id="accordion" className="list-item-style text-dark mb-0">
    {AccountMenuConstants.map(function(menu, key) {
      return (
        <li key={menu.id} className="accordion" id={`accordion-${key}`}>
          {menu.submenu ? (
            <a
              href="#renderSubmenu"
              className="myaccount-reports-menu myaccountAccMenu d-block"
              data-toggle="collapse"
              data-target={`#collapse-${key}`}
              aria-expanded="true"
              aria-controls={`collapse-${key}`}
            >
              {menu.title}
              <button
                className="btn btn-link collapse-btn"
                type="button"
                data-toggle="collapse"
                data-target={`#collapse-${key}`}
                aria-expanded="true"
                aria-controls={`collapse-${key}`}
              >
                <i className="fa fa-angle-right text-dark text-right" />
              </button>
            </a>
          ) : (
            <NavLink to={`/account/${menu.id}`} className="link-active d-block">
              {menu.title}
            </NavLink>
          )}
          {menu.submenu ? renderSubmenu(menu.submenu, key) : null}
        </li>
      );
    })}
  </ul>
);

export default SideMenu;
