import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

import "./Sidebar.css";

const Sidebar = (props) => {
  return (
    <div className="sidebar position-fixed bg-white p-4">
      <div className="mb-5 d-flex justify-content-between align-items-center">
        <Logo />
        <span className="d-inline-block c-pointer" onClick={props.toggleSidebar}>
          Close
        </span>
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default Sidebar;
