import React from "react";
import "./Logo.css";

import LogoURL from "../../assets/images/burgerLogo.jpg";

const Logo = () => {
  return (
    <div>
      <img className="logo rounded" src={LogoURL} alt="BurgerBuilder" />
    </div>
  );
};

export default Logo;
