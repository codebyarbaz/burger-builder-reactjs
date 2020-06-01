import React, { Fragment } from "react";
import NavigationItem from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";
import Sidebar from "../Sidebar/Sidebar";

import "./Header.css";

const Header = () => {
  return (
    <Fragment>
      <header className="mb-md-5 mb-3">
        <div className="headerContent d-flex justify-content-between align-items-center px-3">
          <div className="text-white">MENU</div>
          <Logo />
          <nav id="nav">
            <NavigationItem />
          </nav>
        </div>
      </header>

      <Sidebar />
    </Fragment>
  );
};

export default Header;
