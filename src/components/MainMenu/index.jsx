/*
   
MainMenu

*/
/** ****************************** Import packages *************************** */
import React, { Component } from "react";
import { Link } from "react-router-dom";

/** ****************************** Import utils and API *************************** */
import { MainMenuConstants } from "../../constants/menu.js";

class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const currentPath = window.location.pathname;
    return (    
      <ul className="navbar-nav main-menu margin-top-sm">
        {MainMenuConstants.map(function(menu) {
          const activeClass = currentPath === menu.value;
          return (
            <li className="nav-item" key={menu.id}>
              <Link
                to={`${menu.value}`}
                className={activeClass ? "nav-link active" : "nav-link "}
              >
                {menu.title}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default MainMenu;
