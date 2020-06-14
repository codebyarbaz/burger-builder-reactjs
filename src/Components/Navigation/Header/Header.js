import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import NavigationItem from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";
import Sidebar from "../Sidebar/Sidebar";

import "./Header.css";

const Header = (props) => {
  let sidebar = null;
  if (props.isSidebarOpen === true) {
    sidebar = (
      <Sidebar
        isSidebarOpen={props.isSidebarOpen}
        toggleSidebar={props.toggleSidebar}
      />
    );
  }

  return (
    <Fragment>
      <header className="mb-md-5 mb-3">
        <div className="headerContent d-flex justify-content-between align-items-center px-3">
          <div className="text-white c-pointer" onClick={props.toggleSidebar}>
            <Link to="/">Menu</Link>
          </div>
          <Logo />
          <nav id="nav">
            <NavigationItem />
          </nav>
          <div className="text-white c-pointer" onClick={props.toggleSidebar}>
          <Link to="/orders">Orders</Link>
          </div>
          <div className="text-white c-pointer" onClick={props.toggleSidebar}>
          <Link to={{
            pathname: "/account",
            hash: "arbaz",
            search: "?name=hello"
          }}>Account</Link>
          </div>
        </div>
      </header>

      {sidebar}
    </Fragment>
  );
};

export default Header;
