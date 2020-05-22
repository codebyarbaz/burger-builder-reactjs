import React, { Fragment } from "react";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

export default function BurgerIngredients(props) {
  return (
    <Fragment>
      {props.ingredients.map((ingredient, index) => {
        return <BurgerIngredient type={ingredient.name} key={index} />;
      })}
    </Fragment>
  );
}
