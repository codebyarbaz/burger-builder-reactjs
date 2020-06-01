import React, { Fragment } from "react";

import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";

import "./Burger.css";

export default function Burger(props) {
  let ingredients = null;

  if (props.ingredients && props.ingredients.length) {
    ingredients = <BurgerIngredients ingredients={props.ingredients} />;
  } else {
    ingredients = (
      <p className="text-center mb-0 font-weight-bold">
        Start adding ingredients!
      </p>
    );
  }

  return (
    <Fragment>
      <div className="box">
        <div className="bread-top">
          <div className="seeds"></div>
          <div className="seeds2"></div>
        </div>
        {ingredients}
        <div className="bread-bottom"></div>
      </div>
    </Fragment>
  );
}
