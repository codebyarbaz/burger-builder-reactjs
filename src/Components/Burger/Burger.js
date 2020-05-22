import React, { Fragment } from "react";

import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";

import "./Burger.css";

export default function Burger(props) {
  return (
    <Fragment>
      <div className="box">
        <div className="bread-top">
          <div className="seeds"></div>
          <div className="seeds2"></div>
        </div>
        <BurgerIngredients ingredients={props.ingredients} />
        <div className="bread-bottom"></div>
      </div>
    </Fragment>
  );
}
