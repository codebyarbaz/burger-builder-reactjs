import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar position-fixed bg-white p-4">
      <div className="mb-5">
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default Sidebar;
