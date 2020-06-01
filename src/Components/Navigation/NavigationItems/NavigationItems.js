import React from "react";

import "./NavigationItems.css";

const NavigationItem = () => {
  return (
    <ul className="list-inline d-flex mb-0">
      <li className="mr-3">
        <a className="text-decoration-none d-inline-block navItemLink mb-3 mb-md-0" href="/">
          Burger Builder
        </a>
      </li>
      <li>
        <a className="text-decoration-none d-inline-block navItemLink" href="/">
          Contiune checkout
        </a>
      </li>
    </ul>
  );
};

export default NavigationItem;
