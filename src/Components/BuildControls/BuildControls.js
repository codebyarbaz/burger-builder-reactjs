import React from "react";

import BuildControl from "./BuildControl/BuildControl";
import OrderConfirmation from "../Order/OrderConfirmation";

export default function BuildControls(props) {
  let confirmOrder = null;

  if (props.isPurchasable === true) {
    confirmOrder = (
      <OrderConfirmation
        ingredients={props.ingredientAddedList}
        totalPrice={props.price}
        continueOrder={props.resetBurger}
        cancelOrder={props.cancelPurchase}
      />
    );
  }

  return (
    <div>
      <h3 className="text-center">Build Controls</h3>
      <span className="d-block text-center mb-5">
        Total Price: ${props.price}
      </span>
      {props.controls.map((control, index) => {
        return (
          <BuildControl
            control={control}
            key={index}
            addIngredient={props.ingredientAdded}
            removeIngredient={props.ingredientRemove}
            totalIngredientAdded={props.ingredientAddedList[control.name]}
          />
        );
      })}

      <div className="text-center my-5">
        <button
          className="btn btn-primary px-5 py-2"
          disabled={props.price === 0}
          onClick={props.confirmOrder}
        >
          Order Now
        </button>
      </div>

      {confirmOrder}
    </div>
  );
}
