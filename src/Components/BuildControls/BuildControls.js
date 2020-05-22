import React from "react";

import BuildControl from "./BuildControl/BuildControl";

export default function BuildControls(props) {
  return (
    <div>
      <h3 className="text-center">Build Controls</h3>
      <span className="d-block text-center mb-5">Total Price: {props.price}</span>
      {props.controls.map((control, index) => {
        return (
          <BuildControl
            control={control}
            key={index}
            addIngredient={props.ingredientAdded}
            removeIngredient={props.ingredientRemove}
          />
        );
      })}
    </div>
  );
}
