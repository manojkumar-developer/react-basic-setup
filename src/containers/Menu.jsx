/*
   
Menu

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
//import { withTracker } from "meteor/react-meteor-data";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
//import { Session } from "meteor/session";

/** ****************************** Import Components *************************** */
import CustomButton from "../components/FormElements/CustomButton";
import MainMenu from "../components/MainMenu";

/** ****************************** Import Constants **************************** */
import { MyAccountConstants } from "../constants/menu";

/** ****************************** Import libraries **************************** */
//import { getLocalUser, deleteLocalUser } from "../utils/auth";
//import { displayName } from "../utils/common";
import History from "../utils/History";

/** ****************************** Import APIS *************************** */
//import { checkUserAccessById } from "../api/users";

class Menu extends Component {
  // componentWillReceiveProps() {
  //   const userId = Session.get("currentUserId");
  //   // get data from APIs
  //   if (userId) {
  //     checkUserAccessById(userId).then(result => {
  //       if (result && !result.success) {
  //         deleteLocalUser();
  //         Session.set("currentUserId", null);
  //         window.location.href = "/login";
  //       }
  //     });
  //   }
  // }

  _checkLogin ()  {
    History.push("/login");
  };

  _displayDefaultMenu = () => (
    <li className="nav-item">
      <CustomButton
        color="primary"
        variant="contained"
        size="medium"
        type="button"
        title={MyAccountConstants.myAccountButton.btnText}
        icon="user-white"
        btnClass="blue-bg"
        onClick={() => this._checkLogin()}
      />
    </li>
  );

  _displayDashBoard = () => (
    <li className="nav-item">
      <NavLink
        to=""
        className="nav-link dashboard-link"
        activeclassname="active"
        onClick={() => this._checkLogin()}
      >
        {MyAccountConstants.dashboard.name}
      </NavLink>
    </li>
  );

  // _displayUserMenu = currentUser => (
  //   <li className="nav-item dropdown">
  //     <a
  //       className="nav-link dropdown-toggle text-capitalize text-left"
  //       activeclassname="active"
  //       id="navbarDropdown"
  //       role="button"
  //       data-toggle="dropdown"
  //     >
  //       <img
  //         className="rounded-circle mr-2"
  //         src={
  //           currentUser.profileImage || `/user-images/${currentUser._id}/view`
  //         }
  //         width="50"
  //         height="50"
  //         alt=""
  //       />
  //       {currentUser && currentUser.nickName ? currentUser.nickName : null}
  //       {currentUser && !currentUser.nickName
  //         ? displayName(currentUser.firstName, currentUser.lastName)
  //         : null}
  //     </a>
  //     <div className="dropdown-menu">
  //       <NavLink to="/account/dashboard" className="dropdown-item">
  //         {MyAccountConstants.dashboard.title}
  //       </NavLink>
  //       <NavLink to="/settings/profile" className="dropdown-item">
  //         {MyAccountConstants.settings.title}
  //       </NavLink>
  //       <NavLink
  //         to="#"
  //         className="dropdown-item"
  //         onClick={() => {
  //           deleteLocalUser();
  //           Session.set("currentUserId", null);
  //           History.push("/login");
  //         }}
  //       >
  //         {MyAccountConstants.logout.title}
  //       </NavLink>
  //     </div>
  //   </li>
  // );

  render() {
    const { currentUser } = this.props;
    return (   
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <MainMenu />
        <ul className="navbar-nav profile-menu">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-capitalize text-left"
              activeclassname="active"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
            >
              <img
                className="rounded-circle mr-2"
                // src={
                //   currentUser.profileImage || `/user-images/${currentUser._id}/view`
                // }
                src="/image/user-images/default.jpg"
                width="50"
                height="50"
                alt=""
              />
              TK User
            </a>
            <div className="dropdown-menu">
              <NavLink to="/account/dashboard" className="dropdown-item">
                {MyAccountConstants.dashboard.title}
              </NavLink>
              <NavLink to="/settings/profile" className="dropdown-item">
                {MyAccountConstants.settings.title}
              </NavLink>
              <NavLink
                to="#"
                className="dropdown-item"
                // onClick={() => {
                //   deleteLocalUser();
                //   Session.set("currentUserId", null);
                //   History.push("/login");
                // }}
              >
                {MyAccountConstants.logout.title}
              </NavLink>
            </div>
          </li>
        </ul>

        {/* <ul className="navbar-nav profile-menu">
          {!currentUser ? this._displayDefaultMenu() : null}
          {currentUser ? this._displayUserMenu(currentUser) : null}
        </ul> */}

      </div>
    );
  }
}

Menu.defaultProps = {
  currentUser: []
};

Menu.propTypes = {
  currentUser: PropTypes.object
};

export default Menu;

// const MenuContainer = withTracker(() => {
//   const currentUser = getLocalUser();
//   if (currentUser) {
//     Session.set("currentUserId", currentUser._id);
//     Session.set("currentUser", currentUser);
//   }
//   return {
//     currentUser
//   };
// })(Menu);

// export default withRouter(MenuContainer);
